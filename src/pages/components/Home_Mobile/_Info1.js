"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Info1 = () => {
  const competences = [
    {
      nom: "Bash",
      commentaire: "Utilisé pour automatiser des tâches et gérer des systèmes.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVHxDxpFx6R4N6v5Z2SCRkUzqVlFRKmak3BwW67Y45raKeMS5OEGi74xkwOceRRf52Qc&usqp=CAU",
    },
    {
      nom: "Lua",
      commentaire:
        "Expérimenté dans des scripts simples et l'intégration avec d'autres langages.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
    },
    {
      nom: "Python",
      commentaire: "Utilisé pour des scripts et des projets de data science.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png",
    },
    {
      nom: "HTML",
      commentaire: "Maîtrise des bases et utilisation dans divers projets web.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcWPbZzHi8r3UHGmNF-Zc7RsmB17nnstfqksJwl6xK-sZpNqMw9ZWNHWf-y1MPNnO6f8&usqp=CAU",
    },
    {
      nom: "CSS",
      commentaire:
        "Compréhension des concepts de base et utilisation de frameworks comme Tailwind CSS.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aDNWGPhy2dNf9B_0Eq9NqbyYXGLmzAk3DJYhqUGH8CSOxHawsGmoQGi53bGG-WD26p8&usqp=CAU",
    },
    {
      nom: "JavaScript",
      commentaire: "Appris les bases et quelques frameworks comme React.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuYiXPX0q46MRrhMb_xyULtmc7dKvEPkFNsaFBhJIRRkBQrbEfEQGjQZYJ0ALUZtgSXE&usqp=CAU",
    },
    {
      nom: "React",
      commentaire:
        "Développé des applications front-end en utilisant des concepts avancés.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      nom: "PHP",
      commentaire:
        "Création de scripts et développement de sites web dynamiques.",
      logo: "https://play-lh.googleusercontent.com/cyTI43JCjc4L-e1m7FvJhI1VhmTSJ4AMNZoqhkp0Xm6_NOtHbaewp9UPVLw5R3-tZIU",
    },
    {
      nom: "Symfony",
      commentaire:
        "Expérience avec ce framework PHP pour construire des applications web.",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-symfony-3627325-3029717.png",
    },
    {
      nom: "Java",
      commentaire: "Encore très débutant, en cours d'apprentissage.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    },
    {
      nom: "N/A",
      commentaire:
        "Plus à voir et à apprendre, toujours prêt à acquérir de nouvelles compétences.",
      logo: "https://cdn-icons-png.flaticon.com/512/16/16096.png",
    },
  ];

  let techno = () => {
    console.log("test");
    Swal.fire({
      title: "Mes techno :",
      html: `${competences.map(
        (competence, index) =>
          `<li style="padding-bottom: 1rem; display: flex; align-items: center;">
          <img src=${competence.logo} alt=${competence.nom} style="width: 1.75rem; height: 1.75rem; margin-right: 0.5rem; object-fit: cover;" />
          <div>
              <p style="text-align: left; font-size: 1rem; font-weight: bold; color: black;">${competence.nom}</p>
              <p style="text-align: left; font-size: 0.75rem; color: gray;">${competence.commentaire}</p>
          </div>
      </li>`
      ).join('')}`
    });
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-[#20bad1] via-[#00c2ab] via-[#5ec36a] via-[#afb81f] to-[#ff9b00] flex justify-center items-center">
      {/* Contenu de l'élément de droite, card photo */}
      <div className="col-span-3">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
            style={{ zIndex: 100 }}
          >
            <div className="p-4 md:p-8 text-center lg:text-left">
              <div
                id="ImportantImage"
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('./moi.jpg')",
                }}
              ></div>

              <h1 className="text-black text-3xl font-bold pt-8 lg:pt-0">
                Adrien
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-black">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Developpeur
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start text-black">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                Localisé en Ile-de-France
              </p>
              <p className="pt-6 text-sm text-black">
                Passionné par le développement , j&apos;ai débuté dans la
                création d&apos;applications web. Mon intérêt croissant pour la
                programmation m&apos;oriente désormais vers la sécurité
                informatique et l&apos;intelligence artificielle. Toujours avide
                d&apos;apprendre, je suis attentif aux dernières tendances
                technologiques.
              </p>

              <div className="flex flex-wrap justify-around">
                <div className="pt-8 pb-8 px-2">
                  <a
                    href="https://www.linkedin.com/in/adrien-garnier-328647183/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      style={{ minWidth: "7rem" }}
                      className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 rounded-full"
                    >
                      Linkedin
                    </button>
                  </a>
                </div>

                <div className="pt-8 pb-8 px-2">
                  <a
                    href="https://github.com/Pseudal?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      style={{ minWidth: "7rem" }}
                      className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 rounded-full"
                    >
                      Github
                    </button>
                  </a>
                </div>

                <div className="pt-8 pb-8 px-2">
                  <button
                    onClick={() => {
                      techno();
                    }}
                    style={{ minWidth: "7rem" }}
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 rounded-full"
                  >
                    Techno
                  </button>
                </div>

                <div className="pt-8 pb-8 px-2">
                  <a
                    href={"./CVAdrien_v2.pdf"}
                    download="CV_Adrien-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      style={{ minWidth: "7rem" }}
                      className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 rounded-full"
                    >
                      CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5" style={{ zIndex: 200 }}>
            <img
              style={{ width: "360px", height: "540px", objectFit: "cover" }}
              src="./moi.jpg"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info1;
