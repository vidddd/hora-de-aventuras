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

if ($_GET['personaje']) {
  $_SESSION['personaje'] = $_GET['personaje'];
}

if($_POST['nombre']) {
   $nombre = $_POST['nombre'];
   $premio = $_POST['premio'];
   $apellidos = $_POST['apellidos'];
   $email = $_POST['email'];
   $direccion = $_POST['direccion'];
   $fbid = $_POST['fbid'];
   $ciudad = $_POST['ciudad'];
   $cp = $_POST['cp'];
   $telefono = $_POST['telefono'];
   $mes = $_POST['mes'];
   $ano = $_POST['ano'];

   if($_SESSION['personaje']) $personaje = $_SESSION['personaje']; else $personaje = '';

   if ($db->existeEmail($email) || $db->existeFbid($fbid) ) {
       echo $twig->render('fin.html', array("mensaje" => 2, "personaje" => $personaje));
   }  else {
       $db->insertaParticipacion($premio, $nombre, $apellidos, $email, $direccion, $ciudad, $cp, $telefono, $mes, $ano, $fbid, $personaje);
       echo $twig->render('fin.html', array("mensaje" => 1, "personaje" => $personaje));
   }
} else {
  $jake = $db->hayGafasJake();
  $princesa = $db->hayGafasPrincesa();
  $libros = $db->hayPackLibros();
  //echo $jake; die;
  echo $twig->render('formulario.html', array("URL",URL, "jake" => $jake, "princesa" => $princesa, "libros" => $libros));
}
