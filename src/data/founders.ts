export interface Founder {
  name: string;
  role: string;
  division?: string;
  bio: string;
  image: string;
  socials: {
    instagram: string;
    github: string;
    whatsapp: string;
    linkedin: string;
  };
}

export const FOUNDERS: Founder[] = [
  {
    name: "Mohannad",
    role: "Founder & CEO",
    bio: "Directing technical architecture, digital product strategy, and AI ecosystem engineering across NextAura Agency.",
    image: "/leaders/mohannad.png",
    socials: {
      instagram: "https://www.instagram.com/mohannad14_06/",
      github: "https://github.com/mohannad-121",
      whatsapp: "https://wa.me/962799195498",
      linkedin: "https://www.linkedin.com/in/mohannadabuayyash/",
    },
  },
  {
    name: "Moayad",
    role: "Founder & CEO",
    bio: "Leading creative technology, mobile product development, and interactive experiments at NextAura Studios.",
    image: "/leaders/moayad.jpg",
    socials: {
      instagram: "https://www.instagram.com/moayad.rabah/",
      github: "https://github.com/muayid-rabah/",
      whatsapp: "https://wa.me/962780467522",
      linkedin: "https://www.linkedin.com/in/muayidrabah/",
    },
  },
];
