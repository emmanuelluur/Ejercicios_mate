<?php
namespace src\operaciones;

/**
 * @author: Emmanuel Lucio Urbina
 *
 */

class Funciones
{
    protected $random;

    public function AleatorioEntero($min, $max)
    {
        $this->random = rand($min, $max);
        return $this->random;
    }
    public function Operacion($operacion, $min, $max)
    {
        switch ($operacion) {
            case '1':
                # suma
                return array("primero" => $this->AleatorioEntero($min, $max), "segundo" => $this->AleatorioEntero($min, $max), "operador" => "suma");
                break;
            case '2':
                # suma
                return array("primero" => $this->AleatorioEntero($min, $max), "segundo" => $this->AleatorioEntero($min, $max), "operador" => "resta");
                break;
            case '3':
                # suma
                return array("primero" => $this->AleatorioEntero($min, $max), "segundo" => $this->AleatorioEntero($min, $max), "operador" => "multiplica");
                break;
            case '4':
                # suma
                return array("primero" => $this->AleatorioEntero($min, $max), "segundo" => $this->AleatorioEntero($min, $max), "operador" => "divide");
                break;
            default:
                # code...
                break;
        }
    }
    public function Ejercicio($tipo, $operacion, $min, $max)
    {
        switch ($tipo) {
            case '1':
                return $this->Operacion($operacion, $min, $max);
                break;
            case '2':
                //  decimales
                break;

            default:
                return "0";
                break;
        }
    }
}
