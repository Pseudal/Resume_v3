"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef(null);
  const ContactDiv = useRef(null);

  const [dimensions, setDimensions] = useState({ height: "0px", width: "0px" });
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Subject, SetSubject] = useState("");
  const [Tel, SetTel] = useState("");
  const [Message, SetMessage] = useState("");
  const [Sended, SetSended] = useState(false);
  // const [Copy, SetCopy] = useState(false);

  let button = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    button.current.setAttribute("disabled", true);
    let param = {
      name: Name,
      email: Email,
      subject: Subject,
      tel: Tel,
      message: Message,
    };

    emailjs
      .send("service_3yrj1qi", "template_j8hubtp", param, "D3o9R8QvHXS6zC6RW")
      .then(
        function () {
          SetSended(true);
          Swal.fire({
            icon: "success",
            title: "Success",
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            background: "#a5dc86",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        },
        function (error) {
          button.current.setAttribute("disabled", false);
          Swal.fire({
            icon: "error",
            title: "Error",
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            background: "#f27474",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (ContactDiv.current) {
      const { height, width } = ContactDiv.current.getBoundingClientRect();
      setDimensions({ height: `${height}px`, width: `${width}px` });
    }
  }, []);
  return (
    <div className="h-screen bg-gradient-to-r from-[#7F00FF] to-[#e100ff] flex items-center ">
      <div className="container px-6 py-12 mx-auto ">
        
          <div className="lg:flex">
            <div
              className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16  xl:rounded-tr-none"

            >
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                  Contactez moi!
                </h1>
                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                  Vous avez une question à me poser ? Vous êtes intéressé par un
                  partenariat avec moi ? Vous avez des suggestions ou vous
                  voulez simplement dire Bonjour ? N&apos;hésitez pas à me
                  contacter !<br></br>Je suis actuellement à la recherche
                  d&apos;une alternance, alors n&apos;hésitez pas à me faire
                  part de toute opportunité ou proposition.
                </p>
                <div className="flex pb-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-phone-call"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">(+33)0667477218</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">Adrien.g@gmx.fr</p>
                </div>
                <p className="text-lg text-white pt-10 tracking-wide">Paris</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
