"use client";
import { useParams } from "next/navigation";
import GaleriePost from "@/app/components/Galerie_Page/GaleriePost";
import { useEffect, useState } from "react";

const elements = [
  {
    name: "Delicii la rotisor",
    title: "Delicii la rotisor",

    id: 1,
    text: "Aromele intense ale cărnii preparate la rotisor, frăgezime și savoare în fiecare bucățică.",
    image: "1.jpg",
    link: "https://www.instagram.com/kvala.ro/p/DBv3KQEigIo/",
  },
  {
    name: "Experiență autentică",
    title: "Experiență autentică",
    link: "https://www.instagram.com/kvala.ro/p/DBv3Pi4CZdD/",
    id: 2,
    text: "Un preparat servit cu garnituri proaspete, perfect pentru o masă savuroasă.",
    image: "2.jpg",
  },
  {
    name: "Arome autentice pe farfurie",
    title: "Arome autentice pe farfurie",
    id: 3,
    link: "https://www.instagram.com/kvala.ro/p/DBv3TTaCLXw/",
    text: "O combinație echilibrată de ingrediente proaspete și carne suculentă, ideală pentru o masă cu adevărat savuroasă.",
    image: "3.jpg",
  },
  {
    name: "Fructe de mare și prospețime",
    title: "Fructe de mare și prospețime",
    link: "https://www.instagram.com/kvala.ro/p/DBv3X4IiroM/",
    id: 4,
    text: "O combinație rafinată de caracatiță fragedă și legume proaspete, pentru o explozie de arome.",
    image: "4.jpg",
  },
  {
    name: "Savoare marină",
    title: "Savoare marină",
    link: "https://www.instagram.com/kvala.ro/p/DBv3ce_iky5/",
    id: 5,
    text: "Texturi delicate și arome inspirate din mare, o rețetă perfect echilibrată.",
    image: "5.jpg",
  },
  {
    name: "Răsfăț de început",
    title: "Răsfăț de început",
    link: "https://www.instagram.com/kvala.ro/p/DBv3jo1COlW/",
    id: 6,
    text: "Platou de aperitive ideale pentru a deschide apetitul și a încânta simțurile.",
    image: "6.jpg",
  },
  {
    name: "Crocanți și delicioși",
    title: "Crocanți și delicioși",
    link: "https://www.instagram.com/kvala.ro/p/DBv3n66CEWj/",
    id: 7,
    text: "Creveți cu crustă aurie, serviți calzi, un răsfăț crocant la fiecare mușcătură.",
    image: "7.jpg",
  },
  {
    name: "Eleganță pe farfurie",
    title: "Eleganță pe farfurie",
    link: "https://www.instagram.com/kvala.ro/p/DBv3skqCyB4/",
    id: 8,
    text: "Un aranjament de creveți proaspeți pe o farfurie lungă, perfect pentru o experiență rafinată a fructelor de mare.",
    image: "8.jpg",
  },
  {
    name: "Arome mediteraneene",
    title: "Arome mediteraneene",
    id: 9,
    link: "https://www.instagram.com/kvala.ro/p/DBv3yaQCPk2/",
    text: "Paste proaspete cu fructe de mare și sos aromat, un preparat cu influențe mediteraneene autentice.",
    image: "9.jpg",
  },
  {
    name: "Bucurie marină",
    id: 10,
    link: "https://www.instagram.com/kvala.ro/p/DBv33aiCEL4/",
    title: "Bucurie marină",
    text: "O combinație bogată de fructe de mare, pentru iubitorii gusturilor proaspete și aromate.",
    image: "10.jpg",
  },
  {
    name: "Dulce tentație",
    id: 11,
    title: "Dulce tentație",
    link: "https://www.instagram.com/kvala.ro/p/DBv37sdCL7D/",
    text: "O clătită pufoasă, servită cu topping-uri dulci, perfectă pentru o încheiere de masă desăvârșită.",
    image: "11.jpg",
  },
  {
    id: 12,
    name: "Clasic și gustos",
    title: "Clasic și gustos",
    link: "https://www.instagram.com/kvala.ro/p/DBv4AK7Cd2L/",
    text: "Pui crocant alături de cartofi prăjiți aurii și sosuri de casă – o alegere ideală pentru toți.",
    image: "12.jpg",
  },
];

const PostareGalerie = () => {
  // aflam care este postarea
  const [post, setPost] = useState();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const newArr = elements.filter((current) => current.id == id);
    if (newArr.length > 0) setPost(newArr[0]);
  }, []);
  {
  }
  console.log(post);
  return (
    <main className="pt-12 flex flex-col items-center">
      <div
        className="w-full h-44 bg-gray-300 flex items-center justify-center
      "
        style={{
          backgroundImage: `url(/bg-all.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <h1 className="text-2xl font-semibold text-white">
          {" "}
          Galerie/{post ? post.name : ""}
        </h1>
      </div>
      <div className="px-4 w-full">
        {post && (
          <GaleriePost
            name={post.name}
            title={post.title}
            text={post.text}
            image={post.image}
            link={post.link}
          />
        )}
      </div>
    </main>
  );
};

export default PostareGalerie;
