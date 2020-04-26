<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>

</body>

</html>


<?php 
// Passando os dados obtidos pelo formulário para as variáveis abaixo
$nameRemetente     = $_POST['name'];
$emailRemetente    = $_POST['email'];
$phone          = $_POST['phone'];
$about   = $_POST['about'];
$content   = $_POST['content'];

$emaildestinatario = 'thales@centerdev.com.br'; // Digite seu e-mail aqui, lembrando que o e-mail deve estar em seu servidor web
$assunto          = 'MENSAGEM WEBSITE';
/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '
<font face="Arial">
FORMULARIO PREENCHIDO NO SITE WWW.CENTERDEV.COM.BR <br><br>
<b>Nome:</b> '.$nameRemetente.' <br><br>
<b>Telefone:</b> '.$phone.' <br><br>
<b>E-Mail:</b> '.$emailRemetente.' <br><br>
<b>Assunto:</b> '.$about.' <br><br>
<br>
<b>Mensagem:</b> '.$content.' <br><br>
</font>
';


// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: $emailRemetente\r\n"; // remetente
$headers .= "Return-Path:$emailRemetente\r\n"; //E-mail do remetente
$envio = mail($emaildestinatario, $about, $mensagemHTML, $headers, "-r". "thales@centerdev.com.br");
if($envio)
echo "<script type='text/javascript'>window.alert('".$nome."Sua mensagem foi enviada com sucesso!');</script>";
echo '<meta HTTP-EQUIV="Refresh" CONTENT="1; URL=index.php">';
exit;// Página que será redirecionada
?>