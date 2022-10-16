<?php
  /**
   * Get all the posts from the 'posts' table
   * and display it
   */

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
?>

<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">

  <!-- utile pour le responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- titre de la page -->
  <title>Mon blog</title>

  <!-- lien vers le fichier de style CSS -->
  <link rel="stylesheet" href="style/pico.min.css">
</head>
<body>
  <main class="container">
    <!-- le contenu de votre site -->
    <h1>Mon blog</h1>

    <?php
      foreach($posts as $post) {
        ?>
        <div>
          <h2><?= $post["title"] ?></h2>
          <p><?= $post["content"] ?></p>
        </div>
        <?php
      }
    ?>
  </main>
</body>
</html>
