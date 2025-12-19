import { Member, NewsItem, Publication, GalleryItem, ResearchInterest } from './types';

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: 'nano',
    title: 'Nanomaterial Synthesis',
    description: 'Developing novel bottom-up approaches for 2D material fabrication.',
    iconName: 'atom'
  },
  {
    id: 'biosensors',
    title: 'Wearable Biosensors',
    description: 'Non-invasive sweat and interstitial fluid monitoring systems.',
    iconName: 'activity'
  },
  {
    id: 'energy',
    title: 'Energy Harvesting',
    description: 'Piezoelectric and triboelectric nanogenerators for self-powered systems.',
    iconName: 'zap'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'Breakthrough in Graphene Synthesis',
    date: '2023-10-15',
    excerpt: 'Our group has published a new method for rapid CVD growth in Nature Materials.',
    content: 'Full article content would go here...',
    category: 'Publication'
  },
  {
    id: '2',
    title: 'Dr. Doe Awarded NSF Grant',
    date: '2023-09-28',
    excerpt: 'The lab has secured $1.2M funding for next-gen sensor development.',
    content: 'Full article content would go here...',
    category: 'Award'
  },
  {
    id: '3',
    title: 'Welcome New PhD Candidates',
    date: '2023-09-01',
    excerpt: 'Joining us this fall are Sarah Smith and James Chen.',
    content: 'Full article content would go here...',
    category: 'General'
  },
  {
    id: '4',
    title: 'Annual Symposium Recap',
    date: '2023-08-15',
    excerpt: 'Highlights from our summer retreat and poster session.',
    content: 'Full article content would go here...',
    category: 'Event'
  }
];

export const MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Dr. Alan Grant',
    photoUrl: 'https://picsum.photos/200/200?random=1',
    currentRole: 'PI',
    researchTheme: 'Nanomaterials',
    tenureHistory: [{ role: 'Principal Investigator', period: '2015-Present' }],
    shortBio: 'Leading the search for functional advanced materials.',
    fullBio: 'Dr. Grant received his PhD from MIT...',
    email: 'alan.grant@univ.edu',
    scholarLink: '#',
    joinDate: '2015-01-01'
  },
  {
    id: '2',
    name: 'Dr. Ellie Sattler',
    photoUrl: 'https://picsum.photos/200/200?random=2',
    currentRole: 'Postdoc',
    researchTheme: 'Biosensors',
    tenureHistory: [
      { role: 'PhD Student', period: '2018-2022' },
      { role: 'Postdoc', period: '2022-Present' }
    ],
    shortBio: 'Specializing in enzymatic electrochemical sensors.',
    fullBio: 'Dr. Sattler focuses on non-invasive glucose monitoring...',
    email: 'e.sattler@univ.edu',
    joinDate: '2018-09-01'
  },
  {
    id: '3',
    name: 'Ian Malcolm',
    photoUrl: 'https://picsum.photos/200/200?random=3',
    currentRole: 'PhD Candidate',
    researchTheme: 'Energy Harvesting',
    tenureHistory: [{ role: 'PhD Candidate', period: '2021-Present' }],
    shortBio: 'Chaos theory applied to electron transport.',
    fullBio: 'Ian is studying non-linear dynamics in piezo materials...',
    email: 'i.malcolm@univ.edu',
    joinDate: '2021-09-01'
  },
   {
    id: '4',
    name: 'Sarah Harding',
    photoUrl: 'https://picsum.photos/200/200?random=4',
    currentRole: 'MSc Student',
    researchTheme: 'Nanomaterials',
    tenureHistory: [{ role: 'MSc Student', period: '2023-Present' }],
    shortBio: 'Characterization of thin films.',
    fullBio: 'Sarah joined the group to work on AFM techniques...',
    email: 's.harding@univ.edu',
    joinDate: '2023-09-01'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'High-mobility transport in graphene nanoribbons',
    authors: ['A. Grant', 'E. Sattler', 'I. Malcolm'],
    venue: 'Nature Materials',
    year: 2023,
    type: 'Journal',
    doi: '10.1038/s41563-000-00000-x',
    abstract: 'We demonstrate a novel method for synthesizing GNRs with preserved edges...',
    theme: 'Nanomaterials',
    isSelected: true
  },
  {
    id: 'p2',
    title: 'Wearable sweat sensors for real-time analysis',
    authors: ['E. Sattler', 'A. Grant'],
    venue: 'IEEE Sensors Conference',
    year: 2022,
    type: 'Conference',
    doi: '10.1109/ICSENS.2022.0000000',
    abstract: 'A flexible patch for continuous monitoring of lactate and glucose...',
    theme: 'Biosensors',
    isSelected: true
  },
  {
    id: 'p3',
    title: 'Chaotic behavior in piezoelectric output',
    authors: ['I. Malcolm', 'A. Grant'],
    venue: 'Physical Review B',
    year: 2021,
    type: 'Journal',
    doi: '10.1103/PhysRevB.100.000000',
    abstract: 'Investigating the non-linear response of ZnO nanowires under high strain...',
    theme: 'Energy Harvesting',
    isSelected: false
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    thumbnailUrl: 'https://picsum.photos/400/300?random=10',
    fullUrl: 'https://picsum.photos/1200/800?random=10',
    title: 'Lab Retreat 2023',
    date: 'August 2023',
    description: 'Hiking trip to the mountains.',
    peopleTagged: ['Alan Grant', 'Ellie Sattler']
  },
  {
    id: 'g2',
    thumbnailUrl: 'https://picsum.photos/400/300?random=11',
    fullUrl: 'https://picsum.photos/1200/800?random=11',
    title: 'New SEM Installation',
    date: 'July 2023',
    description: 'Unboxing the new Scanning Electron Microscope.',
    peopleTagged: ['Ian Malcolm']
  },
  {
    id: 'g3',
    thumbnailUrl: 'https://picsum.photos/400/300?random=12',
    fullUrl: 'https://picsum.photos/1200/800?random=12',
    title: 'Conference Presentation',
    date: 'June 2023',
    description: 'Ellie presenting her poster at MRS Spring.',
    peopleTagged: ['Ellie Sattler']
  },
  {
    id: 'g4',
    thumbnailUrl: 'https://picsum.photos/400/300?random=13',
    fullUrl: 'https://picsum.photos/1200/800?random=13',
    title: 'Holiday Party',
    date: 'December 2022',
    description: 'End of year celebration.',
    peopleTagged: ['All Members']
  }
];