// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          greeting: "Hi!, I am ",
          about: {
            nav: "About me",
            title: "About me",
            me: {
              text: "I'm a",
              ch: "Ch",
              ile: "ile",
              an: "an 🗿",
              text2:
                " third-year student majoring in Computer Engineering and Telecommunications at ",
              institution: "Diego Portales University.",
              programmingJourney:
                "My journey with programming began at the age of 15. Since then, I have been honing my skills, crafting games in my free time, and engaging in various competitions, projects, and bootcamps.",
              passionForElectronics:
                "I have a deep passion for electronics and everything that revolves around them. I have been involved in various projects involving ",
              electronics1: "Arduino, ",
              electronics2: "Raspberry Pi, ",
              electronics3: "and some more microcontrollers.",
              mindset:
                "As a developer, I am always looking for new challenges and opportunities to grow and improve my skills. I'm constantly looking for new technologies and frameworks to learn and apply to my projects.",
            },
          },

          timeline: {
            graduation: {
              date: "December, 2020",
              event: "Graduation",
              description:
                "The day I graduated from high school. I was also awarded ",
              award1:
                "The best student of the Year (2020) with a perfect score grade of 7.0",
              connector: "and",
              award2:
                "Outstanding english student, for my performance in the Preliminary English Test (PET) from Cambridge University",
            },
            university: {
              date: "March 2021",
              event: "University",
              description:
                "I started my studies in Computer Engineering and Telecommunications at Diego Portales University, after being in the ",
              paes: "top 5% students on the country ",
              description2: "who take the PDT (PAES) that year.",
            },
            freelance: {
              date: "July 2022",
              event: "Freelance",
              description:
                "I started working as a freelance developer, creating websites and web applications for friends and people around to make money while I was in college.",
            },
          },

          projects: {
            title: "Projects",
            description:
              "Here are some of the projects I have worked on. You can find more of my work on my ",
            github: "GitHub",
            project1: {
              title: "Old Portfolio",
              description:
                "This was a portfolio made with pure HTML, CSS and JavaScript. It was my first portfolio and I learned a lot from it.",
            },
            project2: {
              title: "Evangelion Wiki",
              description:
                "This was my favorite project. I made a wiki about the anime Evangelion using React my own API! 😁.",
            },
            project3: {
              title: "ProgComp UDP",
              description:
                "This was a personal project to build a documentation website for the Competitive Programming people of my university. I used astro and starlight for this project.",
            },
            project4: {
              title: "Repo UDP",
              description:
                "This is a repository where I cover all courses from my career (Still in progress) and try to make them comprehensible for everyone. I used React and Tailwind for this project.",
            },
            project5: {
              title: "Simple Portfolio",
              description:
                "This was a portfolio I made as an assignment for a classmate in my web development class.",
            },
            project6: {
              title: "Mimskin",
              description:
                "Eccomerce website for a Jewelry SME in Chile. Site build with React and deployed with Vercel.",
            },
            project7: {
              title: "HeartBeat",
              description:
                "This was an arduino project made to measure the heart rate of a person and send it to a web server. I used C++ along with an Arduino Uno and a pulse sensor for this project.",
            },
            
            project8: {
              title: "StarPy Valley",
              description:
                "This was a personal project to build a game using PyGame. I replicate some features of the game Stardew Valley.",
            },
          },
          contact: {
            title: "Contact",
            name: "Name",
            description:
              "If you want to contact me, you can do it through my email or my social networks.",
            email: "Email",
            message: "Tell my your ideas here...",
            social: "Social Networks",
          },
        },
      },
      es: {
        translation: {
          greeting: "Hola!, Soy ",
          about: {
            nav: "Sobre mí",
            title: "Sobre mí",
            me: {
              text: "Soy un",
              ch: "Chi",
              ile: "le",
              an: "no 🗿",
              text2:
                " estudiante de tercer año de Ingeniería civil en Informática y Telecomunicaciones en la ",
              institution: "Universidad Diego Portales.",
              programmingJourney:
                "Mis inicios con la programación comenzaron a los 15 años. Desde entonces, he estado perfeccionando mis habilidades, creando juegos en mi tiempo libre y participando en varios concursos, proyectos y bootcamps.",
              passionForElectronics:
                "Tengo una profunda pasión por la electrónica y todo lo que gira en torno a ella. He participado en varios proyectos que involucran ",
              electronics1: "Arduino, ",
              electronics2: "Raspberry Pi, ",
              electronics3: "y algunos microcontroladores más.",
              mindset:
                "Como desarrollador, siempre estoy buscando nuevos desafíos y oportunidades para crecer y mejorar mis habilidades. Siempre estoy buscando nuevas tecnologías y frameworks para aprender y aplicar a mis proyectos.",
            },
          },
          timeline: {
            graduation: {
              date: "Diciembre, 2020",
              event: "Graduación",
              description:
                "El día que me gradué de la enseñanza media. Fui premiado como ",
              award1:
                "el mejor estudiante del año (2020) con una nota perfecta de 7.0",
              connector: "y",
              award2:
                "Estudiante sobresaliente en el área de inglés, por mi desempeño en el Preliminary English Test (PET) de la Universidad de Cambridge",
            },
            university: {
              date: "Marzo 2021",
              event: "Universidad",
              description:
                "Comencé mis estudios en Ingeniería civil en Informática y Telecomunicaciones en la Universidad Diego Portales, después de estar en el ",
              paes: "top 5% estudiantes del país ",
              description2: "que tomaron la PDT(PAES) ese año.",
            },
            freelance: {
              date: "Julio 2022",
              event: "Freelance",
              description:
                "Comencé a trabajar como desarrollador de forma independiente, creando sitios web y aplicaciones para amigos y cercanos para ganar dinero mientras estaba en la universidad.",
            },
          },
          projects: {
            title: "Proyectos",
            description:
              "Aquí hay algunos de los proyectos en los que he trabajado. Puedes encontrar más de mi trabajo en mi ",
            github: "GitHub",
            project1: {
              title: "Viejo Portfolio",
              description:
                "Este fue un portfolio hecho con puro HTML, CSS y JavaScript. Fue mi primer portfolio y aprendí mucho de él.",
            },
            project2: {
              title: "Evangelion Wiki",
              description:
                "Este fue mi proyecto favorito. Hice un wiki sobre el anime Evangelion usando React y mi propia API! 😁.",
            },
            project3: {
              title: "ProgComp UDP",
              description:
                "Este fue un proyecto personal para construir un sitio web de documentación para la gente de Programación Competitiva de mi universidad. Usé astro y starlight para este proyecto.",
            },
            project4: {
              title: "Repo UDP",
              description:
                "Este es un repositorio donde cubro todos los cursos de mi carrera (Aún en progreso) y trato de hacerlos comprensibles para todos. Usé React y Tailwind para este proyecto.",
            },
            project5: {
              title: "Simple Portfolio",
              description:
                "Este fue un portfolio que hice como una tarea para un compañero de clase en mi clase de desarrollo web.",
            },
            project6: {
              title: "Mimskin",
              description:
                "Sitio web de comercio electrónico para una PYME de joyería en Chile. Sitio construido con React y desplegado con Vercel.",
            },
            project7: {
              title: "HeartBeat",
              description:
                "Este fue un proyecto de arduino hecho para medir la frecuencia cardíaca de una persona y enviarla a un servidor web. Usé C++ junto con un Arduino Uno y un sensor de pulso para este proyecto.",
            },
            project8: {
              title: "StarPy Valley",
              description:
                "Este fue un proyecto personal para construir un juego usando PyGame. Replico algunas características del juego Stardew Valley.",
            },
          },
          contact: {
            title: "Contacto",
            name: "Nombre",
            description:
              "Si quieres contactarme, puedes hacerlo a través de mi correo electrónico o mis redes sociales.",
            email: "Correo Electrónico",
            message: "Cuéntame tus ideas aquí...",
            social: "Redes Sociales",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Salut!, Je suis ",
          about: {
            nav: "À propos de moi",
            title: "À propos de moi",
            me: {
              text: "Je suis un",
              ch: "Chi",
              ile: "li",
              an: "en 🗿",
              text2:
                " étudiant de troisième année en génie informatique et télécommunications à l'",
              institution: "Université Diego Portales.",
              programmingJourney:
                "Mon parcours en programmation a commencé à l'âge de 15 ans. Depuis lors, j'ai perfectionné mes compétences, créé des jeux pendant mon temps libre et participé à divers concours, projets et bootcamps.",
              passionForElectronics:
                "J'ai une passion profonde pour l'électronique et tout ce qui tourne autour. J'ai participé à divers projets impliquant ",
              electronics1: "Arduino, ",
              electronics2: "Raspberry Pi, ",
              electronics3: "et quelques microcontrôleurs de plus.",
              mindset:
                "En tant que développeur, je suis toujours à la recherche de nouveaux défis et opportunités pour grandir et améliorer mes compétences. Je suis constamment à la recherche de nouvelles technologies et de nouveaux cadres à apprendre et à appliquer à mes projets.",
            },
          },
          timeline: {
            graduation: {
              date: "Décembre 2020",
              event: "Graduation",
              description:
                "Le jour où j'ai obtenu mon diplôme d'études secondaires. J'ai également été récompensé par ",
              award1:
                "Le meilleur étudiant de l'année (2020) avec une note parfaite de 7.0",
              connector: "et",
              award2:
                "Étudiant d'anglais exceptionnel, pour ma performance au Preliminary English Test (PET) de l'Université de Cambridge",
            },
            university: {
              date: "Mars 2021",
              event: "University",
              description:
                "J'ai commencé mes études en génie informatique et télécommunications à l'Université Diego Portales, après avoir été dans le ",
              paes: "top 5% des étudiants du pays ",
              description2: "qui ont passé le PDT(PAES) cette année-là.",
            },
          },
          projects: {
            title: "Projets",
            description:
              "Voici quelques-uns des projets sur lesquels j'ai travaillé. Vous pouvez trouver plus de mon travail sur mon ",
            github: "GitHub",
            project1: {
              title: "Ancien Portfolio",
              description:
                "Il s'agissait d'un portfolio réalisé avec du pur HTML, CSS et JavaScript. C'était mon premier portfolio et j'ai beaucoup appris de lui.",
            },
            project2: {
              title: "Evangelion Wiki",
              description:
                "Ce projet a été mon préféré. J'ai créé un wiki sur l'anime Evangelion en utilisant React et mon propre API! 😁.",
            },
            project3: {
              title: "ProgComp UDP",
              description:
                "Ce projet personnel visait à construire un site Web de documentation pour les adeptes de la programmation compétitive de mon université. J'ai utilisé astro et starlight pour ce projet.",
            },
            project4: {
              title: "Repo UDP",
              description:
                "Il s'agit d'un référentiel où je couvre tous les cours de ma carrière (encore en cours) et essaie de les rendre compréhensibles pour tout le monde. J'ai utilisé React et Tailwind pour ce projet.",
            },
            project5: {
              title: "Simple Portfolio",
              description:
                "Il s'agissait d'un portfolio que j'ai réalisé en tant que devoir pour un camarade de classe dans mon cours de développement web.",
            },
            project6: {
              title: "Mimskin",
              description:
                "Site Web de commerce électronique pour une PME de bijoux au Chili. Site construit avec React et déployé avec Vercel.",
            },
            project7: {
              title: "HeartBeat",
              description:
                "Ce projet a été réalisé avec Arduino pour mesurer le rythme cardiaque d'une personne et l'envoyer à un serveur Web. J'ai utilisé C++ avec un Arduino Uno et un capteur de pouls pour ce projet.",
            },
            project8: {
              title: "StarPy Valley",
              description:
                "Ce projet personnel visait à construire un jeu en utilisant PyGame pour reproduire certaines fonctionnalités du jeu Stardew Valley.",
        },
      },
      contact: {
        title: "Contact",
        name: "Nom",
        description:
          "Si vous souhaitez me contacter, vous pouvez le faire par e-mail ou sur mes réseaux sociaux.",
        email: "E-mail",
        message: "Dites-moi vos idées ici...",
        social: "Réseaux Sociaux",
      },
    },
  },
    },
  });

export default i18n;
