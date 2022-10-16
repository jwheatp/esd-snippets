<?php

class PostModel extends Model {
  /**
   * Get all the posts from the 'posts' table
   */
  function getPosts() {
    $q = $this->prepareQuery('SELECT id, title, content FROM posts');

    $q->execute();

    $posts = $q->fetchAll();

    return $posts;
  }

  /**
   * Get one post by id
   */
  function getPostById($id) {
      $q = $this->prepareQuery('SELECT id, title, content FROM posts WHERE id = :id');
      
      $q->bindParam(":id", $id);

      $q->execute();
    
      $post = $q->fetch();

      return $post;
  }
}

?>