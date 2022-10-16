<?php

abstract class Model {
  function prepareQuery($query) {
    try {
      $db = new PDO("mysql:host=localhost;dbname=blog;port=3306", "root", "root");
    } catch (Exception $e) {
      // we should handle error here, but we keep it simple and just echo it
      echo $e->getMessage();
    }

    $q = $db->prepare($query);

    return $q;
  }
}



?>