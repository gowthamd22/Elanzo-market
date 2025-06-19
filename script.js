// Melodies Music Streaming App - JavaScript Controller
class MelodiesApp {
    constructor() {
        this.currentSection = 'home';
        this.currentPlaylist = null;
        this.currentTrack = null;
        this.isPlaying = false;
        this.currentTime = 0;
        this.duration = 222; // 3:42 in seconds
        this.volume = 0.7;
        this.isMuted = false;
        this.isShuffled = false;
        this.repeatMode = 'off'; // 'off', 'all', 'one'
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadHomeContent();
        this.updatePlayer();
        this.startProgressSimulation();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                if (section) {
                    this.navigateToSection(section);
                }
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Playlist items
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const playlistId = parseInt(e.currentTarget.dataset.playlist);
                this.openPlaylist(playlistId);
            });
        });

        // Library items
        document.querySelectorAll('.library-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const playlistId = parseInt(e.currentTarget.dataset.playlist);
                this.openPlaylist(playlistId);
            });
        });

        // Quick pick items
        document.querySelectorAll('.quick-pick-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.play-btn')) {
                    const playlistId = parseInt(e.currentTarget.dataset.playlist);
                    this.openPlaylist(playlistId);
                }
            });
        });

        // Player controls
        document.getElementById('play-pause-btn').addEventListener('click', () => {
            this.togglePlayPause();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousTrack();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextTrack();
        });

        document.getElementById('shuffle-btn').addEventListener('click', () => {
            this.toggleShuffle();
        });

        document.getElementById('repeat-btn').addEventListener('click', () => {
            this.toggleRepeat();
        });

        // Volume control
        document.getElementById('volume-btn').addEventListener('click', () => {
            this.toggleMute();
        });

        // Progress bar
        document.querySelector('.progress-bar').addEventListener('click', (e) => {
            this.seekTrack(e);
        });

        // Volume slider
        document.querySelector('.volume-slider').addEventListener('click', (e) => {
            this.setVolume(e);
        });

        // Back/Forward buttons
        document.getElementById('back-btn').addEventListener('click', () => {
            this.goBack();
        });

        document.getElementById('forward-btn').addEventListener('click', () => {
            this.goForward();
        });

        // Like button
        document.querySelector('.like-btn').addEventListener('click', () => {
            this.toggleLike();
        });
    }

    navigateToSection(sectionName) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Show/hide sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');

        // Show/hide search bar
        const searchContainer = document.getElementById('search-container');
        if (sectionName === 'search') {
            searchContainer.classList.add('active');
            document.getElementById('search-input').focus();
        } else {
            searchContainer.classList.remove('active');
        }

        this.currentSection = sectionName;

        // Load section content
        switch (sectionName) {
            case 'home':
                this.loadHomeContent();
                break;
            case 'search':
                this.loadSearchContent();
                break;
            case 'library':
                this.loadLibraryContent();
                break;
        }
    }

    loadHomeContent() {
        // Load Made for you section
        const madeForYouContainer = document.getElementById('made-for-you');
        madeForYouContainer.innerHTML = '';
        
        mockData.playlists.slice(0, 4).forEach(playlist => {
            const item = this.createContentItem(playlist, 'playlist');
            madeForYouContainer.appendChild(item);
        });

        // Load Recently played section
        const recentlyPlayedContainer = document.getElementById('recently-played');
        recentlyPlayedContainer.innerHTML = '';
        
        mockData.recentlyPlayed.forEach(item => {
            const contentItem = this.createContentItem(item, item.type);
            recentlyPlayedContainer.appendChild(contentItem);
        });

        // Load Popular artists section
        const popularArtistsContainer = document.getElementById('popular-artists');
        popularArtistsContainer.innerHTML = '';
        
        mockData.artists.forEach(artist => {
            const item = this.createContentItem(artist, 'artist');
            popularArtistsContainer.appendChild(item);
        });
    }

    loadSearchContent() {
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Start typing to search for songs, artists, or playlists</h3>
            </div>
        `;
    }

    loadLibraryContent() {
        // Library content is already in HTML, just add event listeners
        document.querySelectorAll('.library-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const playlistId = parseInt(e.currentTarget.dataset.playlist);
                this.openPlaylist(playlistId);
            });
        });
    }

    createContentItem(data, type) {
        const item = document.createElement('div');
        item.className = `content-item${type === 'artist' ? ' artist' : ''}`;
        
        let title, subtitle, image;
        
        switch (type) {
            case 'playlist':
                title = data.title;
                subtitle = data.description;
                image = data.cover;
                item.addEventListener('click', () => this.openPlaylist(data.id));
                break;
            case 'album':
                title = data.title;
                subtitle = data.artist;
                image = data.cover;
                break;
            case 'artist':
                title = data.name;
                subtitle = `${data.followers} followers`;
                image = data.photo;
                break;
        }

        item.innerHTML = `
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p>${subtitle}</p>
            <button class="play-btn">
                <i class="fas fa-play"></i>
            </button>
        `;

        // Add play button functionality
        const playBtn = item.querySelector('.play-btn');
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (type === 'playlist') {
                this.playPlaylist(data.id);
            } else {
                // For albums and artists, just simulate play
                this.simulatePlay(data);
            }
        });

        return item;
    }

    openPlaylist(playlistId) {
        const playlist = mockData.playlists.find(p => p.id === playlistId);
        if (!playlist) return;

        this.currentPlaylist = playlist;

        // Show playlist section
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('playlist-section').classList.add('active');

        // Update playlist header
        document.getElementById('playlist-cover-img').src = playlist.cover;
        document.getElementById('playlist-title').textContent = playlist.title;
        document.getElementById('playlist-description').textContent = playlist.description;
        document.getElementById('playlist-song-count').textContent = playlist.songCount;

        // Load tracks
        this.loadPlaylistTracks(playlist);

        // Add play all button functionality
        document.querySelector('.play-all-btn').onclick = () => {
            this.playPlaylist(playlistId);
        };
    }

    loadPlaylistTracks(playlist) {
        const trackListContent = document.getElementById('track-list-content');
        trackListContent.innerHTML = '';

        playlist.tracks.forEach((track, index) => {
            const trackItem = document.createElement('div');
            trackItem.className = 'track-item';
            trackItem.innerHTML = `
                <div class="track-number">${index + 1}</div>
                <div class="play-icon"><i class="fas fa-play"></i></div>
                <div class="track-info">
                    <h4>${track.title}</h4>
                    <p>${track.artist}</p>
                </div>
                <div class="track-album">${track.album}</div>
                <div class="track-duration">${track.duration}</div>
            `;

            trackItem.addEventListener('click', () => {
                this.playTrack(track, playlist);
            });

            trackListContent.appendChild(trackItem);
        });
    }

    playPlaylist(playlistId) {
        const playlist = mockData.playlists.find(p => p.id === playlistId);
        if (!playlist || !playlist.tracks.length) return;

        this.playTrack(playlist.tracks[0], playlist);
    }

    playTrack(track, playlist = null) {
        // Update current track
        this.currentTrack = track;
        this.currentPlaylist = playlist;
        this.isPlaying = true;
        this.currentTime = 0;

        // Update now playing display
        document.getElementById('current-track-name').textContent = track.title;
        document.getElementById('current-track-artist').textContent = track.artist;
        
        // Find album cover for current track
        const albumCover = mockData.albums.find(album => album.artist === track.artist)?.cover || 
                          playlist?.cover || 
                          mockData.albums[0].cover;
        document.getElementById('current-track-image').src = albumCover;

        // Update play button
        document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';

        // Update track list highlighting
        if (playlist) {
            document.querySelectorAll('.track-item').forEach((item, index) => {
                item.classList.remove('playing');
                if (playlist.tracks[index] === track) {
                    item.classList.add('playing');
                }
            });
        }

        // Convert duration to seconds for simulation
        const [minutes, seconds] = track.duration.split(':').map(Number);
        this.duration = minutes * 60 + seconds;
    }

    togglePlayPause() {
        if (!this.currentTrack) {
            // If no track is selected, play the first track from the first playlist
            this.playTrack(mockData.playlists[0].tracks[0], mockData.playlists[0]);
            return;
        }

        this.isPlaying = !this.isPlaying;
        const playPauseBtn = document.getElementById('play-pause-btn');
        
        if (this.isPlaying) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    previousTrack() {
        if (!this.currentPlaylist || !this.currentTrack) return;

        const currentIndex = this.currentPlaylist.tracks.findIndex(t => t.id === this.currentTrack.id);
        if (currentIndex > 0) {
            this.playTrack(this.currentPlaylist.tracks[currentIndex - 1], this.currentPlaylist);
        } else if (this.repeatMode === 'all') {
            // Go to last track if repeat all is on
            this.playTrack(this.currentPlaylist.tracks[this.currentPlaylist.tracks.length - 1], this.currentPlaylist);
        }
    }

    nextTrack() {
        if (!this.currentPlaylist || !this.currentTrack) return;

        const currentIndex = this.currentPlaylist.tracks.findIndex(t => t.id === this.currentTrack.id);
        if (currentIndex < this.currentPlaylist.tracks.length - 1) {
            this.playTrack(this.currentPlaylist.tracks[currentIndex + 1], this.currentPlaylist);
        } else if (this.repeatMode === 'all') {
            // Go to first track if repeat all is on
            this.playTrack(this.currentPlaylist.tracks[0], this.currentPlaylist);
        }
    }

    toggleShuffle() {
        this.isShuffled = !this.isShuffled;
        const shuffleBtn = document.getElementById('shuffle-btn');
        
        if (this.isShuffled) {
            shuffleBtn.classList.add('active');
        } else {
            shuffleBtn.classList.remove('active');
        }
    }

    toggleRepeat() {
        const repeatBtn = document.getElementById('repeat-btn');
        
        switch (this.repeatMode) {
            case 'off':
                this.repeatMode = 'all';
                repeatBtn.classList.add('active');
                repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
                break;
            case 'all':
                this.repeatMode = 'one';
                repeatBtn.innerHTML = '<i class="fas fa-redo"><span style="font-size: 8px;">1</span></i>';
                break;
            case 'one':
                this.repeatMode = 'off';
                repeatBtn.classList.remove('active');
                repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
                break;
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const volumeBtn = document.getElementById('volume-btn');
        const volumeTrack = document.querySelector('.volume-track');
        
        if (this.isMuted) {
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            volumeTrack.style.width = '0%';
        } else {
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            volumeTrack.style.width = `${this.volume * 100}%`;
        }
    }

    toggleLike() {
        const likeBtn = document.querySelector('.like-btn');
        likeBtn.classList.toggle('liked');
        
        if (likeBtn.classList.contains('liked')) {
            likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            likeBtn.innerHTML = '<i class="far fa-heart"></i>';
        }
    }

    seekTrack(e) {
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        
        this.currentTime = percentage * this.duration;
        this.updateProgressBar();
    }

    setVolume(e) {
        const volumeSlider = e.currentTarget;
        const rect = volumeSlider.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        
        this.volume = Math.max(0, Math.min(1, percentage));
        this.isMuted = false;
        
        // Update UI
        document.getElementById('volume-btn').innerHTML = '<i class="fas fa-volume-up"></i>';
        document.querySelector('.volume-track').style.width = `${this.volume * 100}%`;
        document.querySelector('.volume-thumb').style.left = `${this.volume * 100}%`;
    }

    handleSearch(query) {
        const searchResults = document.getElementById('search-results');
        
        if (!query.trim()) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Start typing to search for songs, artists, or playlists</h3>
                </div>
            `;
            return;
        }

        // Simple search simulation
        const results = [];
        
        // Search playlists
        mockData.playlists.forEach(playlist => {
            if (playlist.title.toLowerCase().includes(query.toLowerCase()) ||
                playlist.description.toLowerCase().includes(query.toLowerCase())) {
                results.push({ ...playlist, type: 'playlist' });
            }
        });

        // Search artists
        mockData.artists.forEach(artist => {
            if (artist.name.toLowerCase().includes(query.toLowerCase()) ||
                artist.genre.toLowerCase().includes(query.toLowerCase())) {
                results.push({ ...artist, type: 'artist' });
            }
        });

        // Search albums
        mockData.albums.forEach(album => {
            if (album.title.toLowerCase().includes(query.toLowerCase()) ||
                album.artist.toLowerCase().includes(query.toLowerCase())) {
                results.push({ ...album, type: 'album' });
            }
        });

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No results found for "${this.escapeHtml(query)}"</h3>
                    <p>Try searching for something else</p>
                </div>
            `;
        } else {
            searchResults.innerHTML = `
                <div class="section-header">
                    <h2>Search results for "${this.escapeHtml(query)}"</h2>
                </div>
                <div class="content-grid" id="search-results-grid"></div>
            `;
            
            const resultsGrid = document.getElementById('search-results-grid');
            results.forEach(result => {
                const item = this.createContentItem(result, result.type);
                resultsGrid.appendChild(item);
            });
        }
    }

    goBack() {
        // Simple back functionality - return to home if in playlist view
        if (document.getElementById('playlist-section').classList.contains('active')) {
            this.navigateToSection('home');
        }
    }

    goForward() {
        // Placeholder for forward functionality
        console.log('Forward navigation not implemented');
    }

    simulatePlay(data) {
        // Simulate playing an album or artist
        this.currentTrack = {
            id: Date.now(),
            title: data.title || data.name,
            artist: data.artist || data.name,
            duration: "3:42"
        };
        
        this.isPlaying = true;
        this.currentTime = 0;
        this.duration = 222;
        
        document.getElementById('current-track-name').textContent = this.currentTrack.title;
        document.getElementById('current-track-artist').textContent = this.currentTrack.artist;
        document.getElementById('current-track-image').src = data.cover || data.photo;
        document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
    }

    updatePlayer() {
        this.updateProgressBar();
        this.updateVolumeDisplay();
    }

    updateProgressBar() {
        const progressTrack = document.querySelector('.progress-track');
        const progressThumb = document.querySelector('.progress-thumb');
        const timeDisplay = document.querySelector('.time-current');
        const totalTimeDisplay = document.querySelector('.time-total');
        
        const percentage = (this.currentTime / this.duration) * 100;
        progressTrack.style.width = `${percentage}%`;
        progressThumb.style.left = `${percentage}%`;
        
        // Update time displays
        timeDisplay.textContent = this.formatTime(this.currentTime);
        totalTimeDisplay.textContent = this.formatTime(this.duration);
    }

    updateVolumeDisplay() {
        const volumeTrack = document.querySelector('.volume-track');
        const volumeThumb = document.querySelector('.volume-thumb');
        
        if (!this.isMuted) {
            volumeTrack.style.width = `${this.volume * 100}%`;
            volumeThumb.style.left = `${this.volume * 100}%`;
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    startProgressSimulation() {
        setInterval(() => {
            if (this.isPlaying && this.currentTrack) {
                this.currentTime += 1;
                
                if (this.currentTime >= this.duration) {
                    // Track ended
                    if (this.repeatMode === 'one') {
                        this.currentTime = 0;
                    } else {
                        this.nextTrack();
                    }
                }
                
                this.updateProgressBar();
            }
        }, 1000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MelodiesApp();
});

// Simple HTTP server for development
if (typeof require !== 'undefined' && require.main === module) {
    const http = require('http');
    const fs = require('fs');
    const path = require('path');

    const server = http.createServer((req, res) => {
        let filePath = '.' + req.url;
        if (filePath === './') {
            filePath = './index.html';
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'application/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.wasm': 'application/wasm'
        };

        const contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if(error.code == 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 - File Not Found', 'utf-8');
                } else {
                    res.writeHead(500);
                    res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });

    const PORT = 5000;
    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Melodies app running at http://0.0.0.0:${PORT}/`);
    });
}
