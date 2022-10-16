<?php

class ControllerFactory {
    public static function createController(string $action) {
        $controller = ucfirst($action) . 'Controller';
    
        return new $controller();
      }
}

?>