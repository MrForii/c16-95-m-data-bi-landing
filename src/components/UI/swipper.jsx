// Import Images
import ImageMIbarra from "../../assets/profile-imgs/miba.jpg";
import ImageFrank from "../../assets/profile-imgs/afrank.jpg";
import ImageCeleste from "../../assets/profile-imgs/mcele.png";
import ImageMFerreyra from "../../assets/profile-imgs/mferr.png";
import ImageJulio from "../../assets/profile-imgs/djulio.jpg";
import ImageRodrigo from "../../assets/profile-imgs/vrodri.jpg";
import ImageAdri from "../../assets/profile-imgs/madri.jpg";
import ImageLeopoldo from "../../assets/profile-imgs/fleo.jpg";


// Import Slider

import CardTeam from "./card-team";
import React from "react";
import Slider from "react-slick";


const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {
        memberTeam.map((member, index) => {
          return (
            <CardTeam
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
              bio={member.bio}
              links={member.links}
            />
          )
        })
      }
    </Slider>
  );
}

export default Slides


const memberTeam = [
    {
        name: "Franco Arce",
        role: [
            "Product Manager",
            "Data Analyst",

        ],
        img: ImageFrank,
        bio: "Especializado en Python, SQL y Power BI. Analítico, resolutivo; extraigo información significativa de grandes conjuntos de datos.",
        links: {
            gmail: "mailto:francogonzaloarce@gmail.com",
            linkedin: "https://www.linkedin.com/in/franco-arce-37a83a220/",
            github: "https://github.com/Franco-Arce",
        }
    },
    {
        name: "Rodrigo Valdez",
        role: [
            "Product Manager",
            "Data Analyst",
        ],
        img: ImageRodrigo,
        bio: "Apasionado por datos, impulso decisiones estratégicas. Dominio en Excel, SQL, Python, Numpy, Seaborn, Mathplotlib, Power BI.",
        links: {
            gmail: "mailto:fori2001@hotmail.com",
            linkedin: "https://www.linkedin.com/in/rodrigo-valdez7/",
            github: "https://github.com/MrForii",
        }
    },
    {
        name: "Matias Ibarra",
        role: [
            "Product Manager",
            "Data Engineer",
        ],
        img: ImageMIbarra,
        bio: "Especializado en Python, SQL y Power BI. Formación en Data Science, Machine Learning y Data Engineering en The Bridge.",
        links: {
            gmail: "mailto:matiasezibarra@gmail.com",
            linkedin: "https://www.linkedin.com/in/matias-ibarra92/",
            github: "https://github.com/Matias-Ibarra",
        }
    },
    {
        name: "Adriana Muñoz",
        role: [
            "Data Engineer",
            "Data Scientist",
        ],
        img: ImageAdri,
        bio: "Exploradora de desafíos en ciencia de datos. Especializada en probabilidad, estadística y análisis profundo de datos para mejoras.",
        links: {
            gmail: "mailto:adrikarol1096@gmail.com",
            linkedin: "https://www.linkedin.com/in/adrianamuñozr/",
            github: "https://github.com/Adrikarol",
        }
    },
    {
        name: "Maria Celeste Coronel",
        role: [
            "Data Analyst",
        ],
        img: ImageCeleste,
        bio: "Aprendizaje continuo, enseñanza, tecnología. Amante de la evolución del campo de la ciencia de datos. Siempre hay más por aprender y compartir.",
        links: {
            gmail: "mailto:mcelestecrnl@gmail.com",
            linkedin: "https://www.linkedin.com/in/maria-celeste-coronel-b93837249/",
            github: "https://github.com/MCCoronel",
        }
    },
    {
        name: "Matias Ferreyra",
        role: [
            "Data Engineer",
        ],
        img: ImageMFerreyra,
        bio: "Adentrandome a la ingeniería de datos. Aplicación de conocimientos en análisis y gestión de datos para proyectos exitosos.",
        links: {
            gmail: "mailto:mferreyra82@gmail.com",
            linkedin: "https://www.linkedin.com/in/matiasaferreyra/",
            github: "https://github.com/mferreyra",
        }
    },
    {
        name: "Leopoldo Flores",
        role: [
            "Data Engineer",
            "Data Scientist",
        ],
        img: ImageLeopoldo,
        bio: "Cientifico de datos con visión de negocio. Adaptabilidad, mejora continua y resultados en entornos colaborativos.",
        links: {
            gmail: "mailto:leopoldofloresc@gmail.com",
            linkedin: "https://www.linkedin.com/in/leopoldofloresc/",
            github: "https://github.com/LeopoldoGitHub",
        }
    },
    {
        name: "Julio Dip",
        role: [
            "Data Analyst",
        ],
        img: ImageJulio,
        bio: "Colaborador entusiasta, comprometido con objetivos. Trabajo en equipo, dispuesto a aprender y emprender con la mejor predisposición.",
        links: {
            gmail: "mailto:jcdip2500@gmail.com",
            linkedin: "https://www.linkedin.com/in/julio-dip-qa-data-bi-python-jr",
        }
    }
]