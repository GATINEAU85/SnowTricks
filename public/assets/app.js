(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_script_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/script/index.js */ "./src/assets/script/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_7__);








__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");



var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - 72
        }, 1000, "swing");
        return false;
      }
    }
  }); // Closes responsive menu when a scroll trigger link is clicked

  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").hide();
  }); // Activate scrollspy to add active class to navbar items on scroll

  $("body").scroll({
    target: "#mainNav",
    offset: 74
  }); // Collapse Navbar

  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }; // Collapse now if page is not at top


  navbarCollapse(); // Collapse the navbar when page is scrolled

  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/script/addFiles/index.js":
/*!*********************************************!*\
  !*** ./src/assets/script/addFiles/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

$(document).ready(function () {
  // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
  var $container = $('div#tricks_tricksFiles'); // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement

  var index = $container.find(':input').length; // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.

  $('#add_category').click(function (e) {
    addCategory($container);
    e.preventDefault(); // évite qu'un # apparaisse dans l'URL

    return false;
  }); // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).

  if (index == 0) {
    addCategory($container);
  } else {
    // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
    $container.children('div').each(function () {
      addDeleteLink($(this));
    });
  } // La fonction qui ajoute un formulaire CategoryType


  function addCategory($container) {
    // Dans le contenu de l'attribut « data-prototype », on remplace :
    // - le texte "__name__label__" qu'il contient par le label du champ
    // - le texte "__name__" qu'il contient par le numéro du champ
    var template = $container.attr('data-prototype').replace(/__name__label__/g, 'File n°' + (index + 1)).replace(/__name__/g, index); // On crée un objet jquery qui contient ce template

    var $prototype = $(template); // On ajoute au prototype un lien pour pouvoir supprimer la catégorie

    addDeleteLink($prototype); // On ajoute le prototype modifié à la fin de la balise <div>

    $container.append($prototype); // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro

    index++;
  } // La fonction qui ajoute un lien de suppression d'une catégorie


  function addDeleteLink($prototype) {
    // Création du lien
    var $deleteLink = $('<a href="#" class="btn btn-danger">Delete</a>'); // Ajout du lien

    $prototype.append($deleteLink); // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie

    $deleteLink.click(function (e) {
      $prototype.remove();
      e.preventDefault(); // évite qu'un # apparaisse dans l'URL

      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/script/index.js":
/*!************************************!*\
  !*** ./src/assets/script/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tricks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tricks/index.js */ "./src/assets/script/tricks/index.js");
/* harmony import */ var _navigation_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/index.js */ "./src/assets/script/navigation/index.js");
/* harmony import */ var _navigation_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addFiles_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addFiles/index.js */ "./src/assets/script/addFiles/index.js");
/* harmony import */ var _addFiles_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_addFiles_index_js__WEBPACK_IMPORTED_MODULE_3__);



 //var p = document.getElementById("navContact");
//p.onclick = showAlert;
//
//function showAlert()
//{
//  alert("Evènement de click détecté");
//}

/***/ }),

/***/ "./src/assets/script/navigation/index.js":
/*!***********************************************!*\
  !*** ./src/assets/script/navigation/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//import '../../../../node_modules/jquery/dist/jquery.js';
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

console.log($);
$("#navContact").click(function () {
  alert("Handler for .click() called.");
}); //document.hide("#navContact");

/***/ }),

/***/ "./src/assets/script/tricks/index.js":
/*!*******************************************!*\
  !*** ./src/assets/script/tricks/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.scss */ "./node_modules/slick-carousel/slick/slick.scss");
/* harmony import */ var slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.scss */ "./node_modules/slick-carousel/slick/slick-theme.scss");
/* harmony import */ var slick_carousel_slick_slick_theme_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_scss__WEBPACK_IMPORTED_MODULE_4__);
 //window.$ = window.jQuery = $;




 //import Siema from 'siema';

__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");

__webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");

__webpack_require__(/*! slick-carousel/slick/slick.scss */ "./node_modules/slick-carousel/slick/slick.scss");

__webpack_require__(/*! slick-carousel/slick/slick-theme.scss */ "./node_modules/slick-carousel/slick/slick-theme.scss"); //export default (function () {
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


jquery__WEBPACK_IMPORTED_MODULE_0___default()("#carouselFile").slick({
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  asNavFor: '#carouselFiles',
  autoplaySpeed: 2000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1
}); //});

