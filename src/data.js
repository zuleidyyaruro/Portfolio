import { faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export const projects = [
  {
    title: "To Do App",
    subtitle: "React-Consumo de API",
    description:
      "Aplicación de Lista de Tareas. Consume un API pública, se clasifican las tareas, manejo de validaciones. Tambien se pueden agregar tareas y cambiar el estado.",
    image: "./project-1.gif",
    link: "https://todo-list-app-zuleidy.netlify.app/",
  },
  {
    title: "Weather App",
    subtitle: "React",
    description:
      "Obtiene el clima del la API de geolocalización del navegador y también permite la búsqueda del clima de una ciudad por medio de una API pública",
    image: "./project-2.gif",
    link: "https://weather-app-new-a74p9xn16-zuleidyyaruro.vercel.app/",
  },
  {
    title: "GitHub App",
    subtitle: "React",
    description:
      "Obtiene datos de usuarios de Github, como imágen de perfil, repositorios y nombre de usuario. La aplicación se maneja por medio de rutas.",
    image: "./project-3.gif",
    link: "https://github-app-seven.vercel.app/",
  },
  {
    title: "Poke App",
    subtitle: "React, Context API",
    description:
      "Obtiene datos de Pokemones de una API pública, buscándolos por nombre o tipo. Además utilizo Context para rutas protegidas. ",
    image: "./project-4.gif",
    link: "https://pokedex-react-final.vercel.app/#/",
  },
 
];

export const skills = [
  "HTML/CSS",
  "Typescript",
  "JavaScript",
  "React",
  "Python",
  "Django",
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