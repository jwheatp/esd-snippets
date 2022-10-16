<?php

class PostController extends Controller {
    function execute() {
        $id = $_GET["id"];
        $model = new PostModel();
        $post = $model->getPostById($id);
        require("views/post-view.php");
    }
}


?>