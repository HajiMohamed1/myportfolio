// ---------------------------------------------------------------------------
// Site data — replace the TODO values below with your real links.
// Everything (socials, contact, project links) is configured here.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Haji Mohamed',
  role: 'MERN Stack Developer',
  tagline:
    'Building clean, responsive and practical web applications with the MERN stack.',
  intro:
    'I am a MERN stack developer based in Kenya. I enjoy turning ideas into working web applications — handling everything from the database to the UI.',
  email: 'hajimohamed90281@gmail.com', // TODO: your email
  phone: '+91 7538830467', // TODO: your phone number
  linkedin: "https://www.linkedin.com/in/haji-mohamed-reactjs/", // TODO: your LinkedIn URL
  github: "https://github.com/HajiMohamed1?tab=repositories", // TODO: your GitHub URL
}

export const projects = [
  {
    id: 'cinewave',
    title: 'CineWave',
    description:
      'Movie discovery and streaming web app. Browse trending movies, search by title, view details and watch trailers — all powered by the TMDB API.',
    tech: ['React.js', 'JavaScript', 'Firebase', 'TMDB API'],
    demo: 'https://cinewave-clone-snw2.vercel.app/', // TODO: CineWave live demo
    github: 'https://github.com/HajiMohamed1?tab=repositories', // TODO: CineWave repo
    image: '/screenshots/cinewave.jpg',
  },
  {
    id: 'chat-app',
    title: 'MERN Chat Application',
    description:
      'Real-time chat app with authentication, one-to-one messaging and online user status, built with Socket.io and the MERN stack.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
    demo: 'https://chat-app-clinet-seven.vercel.app/', // TODO: chat app demo
    github: 'https://github.com/HajiMohamed1?tab=repositories', // TODO: chat app repo
    image: '/screenshots/chat-app.jpg',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description:
      'Modern e-commerce application with product catalog, cart and checkout flow. REST API built with Express and MongoDB.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    demo: 'https://ecomerce-client-zeta.vercel.app',
    github: 'https://github.com/HajiMohamed1?tab=repositories', // TODO: e-commerce repo
    image: '/screenshots/ecommerce.jpg',
    layout: 'full',
  },
]

export const skills = {
  Frontend: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React.js', icon: 'react' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'node' },
    { name: 'Express.js', icon: 'express' },
  ],
  Database: [
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
  ],
  Tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'IntelliJ IDEA', icon: 'intellij' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
