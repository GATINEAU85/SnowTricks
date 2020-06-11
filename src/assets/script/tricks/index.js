import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel/slick/slick';

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