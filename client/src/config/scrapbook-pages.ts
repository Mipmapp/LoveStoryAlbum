import { StoryPageData } from '@/components/scrapbook/story-page';

export interface PageConfig {
  id: string;
  type: 'cover' | 'special' | 'story';
  component?: string;
  data?: StoryPageData;
}

export const scrapbookPages: PageConfig[] = [
  {
    id: 'cover',
    type: 'cover',
    component: 'CoverPage',
  },
  {
    id: 'how-we-met',
    type: 'special',
    component: 'HowWeMetPage',
  },
  {
    id: 'first-date',
    type: 'story',
    data: {
      title: 'Our First Date',
      subtitle: 'The beginning of everything',
      content: [
        'I remember every detail of that day. The way you smiled when you saw me, how nervous I was, and how quickly all that nervousness melted away the moment we started talking.',
        'We walked for hours, talking about everything and nothing. Time seemed to stand still, yet it flew by too quickly. I knew then that this was the start of something special.',
        'That first date wasn\'t just the beginning of our romance - it was the moment I realized I wanted to spend every day getting to know you better.',
      ],
      images: [
        {
          url: '/photos/first-date-1.jpg',
          alt: 'Our first date',
          caption: 'The day everything changed',
          position: 'top',
        },
        {
          url: '/photos/first-date-2.jpg',
          alt: 'Our first date moment',
          caption: 'A perfect beginning',
          position: 'bottom',
        },
      ],
    },
  },
  {
    id: 'favorite-memories',
    type: 'special',
    component: 'FavoriteMemoriesPage',
  },
  {
    id: 'adventure-together',
    type: 'story',
    data: {
      title: 'Our Adventures',
      subtitle: 'Exploring the world together',
      content: [
        'Every adventure with you becomes my favorite memory. From spontaneous road trips to quiet walks in the park, each moment spent together is an adventure in itself.',
        'I love how we can turn the ordinary into extraordinary. A simple coffee date becomes a deep conversation, a rainy day becomes a cozy movie marathon, and every sunset we watch together feels like it was painted just for us.',
        'With you, I\'ve learned that the best adventures aren\'t always about the destination, but about having you by my side for the journey.',
      ],
      images: [
        {
          url: '/photos/adventure.jpg',
          alt: 'Our adventures together',
          caption: 'Making memories everywhere we go',
          position: 'right',
        },
      ],
    },
  },
  {
    id: 'reasons',
    type: 'special',
    component: 'ReasonsILoveYouPage',
  },
  {
    id: 'little-moments',
    type: 'story',
    data: {
      title: 'The Little Moments',
      subtitle: 'Small things that mean everything',
      content: [
        'It\'s the little things that make me fall in love with you over and over again. The way you laugh at my jokes, even the terrible ones. How you remember my coffee order. The way your eyes light up when you talk about things you\'re passionate about.',
        'I treasure our quiet Sunday mornings, cooking breakfast together, sharing stories over dinner, and the comfortable silence that comes from simply being in each other\'s presence.',
        'These small, everyday moments are what make our love story so beautiful. They\'re the threads that weave together to create the tapestry of our life together.',
      ],
      images: [
        {
          url: '/photos/moment1.jpg',
          alt: 'A special moment',
          caption: 'Every moment with you counts',
          position: 'bottom',
        },
        {
          url: '/photos/moment2.jpg',
          alt: 'Another cherished memory',
          caption: 'Collecting memories, one smile at a time',
          position: 'bottom',
        },
      ],
    },
  },
  {
    id: 'love-letter',
    type: 'special',
    component: 'LoveLetterPage',
  },
  {
    id: 'forever',
    type: 'special',
    component: 'ForeverPage',
  },
];
