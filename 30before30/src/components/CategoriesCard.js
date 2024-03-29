import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import BurgerMenu from "./SettingsMenu";

export default function CategoriesCard() {

  return (
    <>

      
      <div className="booger-menu">
        <BurgerMenu />
        </div>
      <div className="categories-title">
      <h1>Categories</h1>
      </div>
      <div className="category-list">
        <Card
          className="card"
          id="travel"
          href="/travel"
          header="Travel"
        />

        <Card
          className="card"
          id="health-and-fitness"
          href="/health-and-fitness"
          header="Health and Fitness"
        />

        <Card
          className="card"
          id="work"
          href="/work"
          header="Work"
        />

        <Card
          className="card"
          id="learning"
          href="/learning"
          header="Learning"
        />

        <Card
          className="card"
          id="love"
          href="/love"
          header="Love"
        />
      </div>
    </>
  );
}
