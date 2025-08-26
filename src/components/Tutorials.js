import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';

function makeItems(n, type = 'Tutorial') {
  return Array.from({ length: n }).map((_, i) => ({
    title: `${type}'s Name ${i + 1}`,
    description: i === 0 ? 'e.g., JS6' : 'Short tutorial description',
    image: `https://picsum.photos/seed/${type.toLowerCase()}${i}/300/200`,
    author: `user${i + 1}`,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1)
  }));
}

export default function Tutorials() {
  const tutorials = makeItems(3, 'Tutorial');
  return (
    <div className="section-row">
      <h2 className="section-title">Featured Tutorials</h2>
      <Card.Group itemsPerRow={3} stackable>
        {tutorials.map((t, idx) => <ArticleCard key={idx} {...t} />)}
      </Card.Group>
      <div style={{ textAlign: 'center', marginTop: 12 }}>
        <Button basic>See all tutorials</Button>
      </div>
    </div>
  );
}
