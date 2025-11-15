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
      subtitle: 'San Isidro Falls - Where it all began',
      content: [
        'Our first date was magical in the most unexpected way. We started in Amparo, but when we found it too crowded, we decided to venture somewhere more special - San Isidro Falls. The moment we arrived, my heart raced with nervous excitement and pure joy.',
        'Just the two of us, surrounded by the beauty of the waterfall. We shared snacks, captured memories with photos, and then came the moment I\'ll never forget - I gathered all my courage and asked if I could court you. When you said yes, my world changed forever.',
        'I held both your hands, gave you a tender forehead kiss, followed by our first kiss on the lips, and held you tightly in my arms. Your smile that day - it\'s etched in my heart forever. We kissed five times that beautiful day. It was the best investment of my life.',
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
      subtitle: 'Every journey with you is home',
      content: [
        'From Amparo to San Isidro Falls on our unforgettable first date, to our first hug in Dapitan, and those precious October nights after intramurals when I rode you home on my motorcycle - each adventure writes another page in our story.',
        'November 14, 2025, became another chapter when we explored Dapitan together. From the City Hall near the Coastal Area to our joyride to Dakak, every destination felt special because you were with me. But the most meaningful place was the Church.',
        'At the Church, we asked God to bless our relationship. The night before, November 13, 2025, you said yes to being my girlfriend. I had prayed for this moment, and standing there with you, I thanked God for answering my prayers. Every place we visit becomes sacred because our love story is blessed.',
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
