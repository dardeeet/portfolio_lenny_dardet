export const portfolioData = {
  personalInfo: {
    name: "Lenny Dardet",
    title: "Développeur Full Stack",
    location: "Toulouse, France",
    email: "lenny.dardet.corps@gmail.com",
    phone: "07 78 15 17 97",
    linkedin: "https://www.linkedin.com/in/lenny-dardet-a1042a254",
    github: "https://github.com/dardeeet",
    lookingFor: "Alternance (2026-2028) - Master Big Data & IA",
    description: "Passionné par le développement web et logiciel, j'évolue actuellement en tant que Développeur Full Stack. Mon parcours, alliant rigueur académique et expériences concrètes en entreprise, me permet de concevoir des solutions robustes et innovantes, du backend à l'interface utilisateur.",
    interests: ["Tennis", "Football", "Montage photo/vidéo"]
  },
  experience: [
    {
      company: "Adonis Education",
      role: "Développeur Full Stack",
      period: "Depuis Avril 2025",
      description: "Gestion et développement de l'ensemble du système informatique de l'école. \n- Maintenance et évolution de 4 sites institutionnels : [adonis.fr](https://adonis.fr), [etudis.net](https://etudis.net), [iesca.fr](https://iesca.fr), [rosecarmin.fr](https://rosecarmin.fr).\n- Développement de l'Espace Interactif (EI), l'ENT des élèves.\n- Maintenance de SICA (ERP interne) et conception de NSICA, le nouvel ERP moderne développé de zéro.",
      skills: ["PHP", "TypeScript", "React", "Vite", "Bun", "Docker", "GitLab", "Composer", "Swagger", "Jira"]
    },
    {
      company: "Ayoti",
      role: "Alternance - Développeur Web & Logiciel",
      period: "Décembre 2024 - Avril 2025",
      description: "Création d'une application web et d'un logiciel pour les professionnels du transport de voyageurs.",
      skills: ["C#", "Développement web", "Front-end", "Bases de données"]
    },
    {
      company: "Denjean Transports",
      role: "Stage - Développeur Informatique",
      period: "Juillet - Août 2024",
      description: "Mise à jour du site internet et réalisation de scripts pour les échanges de données électroniques (EDI).",
      skills: ["WordPress", "EDI", "Python"]
    },
    {
      company: "CCAS",
      role: "Animateur",
      period: "Depuis 2021",
      description: "Encadrement de groupes d’enfants de 8 à 17 ans, gestion d'activités et développement de compétences en communication.",
      skills: ["Communication", "Gestion de groupe", "BAFA"]
    }
  ],
  education: [
    {
      school: "Epitech",
      degree: "Master Big Data & IA",
      period: "2026 - 2028",
      details: "Admis en Master pour approfondir mes connaissances en science des données et intelligence artificielle."
    },
    {
      school: "IUT Paul Sabatier, Toulouse",
      degree: "B.U.T Informatique (3ème année)",
      period: "2022 - 2025",
      details: "Obtention du diplôme avec spécialisation en développement logiciel et web."
    },
    {
      school: "Lycée Jean Dupuy, Tarbes",
      degree: "Bac STI2D",
      period: "Diplômé",
      details: "Sciences et Technologies de l'Industrie et du Développement Durable."
    }
  ],
  skills: [
    { category: "Développement", items: ["PHP", "TypeScript", "React", "Vite", "Bun", "JavaScript", "C#", "C++", "Python", "HTML", "CSS"] },
    { category: "Data & IA", items: ["Big Data (Apprentissage)", "Intelligence Artificielle (Apprentissage)"] },
    { category: "Outils & DevOps", items: ["Docker", "GitLab", "Composer", "Swagger", "Jira", "Git", "Méthodes Agiles"] },
    { category: "Soft Skills & Autres", items: ["Communication", "Gestion de projet", "Montage Vidéo", "Tennis", "Football"] }
  ],
  projects: [
    {
      title: "NSICA (Projet Startup)",
      description: "Conception et développement de zéro du nouvel ERP pour Adonis Education. Utilisation d'une architecture moderne orientée performance et scalabilité.",
      link: "#",
      image: "/src/assets/nsica_placeholder.png", // Use placeholder or generate image
      tags: ["Vite", "TypeScript", "React", "PHP API", "Bun"]
    },
    {
      title: "Cabinet Médical (PHP)",
      description: "Application web de gestion d'un cabinet médical (patients, rendez-vous, personnel).",
      link: "https://github.com/maelgoujon/Cabinet-Medical-PHP.git",
      image: "/src/assets/cabinet_medical.png"
    },
    {
      title: "Suivi de Formation (Spring Boot)",
      description: "Architecture backend pour le suivi de formations d'une association de personnes handicapées.",
      link: "https://github.com/maelgoujon/Suivi-de-formation-Spring-Boot",
      image: "/src/assets/suivi_formation.png"
    },
    {
      title: "Web Crypto (SAE)",
      description: "Loterie de cryptomonnaies utilisant MetaMask et le testnet Sepolia.",
      link: "https://github.com/7stuart/web_crypto_sae",
      image: "/src/assets/web_crypto.png"
    }
  ]
};
