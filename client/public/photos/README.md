# How to Add Your Photos to the Scrapbook

This folder contains all the photos used in your digital scrapbook. Simply upload your images here with the correct filenames to personalize your scrapbook!

## 📁 Photo Files Needed

### For "Our Favorite Memories" (with flip effect on hover):
Upload your photos with these exact filenames:
- `first-date-memory.jpg` - Photo from your first date
- `church-together.jpg` - Photo of you both at church
- `gifts.jpg` - Photo of gifts you've exchanged
- `adventure-memory.jpg` - Photo from one of your adventures
- `first-hug.jpg` - Photo from your first hug day
- `just-us.jpg` - Photo of just the two of you

### For "Our Adventures" section:
- `adventure.jpg` - Your adventure photo (already configured in the config file)

### For "The Little Moments" section:
- `moment1.jpg` - First special moment photo
- `moment2.jpg` - Second special moment photo

### For "Our First Date" section:
- `first-date-1.jpg` - Already exists!
- `first-date-2.jpg` - Add this one if you haven't yet

### For "How We Met" section:
- `how-we-met-1.jpg` - Already exists!
- `how-we-met-2.jpg` - Already exists!

## 📝 Tips for Best Results

1. **Image Format**: Use `.jpg` or `.png` format
2. **File Size**: Keep images under 5MB for faster loading
3. **Dimensions**: Square images (1:1 ratio) work best for the favorite memories cards
4. **Naming**: Make sure to use the EXACT filenames listed above (case-sensitive!)
5. **Quality**: Use high-quality photos for the best viewing experience

## 🎨 How to Upload Photos

### Option 1: Using the Replit Interface
1. Click on the "Files" tab in Replit
2. Navigate to `client/public/photos/`
3. Drag and drop your photos into this folder
4. Rename them to match the filenames above

### Option 2: Using the Shell
1. Upload your photos to Replit
2. Use the command: `mv your-photo.jpg client/public/photos/desired-name.jpg`

## 🔄 See Your Changes
After uploading photos, refresh your scrapbook page to see them appear!

## 🎯 Advanced: Adding More Photos

If you want to add more photos to sections like "Our Adventures" or "The Little Moments", you can edit the configuration file at:
`client/src/config/scrapbook-pages.ts`

Look for the `images` array in each section and add more entries following this format:
```typescript
{
  url: '/photos/your-new-photo.jpg',
  alt: 'Description of the photo',
  caption: 'Caption to display',
  position: 'right', // or 'left', 'top', 'bottom'
}
```
