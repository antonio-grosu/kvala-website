"use client";
import { useParams } from "next/navigation";
import GaleriePost from "@/app/components/Galerie_Page/GaleriePost";
import { useEffect, useState } from "react";

const elements = [
  {
    name: "Nume",
    id: 1,
    title: "Postare 1",
    text: "Text 1",
    likes: 0,
    image: "1.jpg",
  },
  {
    name: "Nume",
    id: 2,
    title: "Postare 2",
    text: "Text 2",
    likes: 0,
    image: "2.jpg",
  },
  {
    name: "Nume",
    id: 3,
    title: "Postare 3",
    text: "Text 3",
    likes: 0,
    image: "3.jpg",
  },
  {
    name: "Nume",
    id: 4,
    title: "Postare 4",
    text: "Text 4",
    likes: 0,
    image: "4.jpg",
  },
  {
    name: "Nume",
    id: 5,
    title: "Postare 5",
    text: "Text 5",
    likes: 0,
    image: "5.jpg",
  },
  {
    name: "Nume",
    id: 6,
    title: "Postare 6",
    text: "Text 6",
    likes: 0,
    image: "6.jpg",
  },
  {
    name: "Nume",
    id: 7,
    title: "Postare 7",
    text: "Text 7",
    likes: 0,
    image: "7.jpg",
  },
  {
    name: "Nume",
    id: 8,
    title: "Postare 8",
    text: "Text 8",
    likes: 0,
    image: "8.jpg",
  },
  {
    name: "Nume",
    id: 9,
    title: "Postare 9",
    text: "Text 9",
    likes: 0,
    image: "9.jpg",
  },
  {
    name: "Nume",
    id: 10,
    title: "Postare 10",
    text: "Text 10",
    likes: 0,
    image: "10.jpg",
  },
  {
    name: "Nume",
    id: 11,
    title: "Postare 11",
    text: "Text 11",
    likes: 0,
    image: "11.jpg",
  },
  {
    id: 12,
    name: "Nume",
    title: "Postare 12",
    text: "Text 12",
    likes: 0,
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
          />
        )}
      </div>
    </main>
  );
};

export default PostareGalerie;
