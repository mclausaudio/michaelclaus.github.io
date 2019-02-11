$( document ).ready(function() {
let aboutHeight = $('.about');
let headerTextHeight = $('.header-text').offset().top;
let aboutPosition = ($('#about').offset().top - parseInt($('#about').css('margin-top')));
let portfolioPosition = returnSectionPosition('portfolio');
let testimonialsPosition = returnSectionPosition('testimonials');
let contactPosition = returnSectionPosition('contact');
//userScroll keeps track of position
let userScroll = ($(this).scrollTop() + parseInt($('nav').css('height')));
//below fires every instance of a 'scroll'
$(document).scroll(function(){
  //the below makes userScroll the current scroll vale + nav height to clear it (so its value is bottom of navbar and not top)
  userScroll = ($(this).scrollTop() + parseInt($('nav').css('height')));

  if (userScroll > headerTextHeight) {
    shrinkNav();
  } else {
    extendNav();
  }

  activeLinkChecker()
})
//below sets event listeners to auto scroll to the section when nav link clicked
navScrollOnClick('about-link', aboutPosition);
navScrollOnClick('portfolio-link', portfolioPosition);
navScrollOnClick('testimonials-link', testimonialsPosition);
navScrollOnClick('contact-link', contactPosition);
navScrollOnClick('nav-logo', 0);
//returns sections position value with clearence for nav margin
function returnSectionPosition(id){
  let sectionId = (`#${id}`);
  return ($(sectionId).offset().top - parseInt($(sectionId).css('margin-top')));
}

function shrinkNav(){
    $('nav').addClass('nav-after-scroll');
    $('#nav-logo').addClass('brand-hide nav-item nav-link');
}

function extendNav(){
  $('nav').removeClass('nav-after-scroll');
  $('#nav-logo').removeClass('brand-hide').addClass('navbar-brand')
  $('.navbar-nav').addClass('justify-content-around');
}
function activeLinkChecker(){
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    removeActiveLink('testimonials')
    addActiveLink('contact')
  } else {
    isScrollBetween('about', aboutPosition, portfolioPosition);
    isScrollBetween('portfolio', portfolioPosition, testimonialsPosition);
    isScrollBetween('testimonials', testimonialsPosition, contactPosition);
    isScrollBetween('contact', contactPosition);
  }
}
//functions below determine where a user currently is on the page and fire events accordingly
function isScrollBetween(id, greaterThanPosition, lessThanPosition){
  if (userScroll > greaterThanPosition && userScroll < lessThanPosition) {
    addActiveLink(id);
  } else {
    removeActiveLink(id);
  }
}

function addActiveLink(id){
  $(`#${id}-link`).addClass('active-link')
}

function removeActiveLink(id) {
  $(`#${id}-link`).removeClass('active-link')
}

function navScrollOnClick(navLinkId, desiredPosition){
  $(`#${navLinkId}`).on('click', function(){
    $('html, body').animate({scrollTop: desiredPosition}, 'slow');
})
}

});
