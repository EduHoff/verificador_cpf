<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/plain; charset=UTF-8");

$cpf = $_POST["cpf"] ?? null;
$aux;
$result;

//PRIMEIRA ETAPA
if (preg_match('/^(\d)\1{10}$/', $cpf)) {
    $result = false;
}


//SEGUNDA ETAPA
for ($i = 0; $i < 9; $i++) {
    $digito = (int)$cpf[$i];
    $peso = 10 - $i;
    $aux += $digito * $peso;
}

$aux = ($aux * 10) % 11;

if($aux == $cpf[9]){
    $result = true;
}else{
    $result = false;
}



//TERCEIRA ETAPA
$aux = 0;
for ($i = 0; $i < 10; $i++) {
        $digito = (int)$cpf[$i];
        $peso = 11 - $i;
        $aux += $digito * $peso;
    }

$aux = ($aux * 10) % 11;

if($aux == $cpf[10]){
    $result = true;
}else{
    $result = false;
}

if($result){
    echo "CPF válido!";
}else{
    echo "CPF inválido!";
}
?>