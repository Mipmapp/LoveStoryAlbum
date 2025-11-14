# 📸 Photo Upload & Customization Guide

## ✅ Changes Made to Your Scrapbook

### 1. Updated "Our Favorite Memories" Section

I've modified the favorite memories to show your requested categories:

**Old Categories:**
- ❌ Your birthday surprise
- ❌ Sunset together  
- ❌ Holidays together

**New Categories:**
- ✅ Gifts (with Gift icon 🎁)
- ✅ Church together (with Church icon ⛪)
- ✅ Our first hug day (with Heart icon ❤️)

**Other memories (unchanged):**
- Our first date (Flower icon 🌸)
- Our adventure (Plane icon ✈️)
- Just us (Users icon 👥)

### 2. Added Flip/Rotate Effect ✨

**How it works:**
- When you **hover** over any memory card, it will **flip/rotate** to reveal the actual photo on the back
- The card smoothly rotates 180 degrees showing your uploaded image
- Move your mouse away and it flips back to show the icon

### 3. Photo Upload Locations

All photos should be uploaded to: **`client/public/photos/`**

## 📋 Required Photo Files

### For "Our Favorite Memories" (flip cards):
Place these files in `client/public/photos/`:

1. **`first-date-memory.jpg`** - Photo from your first date
2. **`church-together.jpg`** - Photo of you both at church ⛪
3. **`gifts.jpg`** - Photo of gifts you've exchanged 🎁
4. **`adventure-memory.jpg`** - Photo from an adventure
5. **`first-hug.jpg`** - Photo from your first hug day ❤️
6. **`just-us.jpg`** - Photo of just the two of you

### For "Our Adventures" Section:
- **`adventure.jpg`** - Main adventure photo

### For "The Little Moments" Section:
- **`moment1.jpg`** - First moment photo
- **`moment2.jpg`** - Second moment photo

## 🎯 How to Upload Your Photos

### Method 1: Drag & Drop (Easiest)
1. Open the **Files** panel in Replit (left sidebar)
2. Navigate to `client/public/photos/`
3. Drag your photos from your computer into this folder
4. Rename them to match the exact filenames above

### Method 2: Upload Button
1. In Replit, click the **three dots** (⋮) next to the `photos` folder
2. Select **Upload file**
3. Choose your photo
4. Rename it to the correct filename

### Method 3: Using Shell/Terminal
```bash
# Navigate to photos directory
cd client/public/photos/

# Upload your file (if using Replit's upload feature)
# Then rename it like this:
mv your-photo-name.jpg first-date-memory.jpg
```

## 📏 Photo Guidelines

### Best Practices:
- **Format**: `.jpg` or `.png` 
- **Size**: Keep under 5MB for fast loading
- **Dimensions**: Square photos (1:1 ratio) work best for flip cards
- **Quality**: Use high-quality photos for best results
- **Naming**: Use EXACT filenames (case-sensitive!)

### Recommended Dimensions:
- **Favorite Memories cards**: 800x800px (square)
- **Adventure/Moments**: 1200x800px (landscape) or 800x1200px (portrait)

## 🔄 See Your Changes

After uploading photos:
1. **Refresh** your browser (F5 or Cmd+R)
2. Click "Open Scrapbook"
3. Navigate to "Our Favorite Memories"
4. **Hover** over each card to see your photos flip into view!

## 🎨 Advanced: Adding More Photos

Want to add more photos to other sections? You can modify the configuration:

**File to edit:** `client/src/config/scrapbook-pages.ts`

**Example - Adding a photo to "Our Adventures":**
```typescript
{
  id: 'adventure-together',
  type: 'story',
  data: {
    title: 'Our Adventures',
    subtitle: 'Exploring the world together',
    content: [...],
    images: [
      {
        url: '/photos/adventure.jpg',
        alt: 'Our adventures together',
        caption: 'Making memories everywhere we go',
        position: 'right', // Options: 'left', 'right', 'top', 'bottom'
      },
      // Add more photos here:
      {
        url: '/photos/adventure-2.jpg',
        alt: 'Another adventure',
        caption: 'More amazing moments',
        position: 'left',
      },
    ],
  },
},
```

**Image Position Options:**
- `'right'` - Image appears on the right side
- `'left'` - Image appears on the left side
- `'top'` - Image appears at the top
- `'bottom'` - Images appear at the bottom (side by side if multiple)

## ❓ Troubleshooting

### Photos not showing?
1. ✅ Check filename spelling (must be EXACT)
2. ✅ Make sure photos are in `client/public/photos/` folder
3. ✅ Refresh your browser (Ctrl+F5 for hard refresh)
4. ✅ Check file format (.jpg or .png)
5. ✅ Check browser console for errors (F12 → Console tab)

### Flip effect not working?
1. ✅ Make sure you uploaded the photos with correct filenames
2. ✅ Try refreshing the page
3. ✅ If photos are missing, the card will show the icon as fallback

### Want to change the captions?
Edit the file: `client/src/components/scrapbook/favorite-memories-page.tsx`

Find the `memories` array and change the `caption` text:
```typescript
const memories = [
  { icon: Flower2, caption: 'Your new caption here', rotation: -4, imageUrl: '/photos/first-date-memory.jpg' },
  // ... more memories
];
```

## 🎉 Enjoy Your Personalized Scrapbook!

Your scrapbook now has:
- ✨ Beautiful flip/rotate effects on favorite memories
- 🎁 Updated categories (Gifts, Church together, First hug day)
- 📸 Ready to display your personal photos
- 💝 A romantic way to share your love story

Simply upload your photos and watch your memories come to life! 💕
