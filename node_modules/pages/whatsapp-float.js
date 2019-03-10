$(document).ready(function (){
    whatsappHover()
})

function whatsappHover(){
    $(".whatsapp-message").hide()

    $(".whatsapp-float").hover(function(){
        $(".whatsapp-message").fadeIn(1000)
    })

    $("section").hover(function(){
        $(".whatsapp-message").fadeOut(1500)
    })
}