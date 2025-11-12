# Digital Scrapbook Customization Guide

Welcome! This guide will help you personalize your romantic digital scrapbook for your girlfriend.

## Adding Your Song

To use your own romantic song as background music:

1. **Option 1: Use an online audio file**
   - Upload your song to a file hosting service (like Dropbox, Google Drive, or a cloud storage)
   - Get a direct link to the MP3/audio file
   - Open `client/src/pages/scrapbook.tsx`
   - Find line 15: `const BACKGROUND_MUSIC_URL = '...'`
   - Replace the URL with your song's URL

2. **Option 2: Use a local audio file**
   - Place your song file (e.g., `our-song.mp3`) in the `client/public/` folder
   - Open `client/src/pages/scrapbook.tsx`
   - Change line 15 to: `const BACKGROUND_MUSIC_URL = '/our-song.mp3'`

## Adding Your Photos

### How We Met Page (2 Polaroid photos)
Open `client/src/components/scrapbook/how-we-met-page.tsx`

Find the Polaroid sections (around lines 35-50) and replace the placeholder content:

```tsx
{/* Replace this: */}
<div className="aspect-square w-48 bg-gradient-to-br from-primary/20 to-accent/30 mb-4 flex items-center justify-center text-4xl">
  <Camera className="w-20 h-20 text-primary/60" />
</div>

{/* With your photo: */}
<div className="aspect-square w-48 mb-4 overflow-hidden">
  <img src="/path/to/your-photo.jpg" alt="Your photo" className="w-full h-full object-cover" />
</div>
```

To add photos:
1. Place your photos in `client/public/photos/` folder (create it if it doesn't exist)
2. Name them clearly (e.g., `her-photo.jpg`, `my-photo.jpg`)
3. Update the `src` path in the code above

### Favorite Memories Page (6 photos)
Currently uses icons. To add real photos:

Open `client/src/components/scrapbook/favorite-memories-page.tsx`

Replace the icon with an image (around line 62):

```tsx
{/* Replace: */}
<memory.icon className="w-20 h-20 text-primary/60 stroke-[1.5]" />

{/* With: */}
<img 
  src={`/photos/memory-${index + 1}.jpg`} 
  alt={memory.caption}
  className="w-full h-full object-cover"
/>
```

Then add 6 photos to `client/public/photos/` named:
- `memory-1.jpg` (Our first date)
- `memory-2.jpg` (Sunset together)
- `memory-3.jpg` (Your birthday surprise)
- `memory-4.jpg` (Our adventure)
- `memory-5.jpg` (Holidays together)
- `memory-6.jpg` (Just us)

## Personalizing Text Content

### How We Met Story
Open `client/src/components/scrapbook/how-we-met-page.tsx`

Around lines 60-75, edit the story paragraphs:

```tsx
<p className="text-lg leading-relaxed text-card-foreground font-sans">
  {/* Write your own story here! */}
  I remember the first time I saw you...
</p>
```

### Reasons I Love You
Open `client/src/components/scrapbook/reasons-page.tsx`

Around lines 5-12, edit or add more reasons:

```tsx
const reasons = [
  { text: 'You make me laugh every day', color: 'bg-yellow-100', rotation: -3 },
  { text: 'Your smile lights up my world', color: 'bg-pink-100', rotation: 2 },
  // Add more reasons here!
];
```

Color options: `bg-yellow-100`, `bg-pink-100`, `bg-blue-100`, `bg-green-100`, `bg-purple-100`, `bg-orange-100`, `bg-red-100`, `bg-teal-100`

### Love Letter
Open `client/src/components/scrapbook/love-letter-page.tsx`

Around lines 70-90, edit the letter content:

```tsx
<p>My dearest love,</p>
<p>{/* Write your heartfelt message here */}</p>
```

### Your Names
Open `client/src/components/scrapbook/forever-page.tsx`

Around line 41, replace "You & Me" with your actual names:

```tsx
<div className="text-4xl md:text-6xl font-handwritten text-card-foreground fade-in-up">
  Sarah & John  {/* Replace with your names! */}
  <br />
  <div className="flex items-center justify-center gap-3 mt-2">
    <span className="text-3xl md:text-5xl text-primary">Forever</span>
    <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary" />
  </div>
</div>
```

## Customizing Colors

If you want to change the color theme, open `client/src/index.css` and modify the color values around lines 15-43.

The main colors to adjust:
- `--primary`: Main romantic pink/red color (currently: 340 60% 55%)
- `--background`: Page background (currently: 30 20% 96%)
- `--card`: Card background (currently: 35 25% 94%)

## Customizing the Hidden Surprise Message

Open `client/src/pages/scrapbook.tsx`

Around line 132-134, edit the secret message:

```tsx
<p className="text-2xl font-handwritten text-center text-card-foreground leading-relaxed">
  Your custom secret message here!
</p>
```

## Testing Your Changes

After making changes:

1. Save all files
2. The website will automatically reload
3. Open your browser to see the changes
4. Navigate through all pages to ensure everything looks perfect

## Mobile Optimization

The scrapbook is already fully responsive! Test it on your phone by:
1. Opening the website on your phone's browser
2. All animations and interactions work on mobile
3. Photos will automatically resize

## Final Tips

- **High-quality photos**: Use photos that are at least 800x800 pixels for best quality
- **Personal touches**: The more personal details you add, the more special it becomes
- **Test thoroughly**: Go through each page multiple times before sharing
- **Share the link**: Once perfect, share the website URL with your girlfriend

---

Made with love for your special someone. Enjoy creating beautiful memories together!
