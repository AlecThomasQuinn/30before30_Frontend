import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function CategoriesCard () {

    return (

        <Card>
          <Image src='30before30/src/img/fitness.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Fitness</Card.Header>
            <Card.Description>
              Make your fitness 30 before 30 here.
            </Card.Description>
          </Card.Content>
        </Card>

    )
}