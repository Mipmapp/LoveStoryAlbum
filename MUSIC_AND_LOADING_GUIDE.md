# 🎵 Music & Loading Features Guide

## ✅ Features Added

I've successfully added three major features to your scrapbook:

### 1. ⏳ Loading Screen
- **What it does**: Preloads all images before the scrapbook appears
- **Why it's important**: Prevents images from loading late or appearing slowly
- **What you see**: A beautiful loading screen with a heart animation showing progress

### 2. 🎵 Background Music
- **What it does**: Plays soft background music when you open the scrapbook
- **Volume**: Automatically set to 30% volume
- **Loops**: Music repeats until you play "Our Song" on the last page
- **Auto-stops**: Background music stops when "Our Song" plays

### 3. 📸 Falling Images Effect
- **What it does**: Shows falling photos when music plays on the Forever page
- **Trigger**: Starts when you click "Play Our Song" on the last page
- **Effect**: 20 random photos from your collection gently fall from top to bottom
- **Rotation**: Each image has a random tilt for a natural polaroid effect

## 🎵 How to Add Your Music Files

You need **TWO** music files:

### File 1: Background Music
**Filename**: `background-music.mp3`  
**Location**: `client/public/`  
**Purpose**: Plays while browsing the scrapbook  
**Requirements**:
- Should be a soft, romantic instrumental
- Duration: 2-5 minutes is ideal (it will loop)
- Format: .mp3
- Volume will automatically be set to 30%

### File 2: Our Song (Already exists!)
**Filename**: `our-song.mp3`  
**Location**: `client/public/` (already there!)  
**Purpose**: Special song that plays on the Forever page  
**Current file**: You already have this file

## 📥 How to Upload Background Music

### Option 1: Using Replit Interface
1. Open the **Files** panel in Replit
2. Navigate to `client/public/`
3. Drag and drop your music file
4. Rename it to exactly: `background-music.mp3`

### Option 2: Using Terminal
```bash
# Navigate to the public folder
cd client/public/

# If you uploaded a file with a different name, rename it:
mv your-music-file.mp3 background-music.mp3
```

## 🎭 How It All Works Together

### Step 1: User Opens the App
- Loading screen appears
- All images are preloaded
- Progress bar shows loading status
- "Preparing Your Love Story" message displays

### Step 2: User Clicks "Open Scrapbook"
- Loading screen disappears (once all images are loaded)
- Background music starts playing automatically at 30% volume
- Music loops continuously

### Step 3: User Browses Pages
- Background music continues playing
- User flips through pages seeing all content

### Step 4: User Reaches "Forever" Page (Last Page)
- Background music still playing
- User sees "Play Our Song" button

### Step 5: User Clicks "Play Our Song"
- Background music stops
- "Our Song" starts playing
- **Falling images effect begins!**
- 20 photos cascade down the screen
- Each photo rotates gently as it falls

### Step 6: User Clicks "Pause Our Song"
- Music pauses
- Falling images disappear

## 🎨 Customizing the Effects

### Change Number of Falling Images
Edit `client/src/components/scrapbook/forever-page.tsx`:
```typescript
for (let i = 0; i < 20; i++) {  // Change 20 to your desired number
```

### Change Falling Speed
Edit the same file:
```typescript
duration: 8 + Math.random() * 4,  // Change these numbers
// First number (8) = minimum duration in seconds
// Second number (4) = random variation added
```

### Change Image Sizes
Edit the same file:
```typescript
size: 60 + Math.random() * 80,  // Change these numbers
// First number (60) = minimum size in pixels
// Second number (80) = random variation added
```

### Change Background Music Volume
Edit `client/src/pages/scrapbook.tsx`:
```typescript
backgroundMusicRef.current.volume = 0.3; // Change 0.3 to any value between 0 and 1
// 0.3 = 30% volume
// 0.5 = 50% volume
// 1.0 = 100% volume
```

## 🎯 Which Images Are Used for Falling Effect?

The falling images use these photos from your `client/public/photos/` folder:
- `first-date-1.jpg`
- `how-we-met-1.jpg`
- `how-we-met-2.jpg`
- `first-date-memory.jpg`
- `church-together.jpg`
- `gifts.jpg`
- `adventure-memory.jpg`
- `first-hug.jpg`
- `just-us.jpg`

**To add more images to the falling effect:**

Edit `client/src/components/scrapbook/forever-page.tsx` and add your image filenames to the `imageUrls` array:
```typescript
const imageUrls = [
  '/photos/first-date-1.jpg',
  '/photos/how-we-met-1.jpg',
  // Add your new images here:
  '/photos/your-new-photo.jpg',
];
```

## ❓ Troubleshooting

### Loading Screen Stuck?
- Check browser console (F12) for errors
- Make sure all image files exist in `client/public/photos/`
- Try refreshing the page (Ctrl+F5 for hard refresh)

### Background Music Not Playing?
1. **Check if file exists**: Make sure `client/public/background-music.mp3` exists
2. **Browser autoplay policy**: Some browsers block autoplay. Try clicking anywhere on the page first
3. **File format**: Make sure it's an `.mp3` file
4. **Check browser console** (F12) for audio errors

### Falling Images Not Showing?
1. Make sure you clicked "Play Our Song" on the Forever page
2. Check that image files exist in `/photos/` folder
3. Check browser console for image loading errors

### Music Not Stopping When "Our Song" Plays?
- This should work automatically
- Try refreshing the page
- Check browser console for errors

## 🎉 Enjoy Your Enhanced Scrapbook!

Your digital scrapbook now has:
- ⚡ Fast, smooth loading
- 🎵 Beautiful background music
- 💕 Magical falling photos effect
- ✨ A complete romantic experience

Simply add your `background-music.mp3` file and you're all set!
