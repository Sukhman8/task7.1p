import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";

export default function PostPage() {
  const [postType, setPostType] = useState("question");

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Segment>
        <Header as="h3">New Post</Header>
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </Segment>

      {postType === "question" && <QuestionForm />}
      {postType === "article" && <ArticleForm />}
    </Container>
  );
}
