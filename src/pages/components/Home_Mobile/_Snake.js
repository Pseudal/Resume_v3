"use client";
import React, { useState, useRef, useEffect } from "react"; // Importation des hooks et de React.
import { useInterval } from "../../../utility/_CustomHook"; // Importation du hook d'intervalle personnalisé.
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





const Snake = () => {
  
  

  return (
<div className="h-screen bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] flex justify-center items-center p-4 md:p-0"> {/* Conteneur principal */}
    <div className="container mx-auto bg-white rounded-lg md:min-w-6xl md:min-h-5xl p-6 overflow-hidden">
        <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">Besoin d&apos;une précision?</h2>
        <div className="">
        <Swiper
            slidesPerView={1}
            spaceBetween={25}
            centeredSlides={false}
            pagination={true}
            modules={[Pagination]}
            className="grid gap-6 sm:gap-8 p-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
            style={{
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "95%",
            }}
          > 
            <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
         
              >

              <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Epitech?</h3>
                  <p className="text-base leading-relaxed text-gray-700">L&apos;École Epitech, basée en France, est spécialisée dans l&apos;enseignement de l&apos;informatique et des technologies de l&apos;information. Elle forme des experts en informatique à travers un programme innovant et intensif. Le curriculum d&apos;Epitech met l&apos;accent sur les projets pratiques, l&apos;apprentissage par la réalisation, et l&apos;autonomie des étudiants.</p>
              </div>
              </SwiperSlide> 

              
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
               
              >

              <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Pourquoi moi?</h3>
                  <p className="text-base leading-relaxed text-gray-700">Motivé et engagé, je suis un étudiant passionné par le développement et la technologie, ayant une expérience pratique dans la création de solutions web innovantes. Ma soif d&apos;apprendre et mon désir de résoudre des problèmes complexes en informatique me motivent à approfondir continuellement mes connaissances et compétences, tout en restant à la pointe des évolutions technologiques.</p>
              </div>
              </SwiperSlide> 

              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
           
              >

              <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Un domaines de prédilection?</h3>
                  <p className="text-base leading-relaxed text-gray-700">En tant qu&apos;étudiant en développement, mes domaines de prédilection se concentrent principalement sur le développement de fonctionnalités. Bien que je ne sois pas encore un expert, j&apos;apprécie l&apos;aspect technique du développement et je cherche constamment à améliorer mes compétences dans ce domaine. Cependant, je reconnais que l&apos;UX n&apos;est pas mon point fort actuel, mais je suis ouvert à apprendre et à progresser dans ce domaine au fil du temps.</p>
              </div>
              </SwiperSlide> 

              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}

              >

              <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">J&apos;aimerais voir ce que tu aprend en cours.</h3>
                  <p className="text-base leading-relaxed text-gray-700">Curieux de découvrir ce que j&apos;apprends en cours ? Explorez ma timeline académique pour avoir un aperçu détaillé de mon parcours d&apos;apprentissage, des compétences acquises et des projets réalisés. Vous y trouverez une représentation claire de mon évolution et de ma maîtrise dans divers domaines de l&apos;informatique et du développement. Vous pouvez cliquer sur le bouton en dessous pour voir la timeline.</p>
              </div>
              </SwiperSlide> 

          </Swiper>

  
        </div>
        <a href="/timeline" target="_blank" rel="noreferrer" className="block mt-6 md:mt-12">
            <button className="h-12 w-full bg-blue-500 flex items-center justify-center rounded-lg hover:bg-blue-600 transition">
                <span className="text-white text-lg">Voir la Timeline</span>
            </button>
        </a>
    </div>
</div>
      
    
    
  );
};

export default Snake; // Exporter le composant Snake.
