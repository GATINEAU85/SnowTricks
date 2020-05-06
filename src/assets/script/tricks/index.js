import $ from 'jquery';
//window.$ = window.jQuery = $;
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
//import Siema from 'siema';
require("slick-carousel");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick.scss");
require("slick-carousel/slick/slick-theme.scss");
//export default (function () {
//    $('#carouselFiles').slick({
//      slidesToShow: 3,
//      slidesToScroll: 3,
//    //  asNavFor: '#carouselFile',
//      dots: true,
//      centerMode: true,
//      focusOnSelect: true,
//    });
//var mySiema = new Siema({
//    selector: '#carouselFile',
//    duration: 200,
//    easing: 'ease-out',
//    perPage: 1,
//    loop: true
//});
//$('.js-prev').click(function() {mySiema.prev()});
//$('.js-next').click(function() {mySiema.next()});
//$(document).ready(function(){ $('.carouselFile').slick({ dots: true, arrows: true, infinite: true, slidesToShow: 1, slidesToScroll: 1 }); });
//$(document).ready(function(){ 
$("#carouselFile").slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    asNavFor: '#carouselFiles',
    autoplaySpeed: 2000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1
});
//});
$('#carouselFiles').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#carouselFile',
  dots: true,
  centerMode: true,
  arrows:false,
  focusOnSelect: true,
});

//}());
