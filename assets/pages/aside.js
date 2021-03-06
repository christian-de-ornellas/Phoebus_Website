$(document).ready(function () {

  
  HoverCard()
  readOnlyText()
  ScrollFade()

})


function HoverCard() {

  $(".item-1").hover(function () {
    $(".item-1").toggleClass('animated pulse')
  })

  $(".item-2").hover(function () {
    $(".item-2").toggleClass('animated pulse')
  })

  $(".item-3").hover(function () {
    $(".item-3").toggleClass('animated pulse')
  })

}

function readOnlyText() {

  const div = document.getElementById('title')
  const text = "Você é livre para enviar dinheiro a quem quiser."

  const write = (str, el) => {
    let char = str.split('').reverse()
    let typer = setInterval(() => {
      if (!char.length) return clearInterval(typer)
      let next = char.pop()
      el.innerHTML += next
    }, 100)
  }

  write(text, div)

}

function ScrollFade() {

  $(window).scroll(function () {
    $("#cards").height(function () {
      $("#cards").addClass('animated zoomIn')
    })
  })

}

