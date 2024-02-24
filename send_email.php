<?php

$nome = $_POST['nomeCliente'];
$email = $_POST['emailCliente'];
$telefone = $_POST['telefoneCliente'];
$assunto = $_POST['listaAssunto'];
$mensagem = $_POST['mensagem'];

// Destinatário do email
$para = 'rafaelfleury55@gmail.com';

// Assunto do email
$assunto_email = 'Novo Formulário de Contato';

// Corpo do email
$corpo_email = "Nome: $nome\n";
$corpo_email .= "Email: $email\n";
$corpo_email .= "Telefone: $telefone\n";
$corpo_email .= "Assunto: $assunto\n";
$corpo_email .= "Mensagem: $mensagem\n";

// Cabeçalhos do email
$cabecalhos = "From: $nome <$email>";

// Envia o email
if (mail($para, $assunto_email, $corpo_email, $cabecalhos)) {
    http_response_code(200);
} else {
    http_response_code(500);
}

?>