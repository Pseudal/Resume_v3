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

    emailjs.send("service_3yrj1qi","template_j8hubtp", param, "D3o9R8QvHXS6zC6RW")
    .then(function() {
        SetSended(true);
        Swal.fire({
            icon: 'success',
            title: 'Success',
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            background: '#a5dc86',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })
    }, function(error) {
        button.current.setAttribute('disabled', false);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            background: '#f27474',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })
       console.log('FAILED...', error);
    });
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
        <div className="container mx-auto pt-6">
          <div className="lg:flex">
            <div
              className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none"
              data-aos-delay="500"
              data-aos-offset="500"
              data-aos="fade-left"
            >
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                  Contactez moi!
                </h1>
                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                  Vous avez une question à me poser ? Vous êtes intéressé par un
                  partenariat avec moi ? Vous avez des suggestions ou vous
                  voulez simplement dire Bonjour ? N&apos;hésitez pas à me contacter
                  !<br></br>Je suis actuellement à la recherche d&apos;une
                  alternance, alors n&apos;hésitez pas à me faire part de toute
                  opportunité ou proposition.
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
            <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
              {!Sended ? (
                <div
                  ref={ContactDiv}
                  className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="300"
                >
                  <div>
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                      Message direct
                    </p>
                    <form ref={form} onSubmit={sendEmail} action="">
                      <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                          <label className="text-base font-semibold leading-none text-gray-800">
                            Nom / Prenom*
                          </label>
                          <input
                            onChange={(event) => SetName(event.target.value)}
                            value={Name}
                            name="name"
                            required
                            tabIndex={0}
                            arial-label="Please input name"
                            type="name"
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                            placeholder="Please input  name"
                          />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                          <label className="text-base font-semibold leading-none text-gray-800">
                            Adresse Email*
                          </label>
                          <input
                            onChange={(event) => SetEmail(event.target.value)}
                            value={Email}
                            name="email"
                            required
                            tabIndex={0}
                            arial-label="Please input email address"
                            type="email"
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                            placeholder="Please input email address"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                          <label
                            required
                            className="text-base font-semibold leading-none text-gray-800"
                          >
                            Sujet*
                          </label>
                          <input
                            onChange={(event) => SetSubject(event.target.value)}
                            value={Subject}
                            name="subject"
                            tabIndex={0}
                            role="input"
                            arial-label="Please input company name"
                            type="text"
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                            placeholder="Please input company name"
                          />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                          <label className="text-base font-semibold leading-none text-gray-800">
                            Téléphone
                          </label>
                          <input
                            onChange={(event) => SetTel(event.target.value)}
                            value={Tel}
                            name="tel"
                            tabIndex={0}
                            arial-label="Please input country name"
                            type="tel"
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                            placeholder="Please input country name"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="w-full flex flex-col mt-8">
                          <label className="text-base font-semibold leading-none text-gray-800">
                            Message*
                          </label>
                          <textarea
                            onChange={(event) => SetMessage(event.target.value)}
                            value={Message}
                            name="message"
                            required
                            tabIndex={0}
                            aria-label="leave a message"
                            role="textbox"
                            type="name"
                            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                          />
                        </div>
                      </div>
                      {/* <div className="flex items-center mt-2">
                                <input onChange={(event) => SetCopy(event.target.checked)} value={Copy} name='copy' id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black ">Je souhaite une copie</label>
                            </div> */}
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        En cliquant sur envoyer, veuillez noter qu&apos;aucune donnée
                        n&apos;est stockée ou traitée.
                      </p>
                      <div className="flex items-center justify-center w-full">
                        <button
                          ref={button}
                          type="submit"
                          className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div
                  ref={ContactDiv}
                  className=" flex items-center absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8"
                  style={dimensions}
                >
                  <div class="bg-white p-6  md:mx-auto">
                    <svg
                      viewBox="0 0 24 24"
                      class="text-green-600 w-16 h-16 mx-auto my-3"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <div class="text-center">
                      <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Succès!
                      </h3>
                      <p class="text-gray-600 my-2">
                        Votre message à bien été envoyé, j&apos;y répondrai le plus
                        rapidement possible!
                      </p>
                      <p>Bonne journée et merci beaucoup!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
