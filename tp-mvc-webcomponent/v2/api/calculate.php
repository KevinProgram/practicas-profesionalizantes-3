<?php

class WCCCalculatorModel
{
    public function __construct() {}

    public function calculate($expression)
    {
        return eval('return '.$expression.';');
    }
}

header('Content-Type: application/json');
$json_body = file_get_contents('php://input');
$_data = json_decode($json_body);

$instance = new WCCCalculatorModel();
$result = $instance->calculate($_data);

echo json_encode($result);

?>
