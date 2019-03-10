$(document).ready(function () {
    CofigPage()
    HomePage()
    AboutUsPage()
    BenefitisPage()
    ItWorksPage()
    CommonQuestionsPage()
    ContatoUsPage()
})

function CofigPage() {
    $("#home_page").show()
    $("#header_page").show()
    $("#aboutUs_page").hide()
    $("#benefits_page").hide()
    $("#itWorks_page").hide()
    $("#commonQuestions_page").hide()
    $("#contactUs_page").hide()
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
    })
}

function ItWorksPage() {
    $("#itWorks_link").click(function () {
        $("#home_page").hide()
        $("#header_page").hide()
        $("#aboutUs_page").hide()
        $("#benefits_page").hide()
        $("#itWorks_page").show()
        $("#commonQuestions_page").hide()
        $("#contactUs_page").hide()
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
    })
}