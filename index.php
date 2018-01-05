<?php
/*if($_SERVER["HTTPS"] != "on"){ header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
  }*/

session_start();
opcache_reset();
error_reporting(E_ALL);
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/config.php';
$loader = new Twig_Loader_Filesystem('templates/');
$twig = new Twig_Environment($loader, array());
require_once __DIR__ . '/inc/db.class.php';
$db = new Database();

if ($_GET['personaje'] != '') {
  $personaje = $_GET['personaje'];
} else $personaje = 'finn';

echo $twig->render('participa.html', array("URL",URL));
