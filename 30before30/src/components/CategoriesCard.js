import React from 'react';
import { Card } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

export default function CategoriesCard () {

    return (

    <div>
        <Card className="travel"
    href='#card-example-link-card'
    header='Travel'
        />

        <Card className="health-and-fitness-card"
            href='#card-example-link-card'
            header='Health and Fitness'
        />

        <Card className="work-card"
            href='#card-example-link-card'
            header='Work'
        />

        <Card className="Learning-card"
            href='#card-example-link-card'
            header='Learning'
        />

        <Card className="love-card"
            href='#card-example-link-card'
            header='Love'
        />

        <Card className="Unspecified-card"
            href='#card-example-link-card'
            header='Unspecified'
        />
    </div>

    )
}