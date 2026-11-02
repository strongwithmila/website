/**
 * ─────────────────────────────────────────────────────────────
 *  STRONG WITH MILA — EDITABLE SITE CONTENT
 * ─────────────────────────────────────────────────────────────
 *  This is the one file to edit for offer name, price, availability,
 *  About copy/photo, FAQ, CTAs and contact details.
 *
 *  Anything marked `TODO(Mila)` is a placeholder or an unconfirmed
 *  decision. Do not publish until each one is confirmed.
 */
import type { ImageMetadata } from 'astro';
import aboutPhoto from '../assets/mila-portrait.png';

export interface FaqItem {
  question: string;
  answer: string;
}

export const contact = {
  // TODO(Mila): verify the address before publication.
  email: 'strongwithmila@gmail.com',
  instagramHandle: 'strongwithmila',
  city: 'Berlin, Germany',
};

export const instagramUrl = `https://www.instagram.com/${contact.instagramHandle}/`;

export const seo = {
  title: 'Strong with Mila | Women’s Strength & Nutrition Coaching in Berlin',
  description:
    'Women-focused personal training, nutrition coaching and cycle-aware support in Berlin, in English. Build strength, structure and confidence without extremes.',
};

/**
 * Founding-client offer. Keep `enabled: false` until real availability,
 * pricing and terms are confirmed — the site then uses neutral
 * "Enquire about coaching" wording and never mentions limited spots.
 */
export const founding = {
  enabled: false,
  heading: 'Founding client spots',
  // TODO(Mila): only use "limited" when spots really are limited.
  body: 'I’m looking for a small number of women in Berlin who want to try the method and share honest feedback, at a reduced founding-client price.',
  ctaLabel: 'Apply for a founding client spot',
};

export const cta = {
  primary: founding.enabled ? founding.ctaLabel : 'Enquire about coaching',
  secondary: 'See how it works',
};

export const hero = {
  eyebrow: 'Women’s strength coaching · Berlin',
  headline: 'Build strength.',
  // Shown in italics at the start of the second line.
  headlineAccent: 'Understand',
  headlineEnd: 'your body.',
  subheadline:
    'Personal strength training, practical nutrition, and body literacy to help you feel stronger and more confident.',
  ctaLabel: 'Explore coaching',
  ctaHref: '#package',
  secondaryLabel: 'Meet Mila',
  secondaryHref: '#about',
  photoAlt: 'Mila sitting on the floor of a bright living room, holding a Strong with Mila water bottle.',
};

export const resonance = {
  eyebrow: 'A different approach to getting stronger',
  heading: 'You care about your health.',
  // Second sentence of the headline, shown in italics
  headingAccent: 'You just want an approach that makes sense.',
  intro: 'Maybe some of this feels familiar.',
  points: [
    {
      title: 'You want to feel confident at the gym.',
      text: 'But knowing what to do, how to do it, and whether you’re making progress isn’t always straightforward.',
    },
    {
      title: 'You want nutrition to feel simpler.',
      text: 'A little more structure would help. Another restrictive diet isn’t what you’re looking for.',
    },
    {
      title: 'You want to understand your body’s signals.',
      text: 'Your energy, appetite, or motivation may change, and you’d like to know how to respond without second-guessing yourself.',
    },
  ],
  close: 'You don’t need a perfect routine. You need one that works for you.',
  closeSupport: 'That’s where the Strong with Mila method begins.',
};

/**
 * Method pillars. TODO(Mila): add a photo for each pillar — import it at the top of this file
 * (like `aboutPhoto`) and set `image` and `imageAlt`. Until then a labelled placeholder shows.
 */
export const method = {
  heading: 'One method, three connected parts',
  intro: 'Strength training, nutrition and body awareness—designed to work together.',
  pillars: [
    {
      key: 'train',
      name: 'Train',
      summary: 'Build strength with confidence.',
      description: 'Learn to move well, progress with purpose, and feel at home in the gym.',
      image: null as ImageMetadata | null,
      imageAlt: '',
    },
    {
      key: 'fuel',
      name: 'Fuel',
      summary: 'Structure without restriction.',
      description: 'Make nutrition simpler with flexible guidance that supports your energy and training.',
      image: null as ImageMetadata | null,
      imageAlt: '',
    },
    {
      key: 'understand',
      name: 'Understand',
      summary: 'Your body gives you information.',
      description: 'Recognise patterns in energy, recovery and wellbeing—and adapt with confidence.',
      image: null as ImageMetadata | null,
      imageAlt: '',
    },
  ],
};

