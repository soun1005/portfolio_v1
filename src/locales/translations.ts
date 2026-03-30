export type Lang = 'en' | 'fr';

export const translations = {
  nav: {
    about:    { en: 'ABOUT',    fr: 'À PROPOS' },
    skills:   { en: 'SKILLS',   fr: 'COMPÉTENCES' },
    projects: { en: 'PROJECTS', fr: 'PROJETS' },
    links:    { en: 'LINKS',    fr: 'LIENS' },
    email:    { en: 'EMAIL',    fr: 'E-MAIL' },
  },
  main: {
    role:       { en: ['FRONTEND', 'DEVELOPER'],  fr: ['FRONTEND', 'DÉVELOPPEUSE'] },
    specialised: {
      en: '- SPECIALISED IN REACT / TS / REACT NATIVE',
      fr: '- SPÉCIALISÉE EN REACT / TS / REACT NATIVE',
    },
    scroll: { en: 'SCROLL', fr: 'DÉFILER' },
  },
  about: {
    title:    { en: 'About',    fr: 'À propos' },
    greeting: { en: "Hello! I'm Elodie,", fr: 'Bonjour\u00a0! Je suis Elodie,' },
    location: {
      en: 'based in Parisien region, France',
      fr: 'basée en région Parisienne, France',
    },
    from: { en: 'from', fr: 'de' },
    bio: {
      en: 'Frontend developer with 2+ years of professional experience building cross-platform mobile applications and web interfaces using React Native, React.js, and TypeScript. Proven ability to lead end-to-end mobile projects from planning to App Store / Play Store deployment. Multilingual communicator (Korean native · English C2 · French B2 · Japanese) with a track record of delivering production-ready features in agile, fast-paced environments.',
      fr: "Développeuse frontend avec plus de 2 ans d'expérience professionnelle dans la création d'applications mobiles multiplateformes et d'interfaces web avec React Native, React.js et TypeScript. Capacité avérée à piloter des projets mobiles de bout en bout, du cahier des charges au déploiement sur l'App Store et le Play Store. Communicante multilingue (coréen natif · anglais C2 · français B2 · japonais) avec un historique de livraison de fonctionnalités en production dans des environnements agiles.",
    },
    experienceTitle: { en: 'Experience', fr: 'Expérience' },
    viewCv: { en: 'VIEW CV', fr: 'VOIR CV' },
    experiences: {
      en: [
        { role: 'Frontend Dev · Lead Mobile Dev', company: 'VIV3 — Paris, France',           period: 'Apr 2024 – Nov 2025' },
        { role: 'Frontend Developer Intern',       company: 'Educentre — Paris, France',       period: 'Oct 2023 – Mar 2024' },
        { role: 'Project Manager',                 company: 'Vryus — Seoul, South Korea',      period: 'Aug 2015 – Aug 2016' },
      ],
      fr: [
        { role: 'Développeuse Frontend · Lead Mobile', company: 'VIV3 — Paris, France',           period: 'Avr 2024 – Nov 2025' },
        { role: 'Développeuse Frontend (Stage)',        company: 'Educentre — Paris, France',       period: 'Oct 2023 – Mar 2024' },
        { role: 'Chef de Projet',                       company: 'Vryus — Séoul, Corée du Sud',     period: 'Août 2015 – Août 2016' },
      ],
    },
  },
  skills: {
    title:    { en: 'Skills',   fr: 'Compétences' },
    frontend: { en: 'FRONT-END', fr: 'FRONT-END' },
    backend:  { en: 'BACK-END',  fr: 'BACK-END' },
    design:   { en: 'DESIGN',    fr: 'DESIGN' },
    other:    { en: 'OTHER',     fr: 'AUTRE' },
  },
  projects: {
    personal: { en: 'Personal Projects', fr: 'Projets Personnels' },
    school:   { en: 'School Projects',   fr: 'Projets Scolaires' },
  },
  cvLink: {
    en: 'https://drive.google.com/file/d/1D1UBNkxc8QTyNpGZjHsCCepBtIDqs5HM/view?usp=sharing',
    fr: 'https://drive.google.com/file/d/1VPOcRLnGpz8CW-lXP2oeA3f6Rp07XLto/view?usp=sharing',
  },
  footer: {
    role:  { en: 'Frontend developer.', fr: 'Développeuse frontend.' },
    viewCv: { en: 'View CV', fr: 'Voir CV' },
    email:  { en: 'E-Mail',  fr: 'E-Mail' },
  },
};

export const useT = (lang: Lang) =>
  (key: { en: string; fr: string }) => key[lang];
