"use client";
import React, { useState, useRef, useEffect } from "react"; // Importation des hooks et de React.
import { useInterval } from "../../../utility/_CustomHook"; // Importation du hook d'intervalle personnalisé.
import Swal from "sweetalert2";

const Snake = () => {
  
  const gameDivRef = useRef(null); // Référence pour la div du jeu. // Utilisé pour mettre le focus sur le jeu au démarrage.
  
  let SCORE = 0; // Score initial du jeu.
  let SCALE = 30; // Échelle du jeu, chaque carré a une taille de 20x20 pixels.

  const [CANVAS_SIZE, setCanvasSize] = useState([0, 0]);
  
  let CENTER_X = Math.floor(CANVAS_SIZE[0] / SCALE / 2); // Position X du centre du canvas.
  let CENTER_Y = Math.floor(CANVAS_SIZE[1] / SCALE / 2); // Position Y du centre du canvas.
  let SNAKE_START = [ // Position de départ du serpent.
    [CENTER_X, CENTER_Y],
    [CENTER_X, CENTER_Y + 1],
  ];
  let APPLE_START = [CENTER_X, CENTER_Y - 4]; // Position de départ de la pomme.
  let SPEED = 150; // Vitesse initiale du jeu.
  let DIRECTIONS = { // Directions possibles et leurs valeurs de déplacement.
    38: [0, -1], // up
    40: [0, 1], // down
    37: [-1, 0], // left
    39: [1, 0], // right
  };

  const canvasRef = useRef(null); // Référence pour le canvas du jeu.
  const [snake, setSnake] = useState(SNAKE_START); // État du serpent.
  const [apple, setApple] = useState(APPLE_START); // État de la pomme.
  const [dir, setDirection] = useState([0, -1]); // Direction initiale du serpent.
  const [speed, setSpeed] = useState(null); // État de la vitesse du jeu.
  const [gameOver, setGameOver] = useState(false); // État de fin de jeu.
  const [score, setScore] = useState(SCORE); // État du score.
  const [showStartButton, setShowStartButton] = useState(true); // État du bouton de démarrage.

  const startGame = () => { // Fonction pour démarrer le jeu.
    setScore(0)
    SPEED = 150
    setSnake(SNAKE_START); // Réinitialisation de la position du serpent.
    setApple(APPLE_START); // Réinitialisation de la position de la pomme.
    setDirection([0, -1]); // Réinitialisation de la direction.
    setSpeed(SPEED); // Définition de la vitesse initiale.
    setGameOver(false); // Réinitialisation de l'état de fin de jeu.
    setShowStartButton(false); // Cacher le bouton de démarrage.
    gameDivRef.current.focus(); // Mettre le focus sur la div du jeu pour capturer les événements clavier.
  };
  const endGame = () => { // Fonction pour terminer le jeu.    
    setSpeed(null); // Arrêter le jeu en réglant la vitesse sur null.
    setGameOver(true); // Mettre l'état de fin de jeu à true.
    Swal.fire({
      icon: 'error',
      title: 'Perdu!',
      footer: '<p >Vous avez fait un score de '+ score +'</p>',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Continuer',
      denyButtonText: `Quitter`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        startGame();
      } else if (result.isDenied) {
        setShowStartButton(true)
      } else {
        setShowStartButton(true)
      }
    })

  };

  const moveSnake = (event) => { // Fonction pour déplacer le serpent.
    const { keyCode } = event; // Extraire keyCode de l'événement.
    if (keyCode >= 37 && keyCode <= 40) { // Vérifier si la touche pressée est une touche de direction.
      if (
        DIRECTIONS[keyCode][0] === -dir[0] &&
        DIRECTIONS[keyCode][1] === -dir[1]
      ) {
        event.preventDefault(); // Empêcher le déplacement dans la direction opposée.
        return;
      }
      setDirection(DIRECTIONS[keyCode]); // Mettre à jour la direction du serpent.
      event.preventDefault(); // Empêcher le comportement par défaut de la touche.
    }
  };

  const createApple = () => { // Fonction pour créer une nouvelle pomme.
    return [
      Math.floor(Math.random() * (CANVAS_SIZE[0] / SCALE)), // Position aléatoire en X.
      Math.floor(Math.random() * (CANVAS_SIZE[1] / SCALE)), // Position aléatoire en Y.
    ];
  };
  const checkCollision = (piece, snk = snake) => { // Fonction pour vérifier les collisions.
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true; // Retourner true si collision avec les bords.

    for (const segment of snk) { // Vérifier la collision avec le serpent lui-même.
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false; // Retourner false si pas de collision.
  };
  const checkAppleCollision = (newSnake) => { // Fonction pour vérifier les collisions avec la pomme.
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) { // Si collision avec la pomme.
      let newApple = createApple(); // Créer une nouvelle pomme.
      if (score > 0 && speed > 25) setSpeed(speed - 5); // Augmenter la vitesse si le score est supérieur à 0 et la vitesse supérieure à 25.
      console.log(speed); // Log de la vitesse pour le débogage.
      setScore(score + 1); // Augmenter le score.
      while (checkCollision(newApple, newSnake)) { // Vérifier la collision de la nouvelle pomme avec le serpent.
        newApple = createApple(); // Créer une nouvelle pomme si collision.
      }
      setApple(newApple); // Mettre à jour la position de la pomme.
      return true; // Retourner true si collision avec la pomme.
    }
    return false; // Retourner false si pas de collision avec la pomme.
  };
  const gameLoop = () => { // Boucle de jeu principale.
    gameDivRef.current.focus(); // Mettre le focus sur la div du jeu pour capturer les événements clavier.
    const snakeCopy = JSON.parse(JSON.stringify(snake)); // Copie profonde du serpent.
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]; // Nouvelle tête du serpent basée sur la direction.
    snakeCopy.unshift(newSnakeHead); // Ajouter la nouvelle tête au serpent.
    if (checkCollision(newSnakeHead)) endGame(); // Vérifier la collision de la tête du serpent et terminer le jeu si collision.
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop(); // Vérifier la collision avec la pomme et retirer la queue du serpent si pas de collision.

    setSnake(snakeCopy); // Mettre à jour l'état du serpent.
  };
  useEffect(() => { // Effet pour dessiner le serpent et la pomme.
    const context = canvasRef.current.getContext("2d"); // Obtenir le contexte 2D du canvas.
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0); // Transformer le contexte pour utiliser l'échelle.
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]); // Effacer le canvas.
    context.fillStyle = "green"; // Définir la couleur de remplissage pour le serpent.
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1)); // Dessiner chaque segment du serpent.
    context.fillStyle = "red"; // Définir la couleur de remplissage pour la pomme.
    context.fillRect(apple[0], apple[1], 1, 1); // Dessiner la pomme.
    setCanvasSize([
      Math.floor(window.innerWidth / SCALE) * SCALE,
      Math.floor(window.innerHeight / SCALE) * SCALE,
    ]);
  }, [snake, apple, gameOver]); // Dépendances de l'effet.

  useInterval(() => gameLoop(), speed); // Utiliser l'intervalle personnalisé pour exécuter la boucle de jeu à chaque intervalle de vitesse.

  return (
    <div className="h-screen bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] flex justify-center items-center"> {/* Conteneur principal */}


      <div className="container  mx-auto bg-white rounded max-w-6xl md:min-w-6xl md:min-h-5xl rounded-lg" data-aos="fade-zoom-in" data-aos-delay="100" data-aos-offset="300">

      <div
        className={showStartButton ? 'hidden' : 'block'}
          ref={gameDivRef} // Référence pour la div du jeu.
          role="button" // Rôle pour l'accessibilité.
          tabIndex={0} // Index de tabulation pour permettre la focalisation.
          onKeyDown={(e) => moveSnake(e, e)} // Gestionnaire d'événements pour les touches du clavier.
        >
          <canvas
          className="block flex flex-col justify-center md:min-w-6xl md:min-h-5xl rounded"
            style={{ // Style du canvas.
              border: "1px solid black",
              width: "100%",
              height: "100%",
            }}
            ref={canvasRef} // Référence pour le canvas.
            width={`${CANVAS_SIZE[0]}px`} // Largeur du canvas.
            height={`${CANVAS_SIZE[1]}`} // Hauteur du canvas.
          >
          </canvas>      
          
        </div>

        <div  className={!showStartButton ? 'hidden' : 'block container flex flex-col justify-center p-4 mx-auto md:p-8 md:min-w-6xl md:min-h-5xl relative'}>
        <button className="absolute top-0 left-0 w-10 h-full bg-red-500 flex items-center justify-center rounded-l-lg" onClick={startGame}>
          <span className="transform -rotate-90">Snake</span>
        </button>
          
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Besoin d&apos;une précision?</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">Epitech?</h3>
            <p className="mt-1 dark:text-gray-400">L&apos;École Epitech, basée en France, est spécialisée dans l&apos;enseignement de l&apos;informatique et des technologies de l&apos;information. Elle forme des experts en informatique à travers un programme innovant et intensif. Le curriculum d&apos;Epitech met l&apos;accent sur les projets pratiques, l&apos;apprentissage par la réalisation, et l&apos;autonomie des étudiants.</p>
          </div>
          <div>
            <h3 className="font-semibold">Pourquoi moi?</h3>
            <p className="mt-1 dark:text-gray-400">Motivé et engagé, je suis un étudiant passionné par le développement et la technologie, ayant une expérience pratique dans la création de solutions web innovantes. Ma soif d&apos;apprendre et mon désir de résoudre des problèmes complexes en informatique me motivent à approfondir continuellement mes connaissances et compétences, tout en restant à la pointe des évolutions technologiques.</p>
          </div>
          <div>
            <h3 className="font-semibold">Quels sont mes domaines de prédilection?</h3>
            <p className="mt-1 dark:text-gray-400">En tant qu&apos;étudiant en développement, mes domaines de prédilection se concentrent principalement sur le développement de fonctionnalités. Bien que je ne sois pas encore un expert, j&apos;apprécie l&apos;aspect technique du développement et je cherche constamment à améliorer mes compétences dans ce domaine. Cependant, je reconnais que l&apos;UX n&apos;est pas mon point fort actuel, mais je suis ouvert à apprendre et à progresser dans ce domaine au fil du temps.</p>
          </div>
          <div>
            <h3 className="font-semibold">J&apos;aimerais voir ce que tu aprend en cours.</h3>
            <p className="mt-1 dark:text-gray-400">Curieux de découvrir ce que j&apos;apprends en cours ? Explorez ma timeline académique pour avoir un aperçu détaillé de mon parcours d&apos;apprentissage, des compétences acquises et des projets réalisés. Vous y trouverez une représentation claire de mon évolution et de ma maîtrise dans divers domaines de l&apos;informatique et du développement. Vous pouvez cliquer sur le bouton de droite pour voir la timeline.</p>
          </div>
        </div>
        <a href="/timeline" target="_blank">
          <button className="absolute top-0 right-0 w-10 h-full bg-blue-500 flex items-center justify-center rounded-r-lg" >
            <span className="transform rotate-90">Timeline</span>
          </button>
        </a>
      </div>
    </div>
      
    </div>
    
  );
};

export default Snake; // Exporter le composant Snake.
