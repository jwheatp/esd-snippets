<?php

$action = $_GET["action"];

// action = 'list'
if($action == 'list') {
    $posts = getPosts();
    require("views/list-view.php");
}

else if($action == 'post') {
    $id = $_GET["id"];

    $post = getPostById($id);
    require("views/post-view.php");
}

else {
    // 404 page non trouvée
}


?>