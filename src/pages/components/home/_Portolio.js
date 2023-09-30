"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css/navigation";


const Portolio = () => {

  const Projects = [
    {
      name: "Zenith (Stage)",
      technologies: [
        {
          name: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          name: "Symfony",
          logo: "https://cdn.iconscout.com/icon/free/png-256/free-symfony-3627325-3029717.png",
        },
      ],
      image: null,
      description:
        "J'ai contribué à un projet web fullstack, utilisant React et Symfony. Malheureusement, le projet n'a pas été concrétisé. J'ai développé un CMS personnalisé et travaillé sur l'ensemble des fonctionnalités du site, acquérant ainsi une expérience approfondie en développement web. Malgré l'échec du projet, cette expérience m'a permis de renforcer mes compétences en programmation et de comprendre davantage les besoins spécifiques des projets web complexes.",
      delay: 200,
      disabled : true,
      link:""
    },
    // ...quatre autres projets exemple avec des données différentes
    {
      name: "ComingDown",
      technologies: [
        {
          name: "TypeScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
        },
        {
          name: "Lua",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
        },
      ],
      image:
        './coming.png',
      description:
        `J'ai mené un projet de modding solo pour "The Binding of Isaac" sur Steam. Mon objectif était de revitaliser et améliorer un mod abandonné. Le projet, débuté de zéro, visait à optimiser l'expérience de jeu en apportant des modifications significatives et innovantes. Cette initiative a permis de donner une seconde vie à un mod délaissé, en le rendant plus attractif et fonctionnel pour la communauté des joueurs.`,
      delay: 300,
      disabled : false,
      link:"https://steamcommunity.com/sharedfiles/filedetails/?id=2878352867"
    },
    {
      name: "Watch out, laser!",
      technologies: [
        {
          name: "TypeScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
        },
        {
          name: "Lua",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
        },
      ],
      image:
        './laser.jpg',
      description:
        `J'ai créé un mod entièrement original, "Watch out, laser!", pour "The Binding of Isaac" sur Steam. Ce mod, dans la lignée de ComingDown, a été conçu pour améliorer la qualité de vie du jeu et assister les joueurs. Il apporte des innovations et des ajustements qui optimisent l'expérience de jeu, le rendant ainsi plus agréable et accessible. C'est un projet qui reflète ma passion pour le développement de mods et l'amélioration de l'expérience utilisateur.`,
      delay: 400,
      disabled : false,
      link:"https://steamcommunity.com/sharedfiles/filedetails/?id=2887926286"
    },
    {
      name: "Site Perso",
      technologies: [
        {
          name: "React",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
      ],
      image:
        "./personalSite.png",
      description:
        "J'ai développé un site personnel comme projet scolaire pour Epitech, en utilisant React. Ce site illustre mes compétences en développement web et présente mes réalisations et projets, notamment dans le domaine du modding. Il sert également de plateforme pour démontrer ma maîtrise des technologies web modernes et de la bibliothèque React, tout en mettant en avant mon profil professionnel et ma passion pour la création de solutions numériques innovantes.",
      delay: 0,
      disabled : false,
      link:""
    },
    {
      name: "Projet 5",
      technologies: [
        {
          name: "Java",
          logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMG51bSVDMyVBOXJpcXVlfGVufDB8fDB8fHww&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit exercitationem ex, assumenda numquam unde blanditiis et deserunt, dignissimos sit quasi sint consequatur placeat labore cumque repellendus cum. Dolore numquam dolores voluptate assumenda fugiat enim deserunt blanditiis saepe id ab! Commodi nam earum illum dolor.",
      delay: 0,
      disabled : false,
      link:""
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-r from-[#a606a6] via-[#7846bc] via-[#435ec1] via-[#006cb8] to-[#0074a6]">
      <div className="mx-auto h-full flex flex-col">
        <div className="basis-1/6 grid content-end">
          <h1 className="text-center text-5xl md:text-6xl text-white font-bold  ">
            Projets
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="basis-5/6 "
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={false}
            navigation={true}
            modules={[Navigation]}
            className="flex justify-items-center"
            style={{
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "95%",
            }}
          >
            {Projects.map((Project, i) => (
              <SwiperSlide
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="SwipC"
              >
                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay={Project.delay}
                  data-aos-offset="0"
                  style={{
                    maxHeight: "600px",
                    minHeight: "600px",
                    width: "450px",
                    maxWidth: "450px",
                  }}
                  className="bg-white p-4 rounded-md shadow-md flex flex-col h-full "
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{Project.name}</h3>

                    <div className="flex space-x-2">
                      {Project.technologies.map((tech, index) => (
                        
                        <img
                          key={index}
                          src={tech.logo}
                          alt={tech.name}
                          className="w-7 h-7"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mb-4 flex-grow">
                  { Project.image ?  (
                    <img
                      className="w-full rounded-md"
                      src={Project.image}
                      alt={Project.name}
                    />) : (
                      <img
                      className="w-full rounded-md"
                      src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMG51bSVDMyVBOXJpcXVlfGVufDB8fDB8fHww&w=1000&q=80"
                      alt={Project.name}
                    />)}
                    <p className="mt-4 text-sm text-center">
                      {Project.description}
                    </p>
                  </div>
                  { Project.disabled ?  (
                    <button disabled className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:red-500">
                      Voir
                    </button>
                  ) : (
                    <a target="_blank" href={Project.link} >
                      <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-500">
                        Voir
                      </button>                      
                    </a>

                  )}
                </div>
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portolio;
