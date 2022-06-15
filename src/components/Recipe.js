import React from "react";
import style from "../recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} className={style.image} alt="" />
    </div>
  );
}
