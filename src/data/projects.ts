import ProdIconGif from "../assets/produsom/produsom-icon-gif-g.gif";
import ProdMobileMockup from "../assets/produsom/produsom-mobile-v.mp4"
import ProdOldLogo from "../assets/produsom/produsom-old-logo.webp"
import ProdLogoVertical from "../assets/produsom/produsom-logo-vertical.webp";
import ProdLogoHorizontal from "../assets/produsom/produsom-logo-horizontal.webp";
import ProdLaptop from "../assets/produsom/produsom-laptop-screen.webp"
import ProdMocks from "../assets/produsom/produsom-mockups-1.webp"
import ProdMocks2 from "../assets/produsom/produsom-mockups-2.webp"

import SyntaxPage from "../assets/syntaxwear/syntax-mockup-1.webp"
import SyntaxVideo from "../assets/syntaxwear/syntax-video-compress.mp4"
import SyntaxPage2 from "../assets/syntaxwear/syntax-mockup-2.webp"
import SyntaxMobile from "../assets/syntaxwear/syntax-mockup-3.webp"

import Bjf25Poster from "../assets/bjf/bjf-25-poster-1.webp"
import Bjf25Ig from "../assets/bjf/bjf-25-ig.webp"
import Bjf25Tv from "../assets/bjf/bjf-25-tv.webp"
import Bjf24Jam from "../assets/bjf/bjf-24-jam.webp"
import Bjf24Poster from "../assets/bjf/bjf-24-poster.webp"
import Bjf24Ig from "../assets/bjf/bjf-24-ig.webp"






export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailImage: string;
  heroImage: string;
  galleryImages: string[];
  liveLink?: string;
};

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Produsom",
    shortDescription: "Brand Identity & Landing Page",
    fullDescription:
      "Redesigned the visual identity for a Brazilian event lighting company, delivering a new logo, icon, and brand applications across print and digital media that were fully adopted by the client. The redesign successfully addressed their goal to modernize the brand and visually convey the concepts of 'light' and 'sound'. Additionally, I designed and developed a landing page using React and TypeScript to showcase the new identity and company information.",
    thumbnailImage: ProdLogoHorizontal,
    heroImage: ProdLogoHorizontal,
    galleryImages: [
      ProdIconGif,
      ProdOldLogo,
      ProdLaptop,
      ProdMobileMockup,
      ProdMocks,
      ProdMocks2,
      ProdLogoVertical,
    ],
    liveLink: "https://produsom.vercel.app/",
  },
  {
    id: "p2",
    title: "Brazilian Jazz Fest at WSU",
    shortDescription: "Printables and Social Media Graphics",
    fullDescription:
      "Created graphics for the Brazilian Jazz Fest 2024 and 2025, the first Brazilian Festival in the Palouse. The materials included posters, digital banners and social media assets like posts and videos for Instagram. The designs were tailored to the event's theme and target audience, ensuring maximum engagement and visibility across various platforms.",
    thumbnailImage:
      Bjf25Poster,
    heroImage:
      Bjf25Poster,
    galleryImages: [
      Bjf25Tv,
      Bjf25Ig,
      Bjf24Jam,
      Bjf24Poster,
      Bjf24Ig
    ],

  },
  {
    id: "p3",
    title: "SynstaxWear E-commerce",
    shortDescription: "Personal Full-Stack Project",
    fullDescription:
      "Personal full-stack e-commerce application developed during coursework simulating a real-world online store with product listings, filtering, cart, and checkout flow. Frontend built with React and TypeScript, deployed on Vercel. Backend API built with Node.js, Fastify, and Prisma ORM, deployed on Render. Database hosted on Supabase. Implemented authentication, admin product management, and shipping cost calculation.",
    thumbnailImage: SyntaxPage,
    heroImage:
      SyntaxPage,
    galleryImages: [
      SyntaxVideo,
      SyntaxPage2,
      SyntaxMobile
    ],
    liveLink: "https://syntaxwear-app.vercel.app/",
  },
];