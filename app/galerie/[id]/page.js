"use client";
import { useParams } from "next/navigation";
import GaleriePost from "@/app/components/Galerie_Page/GaleriePost";
import { useEffect, useState } from "react";

const elements = [
  {
    id: 1,
    title: "Postare 1",
    text: "Text 1",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 2,
    title: "Postare 2",
    text: "Text 2",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 3,
    title: "Postare 3",
    text: "Text 3",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 4,
    title: "Postare 4",
    text: "Text 4",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 5,
    title: "Postare 5",
    text: "Text 5",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 6,
    title: "Postare 6",
    text: "Text 6",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 7,
    title: "Postare 7",
    text: "Text 7",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 8,
    title: "Postare 8",
    text: "Text 8",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 9,
    title: "Postare 9",
    text: "Text 9",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 10,
    title: "Postare 10",
    text: "Text 10",
    likes: 0,
    image: "first-circle.png",
  },
  {
    id: 11,
    title: "Postare 11",
    text: "Text 11",
    likes: 0,
    image: "first-circle.png",
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
  console.log(post);
  return (
    <main className="md:py-44 px-8 py-24 min-h-screen flex items-center">
      {post && (
        <GaleriePost title={post.title} text={post.text} image={post.image} />
      )}
    </main>
  );
};

export default PostareGalerie;
