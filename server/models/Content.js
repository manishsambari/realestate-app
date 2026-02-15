const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  hero: {
    title: { type: String, default: 'THINKING OF A FANTASTIC VICINITY?' },
    subtitle: { type: String, default: '20+ PODIUM LUXURIOUS AMENITIES | SPACIOUS BALCONY HOMES' },
    price1: { type: String, default: 'SMART 1 BHK @ 69.99 Lacs*' },
    price2: { type: String, default: 'PREMIUM 2 BHK @ 96.99 Lacs*' },
    location: { type: String, default: 'BLDG. NO 223/224, CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)' },
  },
  projectOverview: {
    title: { type: String, default: 'About Project' },
    description: { type: String, default: 'At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.\n\n"The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve. It\'s the place your soul has long been searching for.' },
  },
  connectivity: {
    title: { type: String, default: 'Nearby Connectivity' }, // Actually prompt says "Nearby Connectivity content"
    // Connectivity usually has a list of places. I'll use an array of strings or objects.
    // Based on typical real estate sites.
    items: [{ type: String, default: 'Railway Station - 5 mins' }, { type: String, default: 'Highway - 2 mins' }]
  },
  amenities: {
    title: { type: String, default: 'Amenities' },
    subtitle: { type: String, default: 'Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.' },
    townshipImage: { type: String, default: '' },
    items: [
      { title: { type: String, default: 'Gymnasium' } },
      { title: { type: String, default: 'Kids Play Area' } },
      { title: { type: String, default: 'Jogging Track' } },
      { title: { type: String, default: 'Yoga Deck' } },
    ],
    exploreCards: [
      {
        title: { type: String, default: '' },
        image: { type: String, default: '' },
        status: { type: String, default: '' }
      }
    ]
  },
  floorPlans: {
    unitPlan: { type: String, default: '' },
    wings: {
      East: { type: String, default: '' },
      West: { type: String, default: '' },
      North: { type: String, default: '' },
      South: { type: String, default: '' },
    }
  },
  developer: {
    title: { type: String, default: 'About Developer' },
    description: { type: String, default: 'Vighnaharta Developers is more than just a real estate company...' },
    stats: [
      { label: { type: String, default: 'Projects' }, value: { type: String, default: '6' } },
      { label: { type: String, default: 'Sq. Ft. Area Developed' }, value: { type: String, default: '1.32 LAC' } },
      { label: { type: String, default: 'Happy Families' }, value: { type: String, default: '449+' } },
    ]
  },
  constructionUpdates: {
    title: { type: String, default: 'Construction Updates' },
    items: [
      { label: { type: String, default: 'Under Construction' }, status: { type: String, default: 'Tower A' } },
      { label: { type: String, default: 'Completed' }, status: { type: String, default: 'Tower B' } },
    ]
  },
  faq: [
    { question: { type: String, default: 'What makes Swastik Group a trusted name?' }, answer: { type: String, default: 'Detailed answer here...' } },
    { question: { type: String, default: 'What types of residential projects does Swastik Group offer?' }, answer: { type: String, default: 'We offer...' } },
  ],
  footer: {
    address: { type: String, default: 'Corporate Office: ...' },
    email: { type: String, default: 'sales@vighnaharta.com' },
    phone: { type: String, default: '+91 99999 99999' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);
