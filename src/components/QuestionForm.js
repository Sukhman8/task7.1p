import React, { useState } from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";

export default function QuestionForm() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = () => {
    alert(`Question Submitted!\nTitle: ${title}\nDetails: ${details}\nTags: ${tags}`);
  };

  return (
    <Segment>
      <Header as="h4">What do you want to ask or share</Header>
      <p style={{ color: "grey" }}>
        This section is designed based on the type of the post. For posting a <b>question</b>, fill the fields below.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Title"
          placeholder="Start your question with How, What, Why, etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          label="Describe your problem"
          placeholder="Describe your problem"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Form.Input
          label="Tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button type="submit" primary>
          Post
        </Button>
      </Form>
    </Segment>
  );
}
