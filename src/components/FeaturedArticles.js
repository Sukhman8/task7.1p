import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';

function makeItems(n, type = 'Article') {
  return Array.from({ length: n }).map((_, i) => ({
    title: `${type}'s Name ${i + 1}`,
    description: i === 0 ? 'e.g., React or Vue' : 'Short description example',
    image: `https://picsum.photos/seed/${type.toLowerCase()}${i}/300/200`,
    author: `Author ${i + 1}`,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1)
  }));
}

export default function FeaturedArticles() {
  const articles = makeItems(3, 'Article');

  return (
    <div className="section-row">
      <h2 className="section-title">Featured Articles</h2>
      <Card.Group itemsPerRow={3} stackable>
        {articles.map((a, idx) => <ArticleCard key={idx} {...a} />)}
      </Card.Group>
      <div style={{ textAlign: 'center', marginTop: 12 }}>
        <Button basic>See all articles</Button>
      </div>
    </div>
  );
}