/**
 * TODO(Mila): offer name is unconfirmed. The website brief proposes
 * "Strong Through Your Cycle"; the business facts suggest "Strong Foundations".
 * Set `name` once decided. Until then the package shows its descriptive title.
 */
export const offer = {
  name: '' as string,
  title: 'Four weeks to build your foundation.',
  summary:
    'Personal strength training in Berlin, practical nutrition guidance, and ongoing support to help you build confidence and consistency.',
  // TODO(Mila): price not confirmed. Leave '' to show `priceNote` instead.
  price: '' as string,
  priceNote: 'Pricing shared after a short fit check.',
  // TODO(Mila): confirm the onsite location (exact studio) before publishing.
  location: 'Berlin · In-person and digital',
  journeyHeading: 'Your coaching journey',
  // Phases within the package, not one phase per week.
  steps: [
    { title: 'Get to know you', detail: 'A digital goal-setting call to understand your starting point, priorities and routine.' },
    { title: 'Build your foundations', detail: 'Three guided onsite sessions to develop technique, confidence and a training direction.' },
    { title: 'Learn, adapt, progress', detail: 'Nutrition coaching and weekly check-ins help you build structure that fits real life.' },
    { title: 'See how far you’ve come', detail: 'A final onsite progression review to reflect on your progress and plan your next steps.' },
  ],
  includes: [
    '1 digital goal-setting call',
    '3 onsite training sessions',
    '1 nutrition coaching session',
    'Personalised training direction',
    'Weekly digital check-ins',
    'Cycle-aware guidance when relevant',
    '1 final onsite progression review',
  ],
};

export const fit = {
  eyebrow: 'Who this is for',
  heading: 'A supportive fit for the right woman.',
  intro:
    'This coaching works best for women who want strength, structure and a realistic approach — not extremes.',
  forYou: [
    'You live in Berlin and want in-person coaching support',
    'You want to start or return to strength training with guidance',
    'You want nutrition support without restrictive dieting',
    'You value structure, accountability and a plan that fits real life',
    'You want to better understand your energy, recovery and body signals',
  ],
  notForYou: [
    'You want a quick-fix transformation',
    'You want a strict diet plan',
    'You need medical nutrition therapy',
    'You’re looking for diagnosis or treatment of a hormonal condition',
    'You’re not open to strength training or gradual progress',
  ],
  scopeNote:
    'Strong with Mila offers personal training and general nutrition coaching. It does not replace medical care, diagnosis, dietetic treatment or therapy.',
  ctaLabel: 'Enquire about coaching',
};

/**
 * TODO(Mila): this story is the draft from the website brief. Edit freely;
 * add credentials only once they are real and confirmed.
 * To change the photo, replace src/assets/mila-portrait.png (or import another image) and update `photoAlt`.
 */
export const about = {
  eyebrow: 'A little about me',
  heading: 'Hi, I’m Mila.',
  opening: 'I learned that lasting change starts with support, not more pressure.',
  paragraphs: [
    'For years, I cared about my health but struggled to find consistency with food, training and my routines. After a long cycle of dieting and trying to figure everything out myself, I realised I needed a different approach.',
    'Working with a personal trainer and nutritionist showed me what the right guidance could do. I started building strength, finding structure and feeling more confident in my body.',
    'That experience inspired Strong with Mila: a space where women can learn to train confidently, approach nutrition without extremes, and better understand their bodies—with guidance that fits their real lives.',
  ],
  philosophy: 'I believe the plan should fit the person, not the other way around.',
  note: 'support changed everything',
  photo: aboutPhoto as ImageMetadata | null,
  photoAlt: 'Mila sitting on a sofa at home, resting her chin on her hand and smiling.',
  credentials: [] as string[],
};

export const cycle = {
  eyebrow: 'A closer look at Understand',
  heading: 'Cycle-aware, not cycle-obsessed.',
  paragraphs: [
    'Your energy, recovery and appetite can change. Understanding your individual patterns can help you make thoughtful adjustments to training and nutrition—without following rigid rules.',
    'Tracking is always optional. Your experience matters more than a predetermined cycle calendar.',
  ],
  tagline: 'Your cycle is information, not instructions.',
  // The six signals in the "your patterns" wheel (drawn in components/Cycle.astro)
  labels: ['energy', 'appetite', 'sleep', 'recovery', 'motivation', 'mood'],
};

