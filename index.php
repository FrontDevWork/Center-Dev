<?php include "header.php"?>

<section class="banner">
    <div class="container-fluid">
        <div class="row">

            <div class="principal">
                <h1 class="titulo-banner">
                    Criação de sites e plataformas e-commerce
                </h1>

                <div class="buttons">
                    <button class="btn btn-conhecer  radius"> Mais Informações</button>

                </div>
            </div>
        </div>
    </div>
    </div>


</section>

<div class="container-fluid">

    <div class="card-grupo">
        <div class="row">

            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">
                        <img src="img/idea.png">
                    </div>
                    <div class="card-content">

                        <h5 class="card-title">Identidade visual</h5>
                    </div>

                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">
                        <img src="img/multimedia.png">
                    </div>
                    <div class="card-content">
                        <h5 class="card-title">Marketing digital</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">

                        <img src="img/code.png">
                    </div>
                    <div class="card-content">

                        <h5 class="card-title">Desenvolvimento sob medida</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">

                        <img src="img/computer.png">
                    </div>
                    <div class="card-content">

                        <h5 class="card-title">Design responsivo</h5>
                    </div>

                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">

                        <img src="img/growth.png">
                    </div>
                    <div class="card-content">

                        <h5 class="card-title">Relatorios online</h5>
                    </div>

                </div>
            </div>
            <div class="col-sm-4">
                <div class="card-servico">
                    <div class="card-img">

                        <img src="img/settings.png">
                    </div>
                    <div class="card-content">

                        <h5 class="card-title">Painel administrativo</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
<section class="box-contato">

    <div class="container-fluid">

        <div class="contato">
            <h2 class="ajuda-contato">Fale com a gente </h2>
            <h4>Seu contato é muito importante</h4>
        </div>
        <div class="form-row">
            <div class="row">
                <div class="col-sm-6">

                    <form id="formContato">

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="input-container">
                                        <input type="text" class="input" name="name" id="name" pattern=".+" required>
                                        <label for="name" class="label"> Nome</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="input-container">
                                        <input type="email" class="input" name="email" id="email" pattern=".+" required>
                                        <label for="email" class="label"> E-mail</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="input-container">
                                        <input type="text" class="input" name="phone" id="phone" pattern=".+" required>
                                        <label for="phone" class="label"> Telefone</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <div class="input-container">
                                        <input type="text" class="input" name="about" id="about" pattern=".+" required>
                                        <label for="about" class="label"> Assunto</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <div class="textarea-container">
                                        <label for=""> Como nos conheceu</label>
                                        <textarea rows="5"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button class="btn btn-conhecer" id="send">Enviar</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="col-sm-6">
                    <div id="data-contato">

                        <div class="row">
                            <div class="col-sm-12">
                                <h4><i class="fas fa-phone"></i> Telefones</h4>
                                <p>Atendimento: (11) 97797-3346</p>
                                <p>WhatsApp: +55 (11) 97797-3346</p>
                                <p></p>
                            </div>
                            <div class="col-sm-12">
                                <h4><i class="fas fa-clock"></i> Horário de atendimento</h4>
                                <p>De segunda à sexta-feira</p>
                                <p>Das 9h às 18h </p>
                            </div>
                            <div class="col-sm-12">
                                <h4><i class="fas fa-map-marker-alt"></i> Endereço</h4>
                                <p>Rua Sestílio Melani, 620</p>
                                <p>São Paulo, São Paulo | CEP 08225-485 </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</section>


<?php include "footer.php"?>