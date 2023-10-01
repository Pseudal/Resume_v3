import React from "react";
import Image from 'next/image'; // Use Next.js Image component


const Home = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-[#d12020] via-[#ea0048] via-[#f90078] via-[#f900af] to-[#e112eb]">
            <div className="mx-auto h-full flex flex-col">
                <div className="basis-1/3 grid content-end">
                    <h1 className="text-center text-5xl md:text-8xl text-white font-bold  ">
                        Garnier Adrien
                    </h1>
                </div>
                <div className="basis-1/3 grid content-start pt-5">
                    <h1 className="text-center text-3xl text-white">
                        Etudiant chez Epitech
                    </h1>
                </div>
                <div className="basis-1/3 content-start pt-5 ">
                    <img id="img" style={{width:"120px"}} className="absolute" src="https://cdn-icons-png.flaticon.com/512/318/318205.png"></img>
                </div>

            </div>
        </div>
    );
};

export default Home;
