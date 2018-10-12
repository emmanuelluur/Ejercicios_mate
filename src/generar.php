<?php
require_once "operaciones.php"; //  Incluimos archivo con las funciones principales
use  src\operaciones\Funciones;
//  recibe datos 

if (isset($_POST['generar_ope']))
{
    $funciones = new Funciones;

    $operacion = $_POST['operacion'];
    $tipo = $_POST['tipo'];
    $inicio = $_POST['inicio'];
    $fin = $_POST['fin'];
    echo json_encode($funciones->Ejercicio($tipo, $operacion, $inicio, $fin));
}