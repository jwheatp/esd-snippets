<?php require("header.php") ?>

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

<?php require("footer.php") ?>
