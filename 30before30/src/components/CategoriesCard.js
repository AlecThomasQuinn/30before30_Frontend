import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CategoriesCard () {
    const CardExampleImageCard = () => (
        <Card>
          <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Fitness</Card.Header>
            <Card.Description>
              Make your fitness 30 before 30 here.
            </Card.Description>
          </Card.Content>
        </Card>
      )
      
      export default CardExampleImageCard
}