# Adding New Story Chapters to Your Scrapbook

This guide will show you how to easily add new story-based chapters to your digital scrapbook.

## Quick Start

All your scrapbook pages are configured in one file: `client/src/config/scrapbook-pages.ts`

To add a new story chapter, simply add a new entry to the `scrapbookPages` array.

## Story Page Structure

Each story page has the following structure:

```typescript
{
  id: 'unique-page-id',           // A unique identifier for this page
  type: 'story',                   // Use 'story' for text-heavy pages
  data: {
    title: 'Page Title',           // Main heading
    subtitle: 'Optional subtitle', // Optional subheading
    content: [                     // Array of paragraphs
      'First paragraph text...',
      'Second paragraph text...',
      'Third paragraph text...',
    ],
    images: [                      // Optional: 1-2 images
      {
        url: '/photos/your-image.jpg',
        alt: 'Image description',
        caption: 'Optional caption',
        position: 'top',           // 'top', 'middle', 'bottom', 'left', or 'right'
      },
    ],
  },
}
```

## Image Positions Explained

- **top**: Image appears above the text
- **middle**: Image appears in the middle, with paragraphs split above and below it
- **bottom**: Image(s) appear below the text (supports 1-2 images)
- **left**: Image appears on the left side with text wrapping on the right (supports 1-2 images stacked)
- **right**: Image appears on the right side with text wrapping on the left (supports 1-2 images stacked)

## Example: Adding a Simple Text-Only Chapter

```typescript
{
  id: 'why-i-love-you',
  type: 'story',
  data: {
    title: 'Why I Love You',
    content: [
      'I love the way you make me laugh, even on my worst days.',
      'I love how you always know exactly what to say to make me feel better.',
      'Most of all, I love that with you, I can just be myself.',
    ],
  },
}
```

## Example: Adding a Chapter with One Image

```typescript
{
  id: 'our-trip-to-paris',
  type: 'story',
  data: {
    title: 'Paris Adventure',
    subtitle: 'The city of love',
    content: [
      'Walking through the streets of Paris with you was magical.',
      'Every corner we turned revealed another beautiful moment.',
      'I knew I wanted to travel the world with you.',
    ],
    images: [
      {
        url: '/photos/paris.jpg',
        alt: 'Us in front of the Eiffel Tower',
        caption: 'Paris, 2024',
        position: 'top',
      },
    ],
  },
}
```

## Example: Adding a Chapter with Two Images

```typescript
{
  id: 'beach-memories',
  type: 'story',
  data: {
    title: 'Beach Days',
    content: [
      'The sound of waves, the warm sand, and you by my side.',
      'These are the moments I treasure most.',
    ],
    images: [
      {
        url: '/photos/beach1.jpg',
        alt: 'Sunset at the beach',
        caption: 'Our first beach sunset',
        position: 'bottom',
      },
      {
        url: '/photos/beach2.jpg',
        alt: 'Walking on the beach',
        caption: 'Endless walks together',
        position: 'bottom',
      },
    ],
  },
}
```

## Example: Chapter with Image on the Side

```typescript
{
  id: 'cooking-together',
  type: 'story',
  data: {
    title: 'Kitchen Adventures',
    subtitle: 'Our favorite recipes',
    content: [
      'Sunday mornings are my favorite. We wake up, put on some music, and cook breakfast together.',
      'It doesn\'t matter if we burn the toast or oversalt the eggs - it\'s perfect because we\'re together.',
      'These simple moments are the ones I cherish most.',
    ],
    images: [
      {
        url: '/photos/cooking.jpg',
        alt: 'Cooking together',
        caption: 'Making memories in the kitchen',
        position: 'right',
      },
    ],
  },
}
```

## How to Add Your Images

1. Place your image files in the `client/public/photos/` folder
2. Reference them in your story pages using `/photos/your-image-name.jpg`
3. Supported formats: JPG, PNG, GIF, WebP

## Page Order

Pages appear in the order they're listed in the `scrapbookPages` array. To reorder:

1. Open `client/src/config/scrapbook-pages.ts`
2. Cut and paste the page entries to rearrange them
3. Save the file

The scrapbook will automatically update to reflect the new order!

## Tips for Great Story Chapters

1. **Keep paragraphs focused**: Each paragraph should express one complete thought
2. **Use 2-4 paragraphs**: This keeps the page readable and engaging
3. **Add personal details**: Specific memories are more touching than general statements
4. **Choose meaningful images**: Pick photos that complement your story
5. **Write from the heart**: Authenticity is more important than perfect writing

## Special Pages vs Story Pages

Your scrapbook has two types of pages:

- **Special pages** (`type: 'special'`): Custom-designed pages like "How We Met", "Reasons I Love You", etc. These are pre-built with unique designs and interactions. To add new special pages, you'll need to create a custom component and add it to the switch-case in `client/src/pages/scrapbook.tsx`.
- **Story pages** (`type: 'story'`): Flexible pages for adding your own stories using the simple configuration format shown above. No coding required!

You can mix both types in any order you like!

## Need Help?

If you want to customize the look of your story pages further, you can edit:
- `client/src/components/scrapbook/story-page.tsx` - The story page component
- `client/src/index.css` - Global styles and colors

Happy storytelling! ❤️
