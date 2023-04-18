import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "~/components/PostModelo";
import posts from "~/json/posts.json";
import "./Post.css";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "~/components/PaginaPadrao";
import styles from "./Post.module.css";
import PostCard from "~/components/PostCard";

export default function Post() {
  const parametros = useParams();

  const currentPost = posts.find((post) => post.id == parametros.id);

  if (!currentPost) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => a.id - b.id)
    .slice(0, 4);

  console.log(postsRecomendados);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={`/assets/posts/${currentPost.id}/capa.png`} titulo={currentPost.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>{currentPost.texto}</ReactMarkdown>
              </div>
              <h1 className={styles.tituloOutrosPosts}>Posts que você pode gostar:</h1>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => {
                  return (
                    <li key={post.id}>
                      <PostCard post={post} />
                    </li>
                  );
                })}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
