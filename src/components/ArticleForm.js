import React, { useState } from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = () => {
    alert(`Article Submitted!\nTitle: ${title}\nAbstract: ${abstract}\nText: ${text}\nTags: ${tags}`);
  };

  return (
    <Segment>
      <Header as="h4">What do you want to ask or share</Header>
      <p style={{ color: "grey" }}>
        This section is designed based on the type of the post. For posting an <b>article</b>, fill the fields below.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Enter a descriptive title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Input
          label="Abstract"
          placeholder="Enter a 1-paragraph abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
        <Form.TextArea
          label="Article Text"
          placeholder="Enter article text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button type="submit" secondary>
          Post
        </Button>
      </Form>
    </Segment>
  );
}
