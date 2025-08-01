export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "Next.js ile geliştirilen modern e-ticaret uygulaması",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "React", "JavaScript", "TailwindCSS"],
    link: "https://github.com/MelikeDemiralayy/e-commerce-app"
  },
  {
    id: 2,
    title: "Chatbot",
    description: "İnteraktif chatbot uygulaması",
    image: "/projects/chatbot.jpg",
    tags: ["CSS", "JavaScript", "AI"],
    link: "https://github.com/MelikeDemiralayy/chatbot"
  },
  {
    id: 3,
    title: "React Quiz App",
    description: "React ile geliştirilen quiz uygulaması",
    image: "/projects/quiz.jpg",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://github.com/MelikeDemiralayy/react-quiz-app"
  },
  {
    id: 4,
    title: "Developer Website",
    description: "Modern geliştirici web sitesi",
    image: "/projects/developer.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/MelikeDemiralayy/developer-website"
  },
  {
    id: 5,
    title: "Movie Tailwind Work",
    description: "Tailwind CSS ile film sitesi",
    image: "/projects/movie.jpg",
    tags: ["HTML", "TailwindCSS", "CSS"],
    link: "https://github.com/MelikeDemiralayy/movie-tailwind-work"
  },
  {
    id: 6,
    title: "Guess Number Game",
    description: "Sayı tahmin oyunu",
    image: "/projects/game.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/MelikeDemiralayy/guess-number"
  }
];

export const skills: string[] = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", 
  "Redux", "TailwindCSS", "MUI", "NPM", "Netlify", "Vercel", "GitHub Pages"
];

export const experiences: Experience[] = [
  
  {
    title: "Frontend Developer",
    company: "Vitalen Holding",
    period: "2023 - Günümüz",
    description: "Frontend Developer olarak modern web teknolojileri ile yaratıcı ve kullanıcı dostu dijital deneyimler yaratıyorum."
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Günümüz",
    description: "Modern web teknolojileri ile responsive ve kullanıcı dostu web siteleri geliştirme"
  },
  {
    title: "Web Development",
    company: "Personal Projects",
    period: "2022 - Günümüz",
    description: "React, Next.js ve modern frontend teknolojileri ile projeler geliştirme"
  }
]; 