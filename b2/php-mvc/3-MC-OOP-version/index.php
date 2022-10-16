<?php

require("autoload.php");

require_once("ListController.php");
require_once("PostController.php");
require_once("Controller.php");
require_once("ControllerFactory.php");
require_once("Model.php");

$action = $_GET["action"];

$controller = ControllerFactory::createController($action);
$controller->execute();

?>

