// Mock data for the Melodies music streaming app
const mockData = {
    // Album covers from the provided stock photos
    albums: [
        {
            id: 1,
            title: "Neon Dreams",
            artist: "Electric Waves",
            cover: "https://pixabay.com/get/ge97cad687883365d28799b037658f10e168e936899ed5570ffd079500353b9cedb6c0241adf6cd1db99e3b991e2a9da057b8a1f16c93d3a25508672d2f1a5a16_1280.jpg",
            description: "A journey through electronic soundscapes"
        },
        {
            id: 2,
            title: "Urban Nights",
            artist: "City Sounds",
            cover: "https://pixabay.com/get/g4939aaa90a3cd95ddb6c4b24d5829dde87d859fee601c35b8bcc8c3ea1ef2038036bef00fbe5fe579a089f1dc30da4f2e0bb8d5dbfc91da0be57418defd93d8c_1280.jpg",
            description: "Hip-hop beats that define the streets"
        },
        {
            id: 3,
            title: "Vinyl Memories",
            artist: "Retro Revival",
            cover: "https://pixabay.com/get/gd1432c82eadb8214af4f93cba177db3a906463974146ed29daef39cd2e6f5e84f1852efb378427a9725411a3972f1578ceed5a2b38f0f493d46a8129537acdf0_1280.jpg",
            description: "Classic rock revived for modern ears"
        },
        {
            id: 4,
            title: "Jazz Lounge",
            artist: "Smooth Operators",
            cover: "https://pixabay.com/get/g28286da2e20904d5985c74ebdab090fbc421bf664bfd571c7433598c85e40b188339e1aca2a00c152fc81734adf1e349978f1b84543c9f0e1045e3c2a59a0511_1280.jpg",
            description: "Sophisticated jazz for late night listening"
        },
        {
            id: 5,
            title: "Acoustic Sessions",
            artist: "Folk Harmony",
            cover: "https://pixabay.com/get/gdf08248c303910fd530d950197e1f806ade50e3a96d3d44e419fe38f58fa67da78ac0ccc33f77853d1efdf11e0d3915edbc5c9cbe1612ac9279e5640c07a055a_1280.jpg",
            description: "Raw, unfiltered acoustic performances"
        },
        {
            id: 6,
            title: "Dance Floor",
            artist: "Beat Masters",
            cover: "https://pixabay.com/get/g5f7f3d28c6e905f625137e3bf88982a93f3e114953cb0d4897aefe8e31dd029cb439b5b3f5be730b3f63abad922991478fab7329f0f6d89b7f56002504d0a839_1280.jpg",
            description: "High-energy tracks for the dance floor"
        },
        {
            id: 7,
            title: "Indie Vibes",
            artist: "Alternative Sound",
            cover: "https://pixabay.com/get/g5b6ddd287fc4489c31799e969c77345c1e7ac6133e02c92ff4f69a89d5c24ad587bcd5faa7aad8334ed7ea2f55ea5a2cbd2920fa605343c1ac131bc53f58dad6_1280.jpg",
            description: "Independent artists pushing boundaries"
        },
        {
            id: 8,
            title: "Midnight Blues",
            artist: "Soul Searchers",
            cover: "https://pixabay.com/get/g30f481a6c1b9899008c14a9f07f69a12b5bf94b43ab701b3f9c38be729ceacb2dd42c666c99a8c0e656b1980a2d9a34ee9bbae292c65dae8ca5a3ddfa6894d44_1280.jpg",
            description: "Deep blues for the soul"
        }
    ],

    // Artist photos from the provided stock photos
    artists: [
        {
            id: 1,
            name: "Luna Rose",
            photo: "https://pixabay.com/get/g8f123a5ba4d50e904164a06c11635c4b0d88feac3a59c0078de04a87677bc0df175a47b6d05117262591f39a8a3bce8b984a29d7da0c2f6492e4e5b2c4fc120f_1280.jpg",
            genre: "Pop",
            followers: "2.1M"
        },
        {
            id: 2,
            name: "Marcus Steel",
            photo: "https://pixabay.com/get/g7640b7b1756fc0f31e097ed9671e990657b0c2e5e955a3dea9b14a645df960bc009688540e904e3030e5cc6c0293a412cced30a5df97e7f28c6fd7e2e79d0265_1280.jpg",
            genre: "Rock",
            followers: "1.8M"
        },
        {
            id: 3,
            name: "Aria Melody",
            photo: "https://pixabay.com/get/g4153e7bfc44399b1e9243b058a42d2492e23130b41631248807e6944055c2f225f0f84273c4d6e08bb3de32be1a4d33b65b3fe37e1b87fdeeec4da7ea3b987fb_1280.jpg",
            genre: "Indie",
            followers: "954K"
        },
        {
            id: 4,
            name: "Echo Divine",
            photo: "https://pixabay.com/get/g1a0eccb7b0acebb1005aee71f46cbe0ec6140913d69eca0dd56b98b5dd59adfcf3a5be9d4f2a3ef9619dd7454df6245e515c3a4cb290e6fff611452ab1efbcca_1280.jpg",
            genre: "Electronic",
            followers: "1.3M"
        },
        {
            id: 5,
            name: "Sofia Serenade",
            photo: "https://pixabay.com/get/g0f5122be586e8923279b569ee1f28ccd3b011c8b73ffb4622c5019577f2558a035c682533094b4500d6c2725b7595ebf3edb8df4504a737a03f896d5b2cf5833_1280.jpg",
            genre: "Jazz",
            followers: "756K"
        },
        {
            id: 6,
            name: "Violet Storm",
            photo: "https://pixabay.com/get/gdf56a45db96656e929c307985298606a7a5c093ccdef96d67e9cf6f9f47f46236d1586b828af559dc6e0370df4e24a5e66facdcc5fe4d6a285d3b08e67df25f7_1280.jpg",
            genre: "Alternative",
            followers: "1.1M"
        }
    ],

    // Playlists with the provided thumbnail images
    playlists: [
        {
            id: 0,
            title: "Chill Vibes",
            description: "Relaxing tracks for your peaceful moments",
            cover: "https://pixabay.com/get/g4542888fc7c72facebc2f745017ed0308f32f72af2059247ed89397d3c62e0c47f54134f02289a3646d88181b374b9dfb618b06b22b29571ace3339ee39d2ec5_1280.jpg",
            songCount: 12,
            duration: "45 min",
            tracks: [
                { id: 1, title: "Peaceful Morning", artist: "Calm Waves", album: "Serenity", duration: "3:42" },
                { id: 2, title: "Sunset Dreams", artist: "Ambient Soul", album: "Tranquil", duration: "4:15" },
                { id: 3, title: "Gentle Breeze", artist: "Nature Sounds", album: "Elements", duration: "3:28" },
                { id: 4, title: "Quiet Moments", artist: "Peaceful Mind", album: "Stillness", duration: "4:03" },
                { id: 5, title: "Soft Whispers", artist: "Echo Chamber", album: "Minimalism", duration: "3:56" },
                { id: 6, title: "Floating Clouds", artist: "Sky Gazer", album: "Atmosphere", duration: "4:21" },
                { id: 7, title: "Meditation Flow", artist: "Inner Peace", album: "Mindfulness", duration: "5:12" },
                { id: 8, title: "Ocean Waves", artist: "Coastal Calm", album: "Tides", duration: "3:33" },
                { id: 9, title: "Forest Path", artist: "Woodland", album: "Nature", duration: "4:07" },
                { id: 10, title: "Starlight", artist: "Night Sky", album: "Cosmos", duration: "3:49" },
                { id: 11, title: "Dawn Chorus", artist: "Morning Birds", album: "Awakening", duration: "3:22" },
                { id: 12, title: "Zen Garden", artist: "Harmony", album: "Balance", duration: "4:35" }
            ]
        },
        {
            id: 1,
            title: "Workout Mix",
            description: "High-energy tracks to power your workout",
            cover: "https://pixabay.com/get/g525a555e1f3569022ace308d1efa6326aeee60db2706dfefc4eea540ffa5d01668166d03147ddc8f8fd24518ec2af67b0da1533fbdda9ac3e0c19833dfc402ad_1280.jpg",
            songCount: 15,
            duration: "58 min",
            tracks: [
                { id: 13, title: "Power Up", artist: "Energy Boost", album: "Motivation", duration: "3:21" },
                { id: 14, title: "Beast Mode", artist: "Gym Warriors", album: "Strength", duration: "3:45" },
                { id: 15, title: "Unstoppable", artist: "Adrenaline Rush", album: "Peak Performance", duration: "4:02" },
                { id: 16, title: "Push Harder", artist: "Iron Will", album: "Determination", duration: "3:38" },
                { id: 17, title: "Victory Lane", artist: "Champions", album: "Triumph", duration: "3:57" },
                { id: 18, title: "Fire Inside", artist: "Burning Passion", album: "Intensity", duration: "4:13" },
                { id: 19, title: "No Limits", artist: "Beyond Boundaries", album: "Infinite", duration: "3:29" },
                { id: 20, title: "Sweat Equity", artist: "Hard Work", album: "Dedication", duration: "4:08" },
                { id: 21, title: "Cardio King", artist: "Heart Pumper", album: "Endurance", duration: "3:54" },
                { id: 22, title: "Muscle Memory", artist: "Repetition", album: "Consistency", duration: "3:46" },
                { id: 23, title: "Final Rep", artist: "Last Stand", album: "Completion", duration: "4:21" },
                { id: 24, title: "Recovery Mode", artist: "Cool Down", album: "Rest", duration: "3:31" },
                { id: 25, title: "Tomorrow's Strength", artist: "Future Gains", album: "Progress", duration: "4:17" },
                { id: 26, title: "Protein Shake", artist: "Post Workout", album: "Nutrition", duration: "3:42" },
                { id: 27, title: "Gym Life", artist: "Fitness Culture", album: "Lifestyle", duration: "4:05" }
            ]
        },
        {
            id: 2,
            title: "Focus Music",
            description: "Instrumental tracks for deep concentration",
            cover: "https://pixabay.com/get/g6e43f0589e54d502f4446734817cff82a612a52423a57d10cd80ad5936017fef0c8db2f393aadc49fe11e1f634d5d957bf8783be27450a9e18213f9b9fe8986a_1280.jpg",
            songCount: 8,
            duration: "32 min",
            tracks: [
                { id: 28, title: "Deep Concentration", artist: "Focus Flow", album: "Productivity", duration: "4:23" },
                { id: 29, title: "Mental Clarity", artist: "Clear Mind", album: "Cognitive", duration: "3:58" },
                { id: 30, title: "Study Session", artist: "Learning Mode", album: "Education", duration: "4:12" },
                { id: 31, title: "Creative Spark", artist: "Innovation", album: "Inspiration", duration: "3:47" },
                { id: 32, title: "Problem Solver", artist: "Logic Gates", album: "Analysis", duration: "4:05" },
                { id: 33, title: "Flow State", artist: "Optimal Performance", album: "Zone", duration: "4:34" },
                { id: 34, title: "Deadline Rush", artist: "Time Pressure", album: "Urgency", duration: "3:29" },
                { id: 35, title: "Task Complete", artist: "Achievement", album: "Success", duration: "3:52" }
            ]
        },
        {
            id: 3,
            title: "Party Hits",
            description: "Dance floor anthems and party favorites",
            cover: "https://pixabay.com/get/g49c886069670f3c07fbdd8583b89d5a17109d072da0ab36605c2bda894a44f386853f7a8c3846130a8e172375662b566d2f80c61e6e65358e778995c5344ae7b_1280.jpg",
            songCount: 20,
            duration: "78 min",
            tracks: [
                { id: 36, title: "Dance Floor King", artist: "Party Starter", album: "Celebration", duration: "3:45" },
                { id: 37, title: "Weekend Vibes", artist: "Friday Night", album: "Freedom", duration: "4:12" },
                { id: 38, title: "Turn It Up", artist: "Volume Control", album: "Loud & Proud", duration: "3:33" },
                { id: 39, title: "Neon Lights", artist: "Club Scene", album: "Nightlife", duration: "4:08" },
                { id: 40, title: "Bass Drop", artist: "Electronic Pulse", album: "EDM Hits", duration: "3:54" },
                { id: 41, title: "Party Animal", artist: "Wild Side", album: "Unleashed", duration: "3:42" },
                { id: 42, title: "Midnight Fever", artist: "Late Night", album: "After Hours", duration: "4:21" },
                { id: 43, title: "Celebration Time", artist: "Good Times", album: "Joy", duration: "3:58" },
                { id: 44, title: "DJ's Choice", artist: "Mix Master", album: "Club Favorites", duration: "4:05" },
                { id: 45, title: "Crowd Pleaser", artist: "Audience Love", album: "Popular", duration: "3:47" },
                { id: 46, title: "Last Dance", artist: "Final Song", album: "Memories", duration: "4:26" },
                { id: 47, title: "After Party", artist: "Continued Fun", album: "Extended", duration: "3:39" },
                { id: 48, title: "Summer Anthem", artist: "Seasonal Hit", album: "Hot Tracks", duration: "4:13" },
                { id: 49, title: "Feel Good", artist: "Happy Vibes", album: "Positivity", duration: "3:51" },
                { id: 50, title: "Dance Revolution", artist: "Movement", album: "Rhythm", duration: "4:07" },
                { id: 51, title: "Party Starter", artist: "Energy Igniter", album: "Activation", duration: "3:44" },
                { id: 52, title: "Groove Machine", artist: "Rhythm Section", album: "Beat", duration: "4:18" },
                { id: 53, title: "Club Banger", artist: "Hit Maker", album: "Chart Toppers", duration: "3:56" },
                { id: 54, title: "Dance Till Dawn", artist: "All Nighter", album: "Endurance", duration: "4:31" },
                { id: 55, title: "Party Over", artist: "End of Night", album: "Conclusion", duration: "3:48" }
            ]
        }
    ],

    // Recently played albums
    recentlyPlayed: [
        {
            id: 1,
            title: "Neon Dreams",
            artist: "Electric Waves",
            cover: "https://pixabay.com/get/ge97cad687883365d28799b037658f10e168e936899ed5570ffd079500353b9cedb6c0241adf6cd1db99e3b991e2a9da057b8a1f16c93d3a25508672d2f1a5a16_1280.jpg",
            type: "album"
        },
        {
            id: 2,
            title: "Urban Nights",
            artist: "City Sounds",
            cover: "https://pixabay.com/get/g4939aaa90a3cd95ddb6c4b24d5829dde87d859fee601c35b8bcc8c3ea1ef2038036bef00fbe5fe579a089f1dc30da4f2e0bb8d5dbfc91da0be57418defd93d8c_1280.jpg",
            type: "album"
        },
        {
            id: 0,
            title: "Chill Vibes",
            artist: "Various Artists",
            cover: "https://pixabay.com/get/g4542888fc7c72facebc2f745017ed0308f32f72af2059247ed89397d3c62e0c47f54134f02289a3646d88181b374b9dfb618b06b22b29571ace3339ee39d2ec5_1280.jpg",
            type: "playlist"
        },
        {
            id: 3,
            title: "Jazz Lounge",
            artist: "Smooth Operators",
            cover: "https://pixabay.com/get/g28286da2e20904d5985c74ebdab090fbc421bf664bfd571c7433598c85e40b188339e1aca2a00c152fc81734adf1e349978f1b84543c9f0e1045e3c2a59a0511_1280.jpg",
            type: "album"
        },
        {
            id: 4,
            title: "Acoustic Sessions",
            artist: "Folk Harmony",
            cover: "https://pixabay.com/get/gdf08248c303910fd530d950197e1f806ade50e3a96d3d44e419fe38f58fa67da78ac0ccc33f77853d1efdf11e0d3915edbc5c9cbe1612ac9279e5640c07a055a_1280.jpg",
            type: "album"
        }
    ]
};