jquery__WEBPACK_IMPORTED_MODULE_0___default()('#carouselFiles').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#carouselFile',
  dots: true,
  centerMode: true,
  arrows: false,
  focusOnSelect: true
}); //}());

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2FkZEZpbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvdHJpY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJjbGljayIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwibGVuZ3RoIiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGlkZSIsInNjcm9sbCIsIm5hdmJhckNvbGxhcHNlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIndpbmRvdyIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyIiwiaW5kZXgiLCJmaW5kIiwiZSIsImFkZENhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsImVhY2giLCJhZGREZWxldGVMaW5rIiwidGVtcGxhdGUiLCJhdHRyIiwiJHByb3RvdHlwZSIsImFwcGVuZCIsIiRkZWxldGVMaW5rIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsImFsZXJ0Iiwic2xpY2siLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsImF1dG9wbGF5IiwiYXNOYXZGb3IiLCJhdXRvcGxheVNwZWVkIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiZm9jdXNPblNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FB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Q0FGUTtBQUd4QkosVUFBUSxFQUFFLGVBSGM7QUFJeEJKLE1BQUksRUFBRSxJQUprQjtBQUt4QlMsWUFBVSxFQUFFLElBTFk7QUFNeEJILFFBQU0sRUFBQyxLQU5pQjtBQU94QkksZUFBYSxFQUFFO0FBUFMsQ0FBMUIsRSxDQVVBLE87Ozs7Ozs7Ozs7O0FDckRBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3JpcHQvaW5kZXguanMnO1xyXG5pbXBvcnQgJ2pxdWVyeSc7XHJcbmltcG9ydCAnanF1ZXJ5LXVpJztcclxucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XHJcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxyXG5cclxuICAgIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xyXG4gICAgJCgnYS5qcy1zY3JvbGwtdHJpZ2dlcltocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgPT1cclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpICYmXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyB0YXJnZXRcclxuICAgICAgICAgICAgICAgIDogJChcIltuYW1lPVwiICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgXCJdXCIpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gNzIsfSwgMTAwMCwgXCJzd2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlcyByZXNwb25zaXZlIG1lbnUgd2hlbiBhIHNjcm9sbCB0cmlnZ2VyIGxpbmsgaXMgY2xpY2tlZFxyXG4gICAgJChcIi5qcy1zY3JvbGwtdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWN0aXZhdGUgc2Nyb2xsc3B5IHRvIGFkZCBhY3RpdmUgY2xhc3MgdG8gbmF2YmFyIGl0ZW1zIG9uIHNjcm9sbFxyXG4gICAgJChcImJvZHlcIikuc2Nyb2xsKHtcclxuICAgICAgICB0YXJnZXQ6IFwiI21haW5OYXZcIixcclxuICAgICAgICBvZmZzZXQ6IDc0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29sbGFwc2UgTmF2YmFyXHJcbiAgICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjbWFpbk5hdlwiKS5vZmZzZXQoKS50b3AgPiAxMDApIHtcclxuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBDb2xsYXBzZSBub3cgaWYgcGFnZSBpcyBub3QgYXQgdG9wXHJcbiAgICBuYXZiYXJDb2xsYXBzZSgpO1xyXG4gICAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcclxuICAgICQod2luZG93KS5zY3JvbGwobmF2YmFyQ29sbGFwc2UpO1xyXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxyXG4iLCIgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gT24gcsOpY3Vww6hyZSBsYSBiYWxpc2UgPGRpdj4gZW4gcXVlc3Rpb24gcXVpIGNvbnRpZW50IGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrsgcXVpIG5vdXMgaW50w6lyZXNzZS5cbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJ2RpdiN0cmlja3NfdHJpY2tzRmlsZXMnKTtcblxuICAgIC8vIE9uIGTDqWZpbml0IHVuIGNvbXB0ZXVyIHVuaXF1ZSBwb3VyIG5vbW1lciBsZXMgY2hhbXBzIHF1J29uIHZhIGFqb3V0ZXIgZHluYW1pcXVlbWVudFxuICAgIHZhciBpbmRleCA9ICRjb250YWluZXIuZmluZCgnOmlucHV0JykubGVuZ3RoO1xuXG4gICAgLy8gT24gYWpvdXRlIHVuIG5vdXZlYXUgY2hhbXAgw6AgY2hhcXVlIGNsaWMgc3VyIGxlIGxpZW4gZCdham91dC5cbiAgICAkKCcjYWRkX2NhdGVnb3J5JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgYWRkQ2F0ZWdvcnkoJGNvbnRhaW5lcik7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gw6l2aXRlIHF1J3VuICMgYXBwYXJhaXNzZSBkYW5zIGwnVVJMXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBPbiBham91dGUgdW4gcHJlbWllciBjaGFtcCBhdXRvbWF0aXF1ZW1lbnQgcydpbCBuJ2VuIGV4aXN0ZSBwYXMgZMOpasOgIHVuIChjYXMgZCd1bmUgbm91dmVsbGUgYW5ub25jZSBwYXIgZXhlbXBsZSkuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIGFkZENhdGVnb3J5KCRjb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTJ2lsIGV4aXN0ZSBkw6lqw6AgZGVzIGNhdMOpZ29yaWVzLCBvbiBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBwb3VyIGNoYWN1bmUgZCdlbnRyZSBlbGxlc1xuICAgICAgJGNvbnRhaW5lci5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkRGVsZXRlTGluaygkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExhIGZvbmN0aW9uIHF1aSBham91dGUgdW4gZm9ybXVsYWlyZSBDYXRlZ29yeVR5cGVcbiAgICBmdW5jdGlvbiBhZGRDYXRlZ29yeSgkY29udGFpbmVyKSB7XG4gICAgICAvLyBEYW5zIGxlIGNvbnRlbnUgZGUgbCdhdHRyaWJ1dCDCqyBkYXRhLXByb3RvdHlwZSDCuywgb24gcmVtcGxhY2UgOlxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fbGFiZWxfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBsYWJlbCBkdSBjaGFtcFxuICAgICAgLy8gLSBsZSB0ZXh0ZSBcIl9fbmFtZV9fXCIgcXUnaWwgY29udGllbnQgcGFyIGxlIG51bcOpcm8gZHUgY2hhbXBcbiAgICAgIHZhciB0ZW1wbGF0ZSA9ICRjb250YWluZXIuYXR0cignZGF0YS1wcm90b3R5cGUnKVxuICAgICAgICAucmVwbGFjZSgvX19uYW1lX19sYWJlbF9fL2csICdGaWxlIG7CsCcgKyAoaW5kZXgrMSkpXG4gICAgICAgIC5yZXBsYWNlKC9fX25hbWVfXy9nLCAgICAgICAgaW5kZXgpXG4gICAgICA7XG5cbiAgICAgIC8vIE9uIGNyw6llIHVuIG9iamV0IGpxdWVyeSBxdWkgY29udGllbnQgY2UgdGVtcGxhdGVcbiAgICAgIHZhciAkcHJvdG90eXBlID0gJCh0ZW1wbGF0ZSk7XG5cbiAgICAgIC8vIE9uIGFqb3V0ZSBhdSBwcm90b3R5cGUgdW4gbGllbiBwb3VyIHBvdXZvaXIgc3VwcHJpbWVyIGxhIGNhdMOpZ29yaWVcbiAgICAgIGFkZERlbGV0ZUxpbmsoJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIE9uIGFqb3V0ZSBsZSBwcm90b3R5cGUgbW9kaWZpw6kgw6AgbGEgZmluIGRlIGxhIGJhbGlzZSA8ZGl2PlxuICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJHByb3RvdHlwZSk7XG5cbiAgICAgIC8vIEVuZmluLCBvbiBpbmNyw6ltZW50ZSBsZSBjb21wdGV1ciBwb3VyIHF1ZSBsZSBwcm9jaGFpbiBham91dCBzZSBmYXNzZSBhdmVjIHVuIGF1dHJlIG51bcOpcm9cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgLy8gTGEgZm9uY3Rpb24gcXVpIGFqb3V0ZSB1biBsaWVuIGRlIHN1cHByZXNzaW9uIGQndW5lIGNhdMOpZ29yaWVcbiAgICBmdW5jdGlvbiBhZGREZWxldGVMaW5rKCRwcm90b3R5cGUpIHtcbiAgICAgIC8vIENyw6lhdGlvbiBkdSBsaWVuXG4gICAgICB2YXIgJGRlbGV0ZUxpbmsgPSAkKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5EZWxldGU8L2E+Jyk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpZW5cbiAgICAgICRwcm90b3R5cGUuYXBwZW5kKCRkZWxldGVMaW5rKTtcblxuICAgICAgLy8gQWpvdXQgZHUgbGlzdGVuZXIgc3VyIGxlIGNsaWMgZHUgbGllbiBwb3VyIGVmZmVjdGl2ZW1lbnQgc3VwcHJpbWVyIGxhIGNhdMOpZ29yaWVcbiAgICAgICRkZWxldGVMaW5rLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJHByb3RvdHlwZS5yZW1vdmUoKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pOyIsImltcG9ydCAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi90cmlja3MvaW5kZXguanMnO1xyXG5pbXBvcnQgJy4vbmF2aWdhdGlvbi9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9hZGRGaWxlcy9pbmRleC5qcyc7XHJcblxyXG4vL3ZhciBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZDb250YWN0XCIpO1xyXG4vL3Aub25jbGljayA9IHNob3dBbGVydDtcclxuLy9cclxuLy9mdW5jdGlvbiBzaG93QWxlcnQoKVxyXG4vL3tcclxuLy8gIGFsZXJ0KFwiRXbDqG5lbWVudCBkZSBjbGljayBkw6l0ZWN0w6lcIik7XHJcbi8vfSIsIi8vaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzJztcclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc29sZS5sb2coJCk7XHJcblxyXG4kKFwiI25hdkNvbnRhY3RcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgYWxlcnQoXCJIYW5kbGVyIGZvciAuY2xpY2soKSBjYWxsZWQuXCIpO1xyXG59KTtcclxuXHJcbi8vZG9jdW1lbnQuaGlkZShcIiNuYXZDb250YWN0XCIpO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vL3dpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICQ7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLnNjc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuc2Nzcyc7XHJcbi8vaW1wb3J0IFNpZW1hIGZyb20gJ3NpZW1hJztcclxucmVxdWlyZShcInNsaWNrLWNhcm91c2VsXCIpO1xyXG5yZXF1aXJlKFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCIpO1xyXG5yZXF1aXJlKFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suc2Nzc1wiKTtcclxucmVxdWlyZShcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLnNjc3NcIik7XHJcbi8vZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgJCgnI2Nhcm91c2VsRmlsZXMnKS5zbGljayh7XHJcbi8vICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4vLyAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4vLyAgICAvLyAgYXNOYXZGb3I6ICcjY2Fyb3VzZWxGaWxlJyxcclxuLy8gICAgICBkb3RzOiB0cnVlLFxyXG4vLyAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbi8vICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuLy8gICAgfSk7XHJcbi8vdmFyIG15U2llbWEgPSBuZXcgU2llbWEoe1xyXG4vLyAgICBzZWxlY3RvcjogJyNjYXJvdXNlbEZpbGUnLFxyXG4vLyAgICBkdXJhdGlvbjogMjAwLFxyXG4vLyAgICBlYXNpbmc6ICdlYXNlLW91dCcsXHJcbi8vICAgIHBlclBhZ2U6IDEsXHJcbi8vICAgIGxvb3A6IHRydWVcclxuLy99KTtcclxuLy8kKCcuanMtcHJldicpLmNsaWNrKGZ1bmN0aW9uKCkge215U2llbWEucHJldigpfSk7XHJcbi8vJCgnLmpzLW5leHQnKS5jbGljayhmdW5jdGlvbigpIHtteVNpZW1hLm5leHQoKX0pO1xyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7ICQoJy5jYXJvdXNlbEZpbGUnKS5zbGljayh7IGRvdHM6IHRydWUsIGFycm93czogdHJ1ZSwgaW5maW5pdGU6IHRydWUsIHNsaWRlc1RvU2hvdzogMSwgc2xpZGVzVG9TY3JvbGw6IDEgfSk7IH0pO1xyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7IFxyXG4kKFwiI2Nhcm91c2VsRmlsZVwiKS5zbGljayh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNzAwLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIGFzTmF2Rm9yOiAnI2Nhcm91c2VsRmlsZXMnLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgIGFycm93czp0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxufSk7XHJcbi8vfSk7XHJcbiQoJyNjYXJvdXNlbEZpbGVzJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhc05hdkZvcjogJyNjYXJvdXNlbEZpbGUnLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICBhcnJvd3M6ZmFsc2UsXHJcbiAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxufSk7XHJcblxyXG4vL30oKSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=