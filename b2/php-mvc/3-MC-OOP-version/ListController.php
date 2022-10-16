<?php

class ListController extends Controller {
    function execute() {
        $model = new PostModel();
        $posts = $model->getPosts();
        require("views/list-view.php");
    }
}


?>