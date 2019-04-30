$(document).ready(function () {
    NewAccountTab()
    SelectDocumentPersonal()
})

const NewAccountTab = () => {

    $("#dataPersonal").show()
    $("#dataFinance").hide()

    $("#next-step").click(function () {

        let name = $("#name").val()
        let age = $("#age").val()
        let address = $("#address").val()
        let email = $("#email").val()
        let cellphone = $("#cellphone").val()
        let passport = $("#passport").val()

        //Validation in dataPersonal
        if (name == "") {

            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Você precisa digitar o seu nome!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)

        } else if (age == "") {

            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Informe a sua data que você nasceu!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)

        } else if (address == "") {
            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Informe o seu endereço!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)
        } else if (email == "") {
            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Informe o seu melhor e-mail para contato!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)
        } else if (cellphone == "") {
            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Informe o seu número de celular para contato!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)
        } else if (passport == "") {
            $("#resp_msg").html(`

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Informe o número do seu passaporte!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            `)
        }
        else {
            $("#dataPersonal").hide()
            $("#dataFinance").show()
        }
    })

    $("#back-step").click(function () {

        $("#dataPersonal").show()
        $("#dataFinance").hide()

    })
}

const SelectDocumentPersonal = () => {

    $("#document").html("<span style='color: red'>Selecione</span>")

    $("#type-personal-pj").click(function () {
        $("#document").text("CNPJ")
    })

    $("#type-personal-pf").click(function () {
        $("#document").text("CPF")
    })
}

