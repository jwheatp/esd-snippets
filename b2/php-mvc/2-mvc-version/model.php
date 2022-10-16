<?php
  /**
   * Get all the posts from the 'posts' table
   */
  function getPosts() {
    try {
        $db = new PDO("mysql:host=localhost;dbname=blog;port=3306", "root", "root");
      } catch (Exception $e) {
        // we should handle error here, but we keep it simple and just echo it
        echo $e->getMessage();
      }
    
      $query = 'SELECT id, title, content FROM posts';
    
      $q = $db->prepare($query);
    
      $q->execute();
    
      $posts = $q->fetchAll();

      return $posts;
  }

  /**
   * Get one post by id
   */
  function getPostById($id) {
    try {
        $db = new PDO("mysql:host=localhost;dbname=blog;port=3306", "root", "root");
      } catch (Exception $e) {
        // we should handle error here, but we keep it simple and just echo it
        echo $e->getMessage();
      }
    
      $query = 'SELECT id, title, content FROM posts WHERE id = :id';
    
      $q = $db->prepare($query);
      
      $q->bindParam(":id", $id);

      $q->execute();
    
      $post = $q->fetch();

      return $post;
  }

?>