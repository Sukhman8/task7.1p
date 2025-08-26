import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function ArticleCard({ title, description, image, author, rating }) {
  return (
    <Card>
      <Image src={image} wrapped ui={false} style={{ height: 140, objectFit: 'cover' }} />
      <Card.Content>
        <Card.Header style={{ fontSize: '14px' }}>{title}</Card.Header>
        <Card.Description style={{ fontSize: '12px', marginTop: 8 }}>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ fontSize: 12 }}>
        <Icon name="star" />
        <strong>{rating}</strong> &nbsp;|&nbsp; {author}
      </Card.Content>
    </Card>
  );
}
