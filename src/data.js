import { faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export const projects = [
  {
    title: "To Do App",
    subtitle: "React-API",
    description:
      "Aplicación de Lista de Tareas. Consume un API pública, se clasifican las tareas, manejo de validaciones. Tambien se pueden agregar tareas y cambiar el estado.",
    image: "./project-1.gif",
    link: "https://todo-list-app-zuleidy.netlify.app/",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reactbootcamp.com",
  },
 
];

export const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node",
  "GraphQL",
  "Material UI",
];

export const education=[
  {
    name: "Academlo",
    title: "Desarrollo Web Full Stack y Ciencias de la Computación",
    year: '2020-2021'
  },
  {
    name: "Fundación Universitaria de Popayán",
    title: "Ingeniería de Sistemas",
    year: '2015-2021'
  },
  {
    name: "SENA",
    title: "Análisis y Desarrollo de Sistemas de Información",
    year: '2016-2018'
  },

]

export const links =[
  {
    name:'github',
    url:'https://github.com/zuleidyyaruro',
    icon:faGithub,
  },
  {
    name:'linkedin',
    url:'https://www.linkedin.com/in/zuleidyyaruroorozco/',
    icon:faLinkedin,
  },
  {
    name:'facebook',
    url:'https://www.facebook.com/Zuleidy.Yaruro/',
    icon:faFacebookSquare,
  }
]