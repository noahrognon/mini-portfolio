export interface Project {
  title: string;
  slug: string;
  context: string;
  realization: string;
  technologies: string[];
  accent: string;
  image: string;
  linkLabel: string;
  linkHref: string;
}

export const skills = [
  'Astro',
  'TypeScript',
  'JavaScript',
  'TailwindCSS',
  'Vue.js',
  'API',
  'Base de donnees',
  'Supabase',
  'Deploiement VPS',
  'UI dynamique',
  'IA / assistant intelligent',
] as const;

export const values = [
  {
    title: 'Interfaces modernes et interactives',
    text: 'Des experiences front-end lisibles, fluides et travaillees pour creer une premiere impression immediate.',
  },
  {
    title: 'Approche full stack structuree',
    text: 'Architecture, logique utilisateur, connexion aux API et gestion des donnees pensees comme un produit complet.',
  },
  {
    title: 'Personnalisation et logique metier',
    text: 'Mise en place de parcours utiles, de fonctionnalites sur mesure et d interactions qui servent un vrai usage.',
  },
  {
    title: 'Execution technique concrete',
    text: 'Des projets deployes, relies a des bases de donnees et capables d evoluer dans un contexte reel.',
  },
];

export const projects: Project[] = [
  {
    title: 'Portfolio Developpeur - portfolio.noahrognon.fr',
    slug: 'portfolio',
    context:
      "Dans le cadre de mes etudes en developpement web, j ai concu et developpe mon propre portfolio de developpeur afin de presenter mes projets et competences techniques. L objectif etait de creer un site web moderne, dynamique et evolutif capable de mettre en valeur mon travail aupres des entreprises.",
    realization:
      "J ai developpe l integralite du site web en utilisant le framework Astro pour assurer des performances elevees et une architecture bien structuree. Le portfolio est connecte a une base de donnees permettant une gestion facile du contenu et des mises a jour de projets. Le site inclut egalement des fonctionnalites interactives telles qu un mini-jeu Snake et un assistant IA capable de repondre aux questions sur mon profil et mes projets.",
    technologies: ['Astro', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Base de donnees', 'API', 'Deploiement VPS'],
    accent: 'from-[#ab3245]/35 via-[#7a1426]/20 to-transparent',
    image: '/projects/portfolio.png',
    linkLabel: 'Explorer le portfolio',
    linkHref: '#contact',
  },
  {
    title: 'Emminent - Plateforme d Assistant IA',
    slug: 'emminent',
    context:
      "Emminent est un projet developpe durant mes etudes visant a creer une plateforme web integrant un assistant d intelligence artificielle concu pour aider les etudiants dans leur travail academique.",
    realization:
      "J ai participe au developpement de la plateforme en implementant plusieurs fonctionnalites, notamment l authentification des utilisateurs, un systeme de conversation IA et plusieurs outils concus pour accompagner les etudiants durant leur processus de revision.",
    technologies: ['JavaScript', 'TypeScript', 'Astro', 'API', 'Base de donnees'],
    accent: 'from-[#d15d6f]/30 via-[#852535]/15 to-transparent',
    image: '/projects/emminent.png',
    linkLabel: 'Voir les capabilities',
    linkHref: '#contact',
  },
  {
    title: 'Configurateur de Lunettes - Projet de Developpement Web',
    slug: 'lunettes',
    context:
      "Ce projet a ete developpe dans le cadre d un projet de developpement web a l universite. L objectif etait de construire une application permettant aux utilisateurs de creer et personnaliser des lunettes a l aide d un configurateur interactif.",
    realization:
      "L application permet aux utilisateurs de creer des comptes, configurer des lunettes en modifiant differents parametres et sauvegarder leurs configurations. Un assistant IA a egalement ete integre pour aider les utilisateurs a choisir les options de configuration.",
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'API', 'Deploiement VPS'],
    accent: 'from-[#f28a8a]/24 via-[#7c1b29]/18 to-transparent',
    image: '/projects/lunette.png',
    linkLabel: 'Decouvrir le configurateur',
    linkHref: '#contact',
  },
];
