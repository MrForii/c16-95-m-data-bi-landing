
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
        name: "Jorge Vega",
        role: [
            "Desarrollador",
            "Diseñador",

        ],
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        links: {
            gmail: "mailto:",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
        }
    },
    {
        name: "Pepe",
        role: [
            "Desarrollador",
            "Diseñador",

        ],
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        links: {
            gmail: "mailto:",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
        }
    },
    {
        name: "JoseLui",
        role: [
            "Desarrollador",
            "Diseñador",

        ],
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        links: {
            gmail: "mailto:",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
        }
    },
    {
        name: "Manolo",
        role: [
            "Desarrollador",
            "Diseñador",

        ],
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        links: {
            gmail: "mailto:",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
        }
    },
    {
        name: "Jorgito",
        role: [
            "Desarrollador",
            "Diseñador",

        ],
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        links: {
            gmail: "mailto:",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
        }
    },
]