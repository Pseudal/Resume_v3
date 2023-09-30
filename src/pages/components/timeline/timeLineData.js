import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';


export const TimelineData = [{
    title:"Début de la piscine d'Epitech",
    date:"11-09-2023 to 21-09-2023",
    icon: <SchoolIcon />,
    description:"Prise en main de python et familiarisation avec le code",
    color:{background: 'rgb(33, 150, 243)', color: '#fff'},
    techno:[{
        name:"Python",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png"
    }]
},{
    title:"Premier examin",
    date:"22-09-2023",
    icon: <WorkIcon />,
    description:"Mise en pratique de mon apprentissage sur Python avec plusieurs exercices",
    color:{background: 'rgb(233, 30, 99)', color: '#fff'},
    techno:[{
        name:"Python",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png"
    }]
},{
    title:"Début apprentissage developpement web",
    date:"25-09-2023",
    icon: <SchoolIcon />,
    description:"Demarage du cursus de developpement web a Epitech, decouverte de HTML",
    color:{background: 'rgb(33, 150, 243)', color: '#fff'},
    techno:[{
        name:"HTML",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcWPbZzHi8r3UHGmNF-Zc7RsmB17nnstfqksJwl6xK-sZpNqMw9ZWNHWf-y1MPNnO6f8&usqp=CAU"
    }]
},{
    title:"Apprendre à styliser une page avec CSS",
    date:"26-09-2023",
    icon: <SchoolIcon />,
    description:"Utilisation de CSS pour styliser une page web, decouverte de la mise en page avec flexbox grid etc. Apprentissage de la mise en page responsive et de l'utilisation des frameworks comme Tailwind CSS",
    color:{background: 'rgb(33, 150, 243)', color: '#fff'},
    techno:[{
        name:"HTML",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcWPbZzHi8r3UHGmNF-Zc7RsmB17nnstfqksJwl6xK-sZpNqMw9ZWNHWf-y1MPNnO6f8&usqp=CAU"
    },{
        name:"CSS",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aDNWGPhy2dNf9B_0Eq9NqbyYXGLmzAk3DJYhqUGH8CSOxHawsGmoQGi53bGG-WD26p8&usqp=CAU"
    }] 
},{
    title:`Premier "projet" : créer un CV en HTML et CSS`,
    date:"28-09-2023",
    icon: <WorkIcon />,
    description:"Premier projet de developpement web, creation d'un CV en HTML et CSS, projet libre, utilisation de frameworks autorisée, je decide le faire en React (vous le voyez actuelement)",
    color:{background: 'rgb(233, 30, 99)', color: '#fff'},
    techno:[{
        name:"React",
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    }]
},
]

