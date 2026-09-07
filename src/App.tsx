import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  X,
  Wrench,
  Languages,
} from 'lucide-react';

const PROFILE_PHOTO = '/images/WhatsApp_Image_2026-08-26_at_12.57.53_AM_(1).jpeg';
const GITHUB_URL = 'https://github.com/saidabdeldjalile';
const LINKEDIN_URL = 'https://www.linkedin.com/in/said-abdel-djalile-bensalma-1ba8b7428/';
const EMAIL = 'djalilebensalma@gmail.com';
const BNA_REPO = 'https://github.com/saidabdeldjalile/BNA-OneBank';

type Lang = 'en' | 'fr';

const skillGroups: { en: { label: string; icon: typeof Code2; skills: string[] }; fr: { label: string; icon: typeof Code2; skills: string[] } }[] = [
  {
    en: { label: 'Frontend', icon: Code2, skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JSF', 'PrimeFaces'] },
    fr: { label: 'Frontend', icon: Code2, skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JSF', 'PrimeFaces'] },
  },
  {
    en: { label: 'Backend', icon: Server, skills: ['Java', 'Jakarta EE / Java EE', 'Spring Boot', 'Python', 'REST APIs'] },
    fr: { label: 'Backend', icon: Server, skills: ['Java', 'Jakarta EE / Java EE', 'Spring Boot', 'Python', 'APIs REST'] },
  },
  {
    en: { label: 'Database', icon: Database, skills: ['Oracle', 'SQL Server', 'MariaDB', 'SQL', 'JPA / Hibernate'] },
    fr: { label: 'Bases de données', icon: Database, skills: ['Oracle', 'SQL Server', 'MariaDB', 'SQL', 'JPA / Hibernate'] },
  },
  {
    en: { label: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Docker', 'Maven', 'NetBeans', 'VS Code', 'Postman'] },
    fr: { label: 'Outils', icon: Wrench, skills: ['Git', 'GitHub', 'Docker', 'Maven', 'NetBeans', 'VS Code', 'Postman'] },
  },
];

type ProjectData = {
  number: string;
  title: string;
  type: { en: string; fr: string };
  description: { en: string; fr: string };
  problem: { en: string; fr: string };
  solution: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  stack: string[];
  result: { en: string; fr: string };
  image?: string;
  imageAlt: string;
  repo?: string;
  liveDemo?: string;
};

const projects: ProjectData[] = [
  {
    number: '01',
    title: 'AH-ERP Reunion',
    type: { en: 'Enterprise Web Application “Réunion” — Air Algérie', fr: 'Application web d’entreprise « Réunion » — Air Algérie' },
    description: {
      en: 'Enterprise meeting management platform developed to centralize meetings, participants, rooms, notifications and administrative documents.',
      fr: 'Plateforme de gestion des réunions d’entreprise développée pour centraliser réunions, participants, salles, notifications et documents administratifs.',
    },
    problem: {
      en: 'Air Algérie had no centralized system to plan company meetings and manage participants, rooms, notifications and administrative documents, making coordination across teams slow and error-prone.',
      fr: 'Air Algérie ne disposait d’aucun système centralisé pour planifier les réunions et gérer participants, salles, notifications et documents administratifs, rendant la coordination entre équipes lente et source d’erreurs.',
    },
    solution: {
      en: 'Built AH-ERP Reunion, a web module of the AH-ERP ecosystem that centralizes meeting planning, participant assignment, document management, notifications and fine-grained access-right control.',
      fr: 'Développement d’AH-ERP Reunion, un module web de l’écosystème AH-ERP qui centralise planification des réunions, affectation des participants, gestion des documents, notifications et contrôle fin des droits d’accès.',
    },
    features: {
      en: ['Authentication & authorization', 'Meeting management', 'Participant management', 'Notifications', 'Document generation', 'Access-right management'],
      fr: ['Authentification & autorisation', 'Gestion des réunions', 'Gestion des participants', 'Notifications', 'Génération de documents', 'Gestion des droits d’accès'],
    },
    stack: ['Java', 'Jakarta EE', 'JSF', 'PrimeFaces', 'JPA', 'SQL', 'PostgreSQL', 'Payara', 'Bootstrap'],
    result: {
      en: 'A professional enterprise module adopted by Air Algérie that improved coordination, participation follow-up and traceability of meetings and committees.',
      fr: 'Un module d’entreprise professionnel adopté par Air Algérie qui améliore la coordination, le suivi de la participation et la traçabilité des réunions et comités.',
    },
    image: '/images/gestion_des_reunions.png',
    imageAlt: 'AH-Reunion enterprise meeting management interface for Air Algérie',
    repo: 'https://github.com/saidabdeldjalile/AH-Reunion',
  },
  {
    number: '02',
    title: 'Aero-ticket',
    type: { en: 'Full-Stack IT Ticket System — Air Algérie', fr: 'Système de Gestion de Tickets — Air Algérie' },
    description: {
      en: 'A complete ticket management system for Air Algérie built with Spring Boot and React/TypeScript, featuring an intelligent assistant based on the Qwen 2.5 LLM.',
      fr: 'Un système complet de gestion de tickets pour Air Algérie développé avec Spring Boot et React/TypeScript, incluant un assistant intelligent basé sur le LLM Qwen 2.5.',
    },
    problem: {
      en: 'IT requests at Air Algérie were handled through scattered channels with no centralized tracking, prioritization or automation, delaying resolution and generating duplicates.',
      fr: 'Les demandes IT d’Air Algérie étaient traitées via des canaux dispersés sans suivi centralisé, priorisation ni automatisation, retardant la résolution et générant des doublons.',
    },
    solution: {
      en: 'Built Aero-ticket, a full-stack platform to centralize, prioritize and resolve technical requests, enhanced by an AI assistant (Qwen 2.5 via Ollama) for classification, FAQ answers and duplicate detection.',
      fr: 'Développement d’Aero-ticket, une plateforme full-stack pour centraliser, prioriser et résoudre les demandes techniques, enrichie d’un assistant IA (Qwen 2.5 via Ollama) pour la classification, les réponses FAQ et la détection de doublons.',
    },
    features: {
      en: ['Ticket creation, update & deletion with customizable statuses and priorities', 'Secure JWT authentication & roles (ADMIN, SUPPORT, USER)', 'Full-text search and pagination', 'Departments and projects management', 'AI assistant — Qwen 2.5 chatbot via Ollama', 'Hybrid FAQ search with automatic ticket creation', 'Semantic duplicate detection & smart classification'],
      fr: ['Création, modification & suppression de tickets avec statuts et priorités personnalisables', 'Authentification JWT sécurisée & rôles (ADMIN, SUPPORT, USER)', 'Recherche full-text et pagination', 'Gestion des départements et projets', 'Assistant IA — chatbot Qwen 2.5 via Ollama', 'Recherche FAQ hybride avec création automatique de tickets', 'Détection sémantique de doublons & classification intelligente'],
    },
    stack: ['Spring Boot', 'Java', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Spring Security + JWT', 'Python / Flask', 'Ollama (Qwen 2.5)', 'Tailwind CSS', 'Docker'],
    result: {
      en: 'A modern ITSM platform that centralizes requests, reduces duplicates and accelerates resolution through AI-assisted support.',
      fr: 'Une plateforme ITSM moderne qui centralise les demandes, réduit les doublons et accélère la résolution grâce à un support assisté par IA.',
    },
    image: '/images/aeroticket.png',
    imageAlt: 'Aero-ticket issue tracker interface for Air Algérie',
    repo: 'https://github.com/saidabdeldjalile/Aero-ticket',
  },
{
    number: '03',
    title: 'BNA OneBank',
    type: { en: 'E-Banking Web Application — BNA', fr: 'Application E-Banking — BNA' },
    description: {
      en: 'Online banking platform built with Spring Boot and Next.js for account management, transfers, bank cards and savings goals.',
      fr: 'Plateforme de banque en ligne développée avec Spring Boot et Next.js pour la gestion de comptes, les transferts, les cartes bancaires et les objectifs d’épargne.',
    },
    problem: {
      en: 'BNA customers had limited self-service for everyday banking — account checks, transfers and card management required branch visits and manual handling.',
      fr: 'Les clients de la BNA disposaient de peu d’autonomie pour leurs opérations courantes — consultation de comptes, transferts et gestion de cartes imposaient des déplacements et des traitements manuels.',
    },
    solution: {
      en: 'Built BNA OneBank, a secure online banking platform offering account management, deposits, withdrawals, transfers, card management, savings goals and downloadable RIB/statement PDFs.',
      fr: 'Développement de BNA OneBank, une plateforme bancaire en ligne sécurisée offrant gestion des comptes, dépôts, retraits, transferts, gestion de cartes, objectifs d’épargne et RIB/relevés PDF téléchargeables.',
    },
    features: {
      en: ['Secure JWT authentication & user dashboard', 'Primary & savings account management', 'Deposits, withdrawals and transfers', 'Card management (freeze, limits)', 'Savings goals tracking', 'Downloadable RIB & statement PDFs', 'Admin user management'],
      fr: ['Authentification JWT sécurisée & tableau de bord', 'Gestion des comptes courant et épargne', 'Dépôts, retraits et transferts', 'Gestion de la carte (gel, plafonds)', 'Suivi des objectifs d’épargne', 'RIB et relevés PDF téléchargeables', 'Gestion des utilisateurs (admin)'],
    },
    stack: ['Spring Boot', 'Java', 'Next.js', 'React', 'Spring Security + JWT', 'JPA', 'H2 / SQL', 'Tailwind CSS', 'Zustand', 'Swagger'],
    result: {
      en: 'A modern, secure self-service banking experience enabling customers to manage accounts, payments and cards online, reducing branch workload.',
      fr: 'Une expérience bancaire moderne et sécurisée en libre-service permettant aux clients de gérer comptes, paiements et cartes en ligne, réduisant la charge des agences.',
    },
    image: '/images/banque.png',
    imageAlt: 'BNA OneBank banking interface preview',
    repo: BNA_REPO,
  },
];

const navItems = [
  { en: 'About', fr: 'À propos', href: '#about' },
  { en: 'Projects', fr: 'Projets', href: '#projects' },
  { en: 'Skills', fr: 'Compétences', href: '#skills' },
  { en: 'Experience', fr: 'Expérience', href: '#experience' },
  { en: 'Education', fr: 'Formation', href: '#education' },
  { en: 'Contact', fr: 'Contact', href: '#contact' },
];

const experienceItems: {
  title: { en: string; fr: string };
  role: { en: string; fr: string };
  company: { en: string; fr: string };
  location: { en: string; fr: string };
  points: { en: string[]; fr: string[] };
  tech: string[];
}[] = [
  {
    title: { en: 'Software Developer', fr: 'Développeur Logiciel' },
    role: { en: "Master's Internship", fr: 'Stage de Master' },
    company: { en: 'Air Algérie', fr: 'Air Algérie' },
    location: { en: 'Algiers, Algeria', fr: 'Alger, Algérie' },
    points: {
      en: [
        'Designed and developed a platform for managing requests and automated assistance.',
        'Developed an intelligent chatbot for automated user support.',
        'Integrated modern technologies to automate and improve business processes.',
      ],
      fr: [
        'Conception et développement d’une plateforme de gestion des demandes et d’assistance automatisée.',
        'Développement d’un chatbot intelligent pour le support utilisateur automatisé.',
        'Intégration de technologies modernes pour automatiser et améliorer les processus métier.',
      ],
    },
    tech: ['Java', 'Spring Boot', 'React', 'SQL', 'REST API', 'AI'],
  },
  {
    title: { en: 'Web Developer', fr: 'Développeur Web' },
    role: { en: "Bachelor's Internship", fr: 'Stage de Licence' },
    company: { en: 'Air Algérie', fr: 'Air Algérie' },
    location: { en: 'Algiers, Algeria', fr: 'Alger, Algérie' },
    points: {
      en: [
        'Designed and developed a web platform for meeting management.',
        'Developed both frontend and backend components of the application.',
        'Worked closely with teams to understand and translate functional requirements into technical solutions.',
      ],
      fr: [
        'Conception et développement d’une plateforme web de gestion des réunions.',
        'Développement des composants frontend et backend de l’application.',
        'Collaboration étroite avec les équipes pour traduire les besoins fonctionnels en solutions techniques.',
      ],
    },
    tech: ['Java', 'Jakarta EE', 'JSF', 'PrimeFaces', 'JPA', 'SQL'],
  },
];

const educationItems: {
  title: { en: string; fr: string };
  school?: { en: string; fr: string };
  location: { en: string; fr: string };
  period: { en: string; fr: string };
  honors?: { en: string; fr: string };
}[] = [
  {
    title: { en: "Master's Degree — Software Engineering", fr: 'Master — Génie Logiciel' },
    school: { en: 'USTHB — University of Science and Technology Houari Boumediene', fr: 'USTHB — Université des Sciences et de la Technologie Houari Boumediene' },
    location: { en: 'Bab Ezzouar, Algiers, Algeria', fr: 'Bab Ezzouar, Alger, Algérie' },
    period: { en: '2024 — 2026', fr: '2024 — 2026' },
  },
  {
    title: { en: "Bachelor's Degree — Information Systems & Software Engineering", fr: 'Licence — Systèmes d’Information & Génie Logiciel' },
    school: { en: 'USTHB — University of Science and Technology Houari Boumediene', fr: 'USTHB — Université des Sciences et de la Technologie Houari Boumediene' },
    location: { en: 'Bab Ezzouar, Algiers, Algeria', fr: 'Bab Ezzouar, Alger, Algérie' },
    period: { en: '2021 — 2024', fr: '2021 — 2024' },
  },
  {
    title: { en: 'Baccalauréat — Mathematics', fr: 'Baccalauréat — Mathématiques' },
    location: { en: 'Algiers, Algeria', fr: 'Alger, Algérie' },
    period: { en: '2021', fr: '2021' },
    honors: { en: 'Très Bien', fr: 'Très Bien' },
  },
];

const marqueeWords = ['Software Engineer', 'Full-Stack Developer', 'Java', 'React', 'Spring Boot', 'TypeScript', 'Enterprise Apps'];

const t = {
  hero: {
    eyebrow: { en: 'Software Engineer — Full-Stack Developer', fr: 'Ingénieur Logiciel — Développeur Full-Stack' },
    titleFirst: { en: 'Said Abdeldjalile', fr: 'Said Abdeldjalile' },
    titleLast: { en: 'Bensalma', fr: 'Bensalma' },
    intro: {
      en: 'Software Engineer focused on building modern web applications, enterprise solutions and full-stack systems with clean architecture, secure development and maintainable code.',
      fr: "Ingénieur logiciel spécialisé dans la création d'applications web modernes, de solutions d'entreprise et de systèmes full-stack avec une architecture propre, un développement sécurisé et du code maintenable.",
    },
    viewProjects: { en: 'View Projects', fr: 'Voir les Projets' },
    contact: { en: 'Contact', fr: 'Contact' },
    scrollExplore: { en: 'Scroll to explore', fr: 'Défiler pour explorer' },
  },
  about: {
    label: { en: 'About Me', fr: 'À propos de moi' },
    kicker: { en: 'A practical, curious builder', fr: 'Un bâtisseur pratique et curieux' },
    heading1: { en: 'Clean systems.', fr: 'Des systèmes propres.' },
    heading2: { en: 'Useful experiences.', fr: 'Des expériences utiles.' },
    p1: {
      en: 'I am a Software Engineer with a strong interest in web development, software architecture, databases and modern technologies.',
      fr: "Je suis un ingénieur logiciel avec un fort intérêt pour le développement web, l'architecture logicielle, les bases de données et les technologies modernes.",
    },
    p2: {
      en: 'Through academic projects, internships and personal development, I have gained practical experience in designing and developing web applications, REST APIs, database-driven systems and enterprise solutions.',
      fr: "Grâce à des projets académiques, des stages et un développement personnel, j'ai acquis une expérience pratique dans la conception et le développement d'applications web, d'APIs REST, de systèmes basés sur des bases de données et de solutions d'entreprise.",
    },
    p3: {
      en: 'I enjoy transforming technical requirements into clean, functional and maintainable software.',
      fr: "J'aime transformer des exigences techniques en logiciels propres, fonctionnels et maintenables.",
    },
    fact1: { en: "Master's graduate", fr: 'Diplômé Master' },
    fact2: { en: 'Full-stack development', fr: 'Développement full-stack' },
    fact3: { en: 'Enterprise web applications', fr: 'Applications web d\'entreprise' },
  },
  projects: {
    label: { en: 'Selected Projects', fr: 'Projets Sélectionnés' },
    heading1: { en: 'Practical work,', fr: 'Travail pratique,' },
    heading2: { en: 'real software.', fr: 'logiciel réel.' },
    viewGithub: { en: 'View GitHub', fr: 'Voir GitHub' },
    problem: { en: 'Problem', fr: 'Problème' },
    solution: { en: 'Solution', fr: 'Solution' },
    scope: { en: 'Key features', fr: 'Fonctionnalités clés' },
    technologies: { en: 'Technologies', fr: 'Technologies' },
    result: { en: 'Result', fr: 'Résultat' },
    viewOnGithub: { en: 'View on GitHub', fr: 'Voir sur GitHub' },
    liveDemo: { en: 'Live Demo', fr: 'Démo en ligne' },
  },
  skills: {
    label: { en: 'Skills', fr: 'Compétences' },
    heading1: { en: 'Tools for thoughtful', fr: 'Outils pour des' },
    heading2: { en: 'software.', fr: 'logiciels réfléchis.' },
    desc: {
      en: 'Technologies I have practical experience and knowledge with across frontend, backend, databases, and development tools.',
      fr: "Technologies avec lesquelles j'ai une expérience pratique et des connaissances en frontend, backend, bases de données et outils de développement.",
    },
  },
  experience: {
    label: { en: 'Internships & Practical Experience', fr: 'Stages & Expérience Pratique' },
    kicker: { en: 'Hands-on projects', fr: 'Projets pratiques' },
    heading1: { en: 'Practical', fr: 'Expérience' },
    heading2: { en: 'experience.', fr: 'pratique.' },
    desc: {
      en: 'My academic projects and internships have given me hands-on experience in software design, web development, databases, REST APIs, authentication, and application integration.',
      fr: "Mes projets académiques et mes stages m'ont donné une expérience pratique dans la conception logicielle, le développement web, les bases de données, les APIs REST, l'authentification et l'intégration d'applications.",
    },
    letsConnect: { en: "Let's connect", fr: 'Connectons-nous' },
  },
  education: {
    label: { en: 'Education', fr: 'Formation' },
    kicker: { en: 'Learning by building', fr: 'Apprendre en construisant' },
    heading1: { en: 'Academic', fr: 'Fondation' },
    heading2: { en: 'foundation.', fr: 'académique.' },
    honors: { en: 'Honors:', fr: 'Mention :' },
  },
  contact: {
    label: { en: 'Contact', fr: 'Contact' },
    kicker: { en: "Let's connect", fr: 'Connectons-nous' },
    heading1: { en: "Let's", fr: 'Connectons-' },
    heading2: { en: 'connect.', fr: 'nous.' },
    subtitle: {
      en: 'Feel free to explore my projects or get in touch.',
      fr: 'N\'hésitez pas à explorer mes projets ou à me contacter.',
    },
  },
  footer: {
    role: { en: 'Software Engineer | Full-Stack Developer', fr: 'Ingénieur Logiciel | Développeur Full-Stack' },
    backToTop: { en: 'Back to top', fr: 'Retour en haut' },
    copyright: { en: '© 2026 Said Abdeldjalile Bensalma. All rights reserved.', fr: '© 2026 Said Abdeldjalile Bensalma. Tous droits réservés.' },
  },
  lang: { en: 'FR', fr: 'EN' },
};

function ArrowIcon({ size = 18 }: { size?: number }) {
  return <ArrowUpRight size={size} strokeWidth={1.8} aria-hidden="true" />;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="section-label reveal">
      <span>{num}</span>
      <span>{label}</span>
    </div>
  );
}

function useTilt<T extends HTMLElement>(max = 12) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-6px)`;
      el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    };
    const leave = () => {
      el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateY(0)';
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [max]);
  return ref;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const heroPhotoRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  const tr = (obj: { en: string; fr: string }) => obj[lang];

  useEffect(() => {
    const button = ctaRef.current;
    if (!button) return;
    const move = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.3}px, ${(event.clientY - rect.top - rect.height / 2) * 0.3}px)`;
    };
    const leave = () => { button.style.transform = 'translate(0, 0)'; };
    button.addEventListener('mousemove', move);
    button.addEventListener('mouseleave', leave);
    return () => {
      button.removeEventListener('mousemove', move);
      button.removeEventListener('mouseleave', leave);
    };
  }, []);

  useEffect(() => {
    const photo = heroPhotoRef.current;
    if (!photo) return;
    const move = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      photo.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
    };
    const leave = () => { photo.style.transform = 'scale(1.06) translate(0, 0)'; };
    window.addEventListener('mousemove', move);
    document.querySelector('.hero')?.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelector('.hero')?.removeEventListener('mouseleave', leave);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onDown = () => cursor.classList.add('active');
    const onUp = () => cursor.classList.remove('active');
    const onEnterInteractive = () => cursor.classList.add('hover');
    const onLeaveInteractive = () => cursor.classList.remove('hover');
    const loop = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(loop);
    };
    const raf = requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    const interactive = document.querySelectorAll('a, button, .tilt-card');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let raf = 0;
    let time = 0;
    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    if (!blob1 || !blob2) return;
    const loop = () => {
      time += 0.005;
      const b1x = Math.sin(time) * 80, b1y = Math.cos(time * 1.3) * 60;
      const b2x = Math.cos(time * 0.8) * 100, b2y = Math.sin(time * 1.1) * 70;
      blob1.style.transform = `translate(${b1x}px, ${b1y}px) scale(${1 + Math.sin(time * 2) * 0.08})`;
      blob2.style.transform = `translate(${b2x}px, ${b2y}px) scale(${1 + Math.cos(time * 1.5) * 0.1})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (menuRef.current) menuRef.current.setAttribute('aria-hidden', String(!menuOpen));
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="portfolio">
      <div className="cursor-follower" ref={cursorRef} aria-hidden="true" />

      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" ref={blob1Ref} />
        <div className="blob blob-2" ref={blob2Ref} />
      </div>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <a className="brand-mark" href="#top" aria-label="Back to top">SAB<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{tr({ en: item.en, fr: item.fr })}</a>)}
        </nav>
        <div className="header-actions">
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
          >
            <Languages size={16} />
            {t.lang[lang]}
          </button>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} ref={menuRef} aria-hidden="true">
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {tr({ en: item.en, fr: item.fr })}<ArrowIcon size={22} />
            </a>
          ))}
          <button
            className="lang-toggle mobile-lang-toggle"
            type="button"
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
          >
            <Languages size={18} />
            {t.lang[lang]}
          </button>
        </nav>
        <p className="mobile-menu-note">{tr({ en: 'Software Engineer — Full-Stack Developer', fr: 'Ingénieur Logiciel — Développeur Full-Stack' })}</p>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-photo" ref={heroPhotoRef} style={{ backgroundImage: `url("${PROFILE_PHOTO}")` }} role="img" aria-label="Said Abdeldjalile Bensalma — Software Engineer" />
          <div className="hero-overlay" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><Sparkles size={12} /> {tr(t.hero.eyebrow)}</p>
            <h1 id="hero-title"><span>{tr(t.hero.titleFirst)}</span><span>{tr(t.hero.titleLast)}</span></h1>
            <p className="hero-intro">{tr(t.hero.intro)}</p>
            <div className="hero-actions">
              <a className="primary-button magnetic" href="#projects" ref={ctaRef}>{tr(t.hero.viewProjects)} <ArrowIcon /></a>
              <a className="text-button" href="#contact">{tr(t.hero.contact)} <ArrowIcon /></a>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>{tr(t.hero.scrollExplore)}</span><ArrowDown size={16} /></a>
          <div className="hero-side-label">01 / 06</div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-strip" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i}>{word}<em>✦</em></span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="content-section about-section" id="about">
          <SectionLabel num="01" label={tr(t.about.label)} />
          <div className="about-grid">
            <Reveal>
              <p className="section-kicker">{tr(t.about.kicker)}</p>
              <h2>{tr(t.about.heading1)}<br /><em>{tr(t.about.heading2)}</em></h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-copy">
                <p>{tr(t.about.p1)}</p>
                <p>{tr(t.about.p2)}</p>
                <p>{tr(t.about.p3)}</p>
                <div className="about-facts"><span>{tr(t.about.fact1)}</span><span>{tr(t.about.fact2)}</span><span>{tr(t.about.fact3)}</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="content-section projects-section" id="projects">
          <SectionLabel num="02" label={tr(t.projects.label)} />
          <Reveal><div className="section-heading-row"><h2>{tr(t.projects.heading1)}<br /><em>{tr(t.projects.heading2)}</em></h2><a className="outline-button" href={GITHUB_URL} target="_blank" rel="noreferrer">{tr(t.projects.viewGithub)} <ArrowIcon size={16} /></a></div></Reveal>
          <div className="project-list">
            {projects.map((project, idx) => (
              <Reveal key={project.number} delay={idx * 80}>
                <article className="project-card">
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <div className="project-content-row">
                      <div className="project-text">
                        <p className="project-type">{tr(project.type)}</p>
                        <h3>{project.title}</h3>
                        <p className="project-description">{tr(project.description)}</p>
                        <div className="project-story">
                          <div className="story-block">
                            <p className="detail-label">{tr(t.projects.problem)}</p>
                            <p className="story-text">{tr(project.problem)}</p>
                          </div>
                          <div className="story-block">
                            <p className="detail-label">{tr(t.projects.solution)}</p>
                            <p className="story-text">{tr(project.solution)}</p>
                          </div>
                          <div className="project-details">
                            <div><p className="detail-label">{tr(t.projects.scope)}</p><ul>{project.features[lang].map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
                            <div><p className="detail-label">{tr(t.projects.technologies)}</p><div className="project-stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
                          </div>
                          <div className="story-block">
                            <p className="detail-label">{tr(t.projects.result)}</p>
                            <p className="story-text">{tr(project.result)}</p>
                          </div>
                        </div>
                        <div className="project-links">
                          {project.repo && (
                            <a className="project-repo-link" href={project.repo} target="_blank" rel="noreferrer">
                              <Github size={16} /> {tr(t.projects.viewOnGithub)} <ArrowIcon size={14} />
                            </a>
                          )}
                          {project.liveDemo && (
                            <a className="project-repo-link demo" href={project.liveDemo} target="_blank" rel="noreferrer">
                              {tr(t.projects.liveDemo)} <ArrowIcon size={14} />
                            </a>
                          )}
                          {!project.repo && (
                            <a className="project-repo-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                              <Github size={16} /> {tr(t.projects.viewOnGithub)} <ArrowIcon size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                      {project.image && (
                        <div className="project-image">
                          <img src={project.image} alt={project.imageAlt} loading="lazy" />
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight className="project-arrow" size={26} strokeWidth={1.4} />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="content-section skills-section" id="skills">
          <SectionLabel num="03" label={tr(t.skills.label)} />
          <Reveal><div className="section-heading-row"><h2>{tr(t.skills.heading1)}<br /><em>{tr(t.skills.heading2)}</em></h2><p>{tr(t.skills.desc)}</p></div></Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, idx) => {
              const tiltRef = useTilt<HTMLDivElement>(10);
              const data = group[lang];
              return (
                <article className="skill-card tilt-card" key={data.label} ref={tiltRef}>
                  <div className="skill-card-glow" />
                  <div className="skill-card-top"><data.icon size={22} strokeWidth={1.4} /><span>0{idx + 1}</span></div>
                  <h3>{data.label}</h3>
                  <div className="skill-list">{data.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="content-section experience-section" id="experience">
          <SectionLabel num="04" label={tr(t.experience.label)} />
          <div className="experience-layout">
            <Reveal>
              <div>
                <p className="section-kicker">{tr(t.experience.kicker)}</p>
                <h2>{tr(t.experience.heading1)}<br /><em>{tr(t.experience.heading2)}</em></h2>
                <p className="experience-desc">{tr(t.experience.desc)}</p>
              </div>
            </Reveal>
            <div className="experience-list">
              {experienceItems.map((exp, idx) => (
                <Reveal key={exp.title.en} delay={idx * 100}>
                  <article className="experience-item">
                    <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
                    <div className="experience-item-body">
                      <h3>{tr(exp.title)}</h3>
                      <p className="experience-sub">{tr(exp.role)}</p>
                      <p className="experience-company">{tr(exp.company)} · {tr(exp.location)}</p>
                      <ul className="experience-points">
                        {exp.points[lang].map((point) => <li key={point}>{point}</li>)}
                      </ul>
                      <div className="experience-tech">
                        {exp.tech.map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="content-section education-section" id="education">
          <SectionLabel num="05" label={tr(t.education.label)} />
          <div className="education-layout">
            <Reveal><div><p className="section-kicker">{tr(t.education.kicker)}</p><h2>{tr(t.education.heading1)}<br /><em>{tr(t.education.heading2)}</em></h2></div></Reveal>
            <div className="education-list">
              {educationItems.map((edu, idx) => (
                <Reveal key={edu.period.en} delay={idx * 100}>
                  <article className="education-item">
                    <div className="education-icon"><GraduationCap size={22} /></div>
                    <div>
                      <p className="education-date">{tr(edu.period)}</p>
                      <h3>{tr(edu.title)}</h3>
                      {edu.school && <p className="education-school">{tr(edu.school)}</p>}
                      <p className="education-location">{tr(edu.location)}</p>
                      {edu.honors && <p className="education-honors">{tr(t.education.honors)} <strong>{tr(edu.honors)}</strong></p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="content-section contact-section" id="contact">
          <SectionLabel num="06" label={tr(t.contact.label)} />
          <div className="contact-layout">
            <Reveal>
              <div>
                <p className="section-kicker">{tr(t.contact.kicker)}</p>
                <h2>{tr(t.contact.heading1)}<br /><em>{tr(t.contact.heading2)}</em></h2>
                <p className="contact-subtitle">{tr(t.contact.subtitle)}</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="contact-links">
                <a className="contact-link" href={`mailto:${EMAIL}`}><Mail size={20} /><div><span>Email</span><strong>{EMAIL}</strong></div><ArrowIcon size={18} /></a>
                <a className="contact-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={20} /><div><span>LinkedIn</span><strong>Said Abdeldjalile Bensalma</strong></div><ArrowIcon size={18} /></a>
                <a className="contact-link" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={20} /><div><span>GitHub</span><strong>saidabdeldjalile</strong></div><ArrowIcon size={18} /></a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">
          <span className="footer-name">Said Abdeldjalile Bensalma</span>
          <span className="footer-role">{tr(t.footer.role)}</span>
        </div>
        <div className="footer-social">
          <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={20} /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
        </div>
        <a className="footer-back" href="#top">{tr(t.footer.backToTop)} <ArrowDown size={14} /></a>
        <p className="footer-copyright">{tr(t.footer.copyright)}</p>
      </footer>
    </div>
  );
}

export default App;
