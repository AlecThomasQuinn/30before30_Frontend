import React from 'react';
import { Card } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export default function CategoriesCard () {

    return (
        
    <div className="category-list">
        <Card className="card" id="travel"
            href='#card-example-link-card'
            header='Travel'
        />

        <Card className="card" id="health-and-fitness"
            href='#card-example-link-card'
            header='Health and Fitness'
        />

        <Card className="card" id="work"
            href='#card-example-link-card'
            header='Work'
        />
        
        <Card className="card" id="learning"
            href='#card-example-link-card'
            header='Learning'
        />

        <Card className="card" id="love"
            href='#card-example-link-card'
            header='Love'
        />

        <Card className="card" id="unspecified"
            href='#card-example-link-card'
            header='Unspecified'
        />
    </div>

    )
}