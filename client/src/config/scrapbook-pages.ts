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
        'Our first date was magical in the most unexpected way. We started in Amparo, but when we found that there were people, we decided to venture somewhere more special - San Isidro Falls. The moment we arrived, my heart raced with nervous excitement and pure joy.',
        'Just the two of us, surrounded by the beauty of the waterfall. We shared snacks, captured memories with photos, and then came the moment I\'ll never forget - I gathered all my courage and asked if I could court you. When you said yes, my world changed forever.',
        'I held both your hands, gave you a tender forehead kiss, followed by our first kiss on the lips, and held you tightly in my arms. Your smile that day - it\'s etched in my heart forever. We kissed five times that beautiful day. All I could say is thank you and It was the best investment of my life.',
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
        'November 13, 2025, you said yes to being my girlfriend. I was shocked hearing at that moment, and got nervous sitting beside you. I thanked God for answering my prayers and a special place has come in my mind, a "Church". That moment was something I would never forget.',
        'November 14, 2025, became another chapter when we explored Dapitan together. From the City Hall near the Coastal Area to our joyride to Dakak, every destination felt special because you were with me. But the most meaningful place was the Church. At the Church, we asked God to bless our relationship, thank Him for this wonderful Gift that He gave us. I will cherish this gift, which is my Partner, forever and ever until the end.',
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
      'The day we met in Grade 11 felt simple at first, but looking back, I realize it was the quiet beginning of my love story with you. You were never just a friend — being with you felt natural, comforting, and safe. I didn’t know it then, but that small moment changed my whole life.',

      'Our first date will forever stay in my heart. From Amparo to San Isidro Falls, every step with you made me feel nervous, excited, and alive. The waterfall became our little world, just the two of us. We shared snacks, took pictures, and then my favorite part is where I confessed my feelings and told you if I could court you. When you said “yes,” everything inside me lit up. Holding your hands, kissing your forehead and lips, and hugging you tightly… those moments are treasures I’ll never forget.',

      'Our adventures from Amparo, to our hugs in Dapitan, to our second date at the City Hall, Dakak, and the church - each one meant everything to me. When you officially became mine on November 13, 2025, it felt like the prayer I had been whispering for so long was finally answered. Being with you in that sacred place made me realize how blessed I am.',

      'I love you, Jezza Mae. Every smile, every hug, every conversation, every simple moment with you fills my whole world with happiness. I love learning about you — your favorites, your little moods, even your baby mode that I secretly adore so much. I am grateful to God for you, for us, for this love we are building together.',

      'These moments — big and small — are the pieces of our beautiful story. And as long as I’m with you, I will keep choosing you, loving you, and thanking God for you every single day.',
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