export const faq: FaqItem[] = [
  {
    question: 'I’m a complete beginner. Is this coaching for me?',
    answer:
      'Absolutely. You don’t need to know your way around the gym or have an established training routine before we start. Our first sessions focus on understanding your starting point, learning good technique and building confidence at your own pace. You don’t need to get fit before asking for support.',
  },
  {
    question: 'What does the four-week coaching package include?',
    answer:
      'We start with a virtual goal-setting call, followed by three onsite personal training sessions in Berlin. You’ll also receive nutrition coaching, a training direction tailored to your needs, weekly digital check-ins and a final onsite progression review. We’ll use your feedback to make adjustments along the way, including cycle-aware support if it’s relevant to you.',
  },
  {
    question: 'What if I have a busy schedule or struggle with consistency?',
    answer:
      'That’s exactly why we look at your real-life routine before creating a plan. Your coaching should work around your time, energy and responsibilities—not depend on every week going perfectly. Through our check-ins, we’ll review what’s working and make realistic adjustments when life gets busy.',
  },
  {
    question: 'Will I have to follow a diet or track calories?',
    answer:
      'No strict diets or mandatory calorie tracking. Nutrition coaching is about finding useful structure without making food another source of stress. We might explore meal routines, protein, energy needs or food tracking when appropriate, but the approach is flexible and based on what works for you. Practical meal suggestions are part of that support.',
  },
  {
    question: 'Do I have to track my menstrual cycle?',
    answer:
      'Not at all. Cycle awareness is an optional part of our body-literacy approach, not a requirement. We can explore patterns in your energy, appetite, sleep, recovery and training without prescribing different routines for each menstrual phase. You can also participate if your cycles are irregular, you use hormonal contraception or you simply prefer not to track.',
  },
  {
    question: 'Where does the training take place? Is coaching available online?',
    answer:
      'The in-person sessions take place in Berlin, with the exact training location confirmed before you begin. The package combines onsite training with digital check-ins and support between sessions. Because the in-person sessions are an important part of building your training foundation, this particular package isn’t designed as a fully online programme.',
  },
  {
    question: 'Is this a weight-loss programme?',
    answer:
      'Strong with Mila is centred on building strength, improving your relationship with training and food, and understanding your body better—not chasing a number on the scale. If changes in body composition are among your goals, we can discuss them without making restriction, guilt or quick fixes the foundation of your coaching.',
  },
  {
    question: 'Can you help with PCOS, endometriosis or other hormonal conditions?',
    answer:
      'I can support you with general strength training, nutrition habits and body awareness, but I don’t diagnose or treat medical or hormonal conditions. If you have PCOS, endometriosis, a thyroid condition or another medical concern, your healthcare professional should guide the medical side of your care. We can discuss how general coaching may fit alongside their advice.',
  },
  {
    question: 'How much does coaching cost, and how do I get started?',
    // TODO(Mila): update once pricing is confirmed.
    answer:
      'The four-week package is a personalised coaching experience combining onsite training, nutrition guidance and ongoing support. Pricing is shared after a short fit check so you can understand the package and ask questions before deciding. To get started, simply complete the enquiry form and share a little about your goals.',
  },
];

export const enquiry = {
  eyebrow: 'Let’s work together',
  heading: 'Your strength journey starts with a conversation.',
  intro:
    'Tell me a little about yourself and what you’re looking for. I’ll personally reply so we can explore whether coaching together feels like the right fit.',
  ctaLabel: 'Enquire about coaching',
  reassurance: 'No commitment. Just a first conversation.',
  // Heading at the top of the pop-up form
  formHeading: 'Start with a conversation',
  goals: [
    'Build strength & confidence in the gym',
    'Return to training after a break',
    'Find nutrition structure without dieting',
    'Understand my energy & cycle patterns',
    'Not sure yet, I’d like to talk',
  ],
};

export const footer = {
  disclaimer: 'Coaching does not replace medical advice, diagnosis or treatment. In an emergency in Germany, call 112.',
};
