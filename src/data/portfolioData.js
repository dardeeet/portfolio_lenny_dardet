export const portfolioData = {
  personalInfo: {
    name: "Lenny Dardet",
    title: "Étudiant en 3ème année de B.U.T Informatique",
    location: "Toulouse, France",
    email: "lenny.dardet.corps@gmail.com",
    phone: "07 78 15 17 97",
    linkedin: "https://www.linkedin.com/in/lenny-dardet-a1042a254",
    github: "https://github.com/dardeeet",
    description: "Passionné par la programmation, notamment le développement web, le développement logiciel et la gestion de bases de données. Originaire de Tarbes, j'ai un parcours tourné vers l'innovation et la technique.",
    interests: ["Tennis", "Football", "Montage photo/vidéo"]
  },
  experience: [
    {
      company: "Ayoti",
      role: "Alternance - Développeur Web & Logiciel",
      period: "Décembre 2024 - Juin 2025",
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
      school: "IUT Paul Sabatier, Toulouse",
      degree: "B.U.T Informatique (3ème année)",
      period: "En cours",
      details: "Spécialisation en développement logiciel et web."
    },
    {
      school: "Lycée Jean Dupuy, Tarbes",
      degree: "Bac STI2D",
      period: "Diplômé",
      details: "Sciences et Technologies de l'Industrie et du Développement Durable."
    }
  ],
  skills: [
    { category: "Développement", items: ["HTML", "CSS", "JavaScript", "React", "Spring Boot", "C++", "C#", "Python"] },
    { category: "Outils & Méthodes", items: ["Git", "Méthodes Agiles", "Bases de données", "WordPress", "Windev"] },
    { category: "Soft Skills & Autres", items: ["Communication", "Gestion de projet", "Montage Vidéo", "Tennis", "Football"] }
  ],
  projects: [
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
    },
    {
      title: "Guichet Bancaire (Windev)",
      description: "Application d'opérations bancaires classiques (dépôt, retrait, consultation).",
      link: "https://github.com/maelgoujon/Guichet-Bancaire-Windev",
      image: "/src/assets/guichet_bancaire.png"
    }
  ]
};
