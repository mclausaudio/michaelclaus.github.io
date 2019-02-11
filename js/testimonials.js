$(document).ready(function(){
  $('#testimonial1').siblings().hide();

  let timer = setInterval(rotate, 5000);
  let numberOfTestimonials = 3
  let counter = 2;

// How can I get the DIVs to stack on top of each other without setting position: absolute?
  function rotate(){
    let showDiv = `#testimonial${counter}`
    $(showDiv).siblings().fadeOut(1)
    $(showDiv).fadeIn(1500)

    if(counter < numberOfTestimonials) {
      counter++;
    } else {
      counter = 1;
    }
  }
})
