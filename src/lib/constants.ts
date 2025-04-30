interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;  // Optional live demo URL
}
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'Trekking Webpage',
      description: 'A responsive webpage built with HTML, CSS and Media Queries',
      image: '/assert/trekking.png',
      tags: ['HTML','CSS','Media Query'],
      demoUrl: 'https://anuvasamanta.github.io/trekking/',
    },
    {
      id: '2',
      title: 'Music Platform',
      description: ' This allows users to browse, play, and manage music albums and songs.',
      image: '/assert/music.png',
      tags: ['Next js', 'TypeScript', 'Material-UI','Supabase'],
      demoUrl: 'https://spotify-rho-nine.vercel.app',
   
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with Next.js and MUI',
      image: '/assert/image.png',
      tags: ['Next.js', 'TypeScript', 'Material-UI'],
      demoUrl: 'https://protfolio.vercel.app',
    },
  
  ];
  
  interface Skill {
    name: string;
    level: number;
  }
  
  export const skills: Skill[] = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 75 },
    { name: 'React Js.', level: 90 },
    { name: 'Next Js.', level: 85 },
  ];