$(document).ready(function () {
    CofigPage()
    HomePage()
    IndexPage()
    AboutUsPage()
    BenefitisPage()
    CommonQuestionsPage()
    ContatoUsPage()
    CreateAccountPage()
    TransferPage()
    CreateAccountPageTwo()
})

function CofigPage() {
    $("#home_page").show()
    $("#header_page").show()
    $("#aboutUs_page").hide()
    $("#benefits_page").hide()
    $("#itWorks_page").hide()
    $("#commonQuestions_page").hide()
    $("#contactUs_page").hide()
    $("#createAccount_page").hide()
}


function IndexPage() {
    $("#index_link").click(function () {
        $("#home_page").show()
        $("#header_page").show()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").hide()
    })
}

function HomePage() {
    $("#home_link").click(function () {
        $("#home_page").show()
        $("#header_page").show()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").hide()
    })
}

function AboutUsPage() {
    $("#aboutUs_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").show()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").hide()
    })
}

function BenefitisPage() {
    $("#benefits_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").show()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").hide()
    })
}


function CommonQuestionsPage() {
    $("#commonQuestions_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").show()
        $("#contactUs_page").hide()
        $("#createAccount_page").hide()
    })
}

function ContatoUsPage() {
    $("#contactUs_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").show()
        $("#createAccount_page").hide()
    })
}

function CreateAccountPage() {
    $("#createAccount_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").show()
    })
}

function CreateAccountPageTwo() {
    $("#createAccount_linkTwo").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").show()
    })
}

function TransferPage() {
    $("#transfer_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").hide()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
        $("#createAccount_page").show()
    })
}


