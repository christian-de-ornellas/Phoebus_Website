<?php require_once('inc/header.php');?>
<!-- # header_page # -->
<aside id="header_page" class="detail-phoe">

    <div class="container">
        <div class="row">

            <div class="col-12 col-md-7">
                <div class="jumbotron">
                    <h1 class="display-4 animated flipInX" id="title"></h1>
                    <p class="lead">Transfira dinheiro com <b>segurança</b> e de qualquer lugar
                        do mundo, aqui você tem total <b>liberdade</b> para transferir de moedas diferentes.</p>
                    <form class="form-row form-cotacao" onchange="SimulationCotation()">
                        <div class="form-group col-12 col-md-2">
                            <label for="moeda_inicial">Moeda</label>
                            <select name="" id="coin" class="form-control">
                                <option value="1.00">CHF</option>
                                <option value="2.09">EUR</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-md-4">
                            <label for="moeda_inicial">Você envia</label>
                            <input type="text" autofocus class="form-control" id="coinStart" placeholder="Ex: 20.00">
                        </div>
                        <div class="form-group col-12 col-md-2">
                            <label for="moeda_inicial">Moeda</label>
                            <select name="" id="coinn" class="form-control">
                                <option value="">USD</option>
                                <option value="">EUR</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-md-4">
                            <label for="moeda_inicial">O destinatário recebe</label>
                            <input type="text" class="form-control" readonly="true" id="coinConvert">
                        </div>
                    </form>
                    <a href="" class="btn btn-primary btn-lg">COMEÇAR AGORA</a>
                </div>
            </div>

            <div class="col-12 col-md-5">
                <figure id="animation-initial"><img src="node_modules/img/world-send.png" alt="Secury"></figure>
            </div>

        </div>

        <!-- Os três pilares -->
        <div class="row" id="cards">
            <div class="col-md-4 text-center">
                <div class="card card-phoe item-1">
                    <div class="card-body">
                        <i class="far fa-grin-stars fa-3x"></i>
                        <h3>Facilidade</h3>
                        <p>Com poucos cliques você consegue realizar uma tranferência, e caso precise estamos a
                            disposição para te ajudar.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="card card-phoe item-2">
                    <div class="card-body">
                        <i class="fas fa-globe fa-3x"></i>
                        <h3>Liberdade</h3>
                        <p>Você tem total liberdade para enviar de qualquer lugar no mundo em diferentes moedas.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="card card-phoe item-3">
                    <div class="card-body">
                        <i class="fab fa-expeditedssl fa-3x"></i>
                        <h3>Segurança</h3>
                        <p>Os seus dados são totalmente protegidos, pois temos temos toda a estrutura para
                            assegurar as suas informações.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</aside>

<!-- # HomePage # -->
<section id="home_page">

    <div class="container">
        <div class="row interval page-title">

            <div class="col-md-12">
                <h2>Aproveite as vantagens a seu favor!</h2>
            </div>
        </div>

        <div class="row interval" id="easy">

            <div class="col-md-8 box-img">
                <figure><img class="img-fluid" width="100%" src="node_modules/img/facilidade.jpg"
                        alt="Facilidade Digital"></figure>
            </div>

            <div class="col-md-4">
                <h2>Facilidade</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas recusandae
                    dolores sed a necessitatibus quaerat quidem, odio unde, ipsam voluptate animi repellat
                    cumque sapiente tenetur at esse laboriosam. Quibusdam, magnam?</p>
            </div>

        </div>

        <div class="row interval" id="liberty">
            <div class="col-md-4">
                <h2>Liberdade</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas recusandae
                    dolores sed a necessitatibus quaerat quidem, odio unde, ipsam voluptate animi repellat
                    cumque sapiente tenetur at esse laboriosam. Quibusdam, magnam?</p>
            </div>

            <div class="col-md-8 box-img">
                <figure><img class="img-fluid" width="100%" src="node_modules/img/liberdade.jpg"
                        alt="Liberdade Digital"></figure>
            </div>

        </div>

        <div class="row interval" id="easy">

            <div class="col-md-8 box-img">
                <figure><img class="img-fluid" width="100%" src="node_modules/img/seguranca.jpg"
                        alt="Segurança Digital"></figure>
            </div>

            <div class="col-md-4">
                <h2>Segurança</h2>000
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas recusandae
                    dolores sed a necessitatibus quaerat quidem, odio unde, ipsam voluptate animi repellat
                    cumque sapiente tenetur at esse laboriosam. Quibusdam, magnam?</p>
            </div>

        </div>

        <div class="row interval page-title">

            <div class="col-md-12">
                <h2>Em poucos cliques você transfere a quantia que deseja!</h2>
            </div>

        </div>

        <div class="row">
            <div class="col-md-12">
                <h3>ss</h3>
            </div>
        </div>

    </div>
</section>

<main id="main_content">

    <!-- # About Us # -->
    <section id="aboutUs_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Sobre</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- # Benefits # -->
    <section id="benefits_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Vantagens</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- # Como Funciona # -->
    <section id="itWorks_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Como funciona</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- # FAQ # -->
    <section id="commonQuestions_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>FAQ</h1>
                </div>
            </div>
        </div>
    </section>

    <!-- # Contato # -->
    <section id="contactUs_page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Contato</h1>
                </div>
            </div>
        </div>
    </section>

</main>
<?php require_once('inc/footer.php');?>