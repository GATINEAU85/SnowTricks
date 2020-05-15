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
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_9__);










__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");



var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(function ($) {
  "use strict"; // Start of use strict
  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
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

/***/ "./src/assets/script/dropzone/index.js":
/*!*********************************************!*\
  !*** ./src/assets/script/dropzone/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_2__);


var _Dropzone$options$upd;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.dictDefaultMessage = "The file must be less than 256 Mo.";
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.dictRemoveFile = "DELETE";
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.addRemoveLinks = true;
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.acceptedFiles = ".jpeg,.jpg,.png,.gif";
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.maxFiles = 1;
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.uploadMultiple = false;
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.autoprocessQueue = false;

dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.defaultOptions.init = function () {
  this.hiddenFileInput.removeAttribute('multiple');
  this.on("maxfilesexceeded", function (file) {
    this.removeAllFiles();
    this.addFile(file);
  });
};

dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.options.updateFileTricksDropzoneForm = (_Dropzone$options$upd = {
  paramName: "updateFileTricksDropzoneForm",
  addRemoveLinks: true,
  dictRemoveFile: 'DELETE'
}, _defineProperty(_Dropzone$options$upd, "paramName", "file"), _defineProperty(_Dropzone$options$upd, "maxFiles", 1), _defineProperty(_Dropzone$options$upd, "autoprocessQueue", false), _defineProperty(_Dropzone$options$upd, "init", function init() {
  this.on("addedfile", function () {
    if (this.files[1] != null) {
      this.removeFile(this.files[0]);
    }
  });
  this.on("success", function (file, response) {
    //si on a une erreur sur le chargement
    if (response.status == "error") {
      alert(response.message);
      return;
    }
    /*else{
       response.logoName;
       response.logoSize
       response.logoFormat
       response.logoURI
    }*/

  });
}), _Dropzone$options$upd);

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
/* harmony import */ var _updateFiles_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateFiles/index.js */ "./src/assets/script/updateFiles/index.js");
/* harmony import */ var _updateFiles_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_updateFiles_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dropzone_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropzone/index.js */ "./src/assets/script/dropzone/index.js");







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
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick__WEBPACK_IMPORTED_MODULE_1__);

window.$ = __webpack_provided_window_dot_jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/script/updateFiles/index.js":
/*!************************************************!*\
  !*** ./src/assets/script/updateFiles/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

$(".delete").click(function () {
  confirm('This file will be delete from this tricks');
});
$(".update").click(function () {
  $('#modalUpdateFile').modal();
  $("#fileId").val($(this).attr("file"));
});
$(".deleteTricks").click(function () {
  confirm('This tricks will be remove from SnowTricks, are you sure you want to delete this ?');
});
$(".updateFile").click(function () {
  //Création du tableau de parametre envoi 
  var insertionChamp = {};
  var fileId = $("#fileId").val();
  var trickId = $("#trickId").val();

  if (updateFileTricksDropzoneForm.dropzone.files.length !== 0) {
    var logoDropzoneUpdate = updateFileTricksDropzoneForm.dropzone.files[0];
    insertionChamp["fileName"] = logoDropzoneUpdate.name;
    insertionChamp["fileType"] = "image";
    insertionChamp["fileSize"] = logoDropzoneUpdate.width;
    insertionChamp["fileDate"] = $.now();
  }

  $.ajax({
    // url : 'insertDb', 
    url: "/projet6/admin/update/trick/" + trickId + "/update/file/" + fileId,
    type: 'POST',
    cache: true,
    data: insertionChamp,
    success: function success(data) {
      $("#messageUpdate").addClass('alert alert-success ta-c w-100').html("The file was update.").delay(1000).fadeOut(1000);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2FkZEZpbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2Ryb3B6b25lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvdHJpY2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L3VwZGF0ZUZpbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJjbGljayIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJoYXNoIiwibGVuZ3RoIiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiaGlkZSIsInNjcm9sbCIsIm5hdmJhckNvbGxhcHNlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIndpbmRvdyIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkY29udGFpbmVyIiwiaW5kZXgiLCJmaW5kIiwiZSIsImFkZENhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsImVhY2giLCJhZGREZWxldGVMaW5rIiwidGVtcGxhdGUiLCJhdHRyIiwiJHByb3RvdHlwZSIsImFwcGVuZCIsIiRkZWxldGVMaW5rIiwicmVtb3ZlIiwiRHJvcHpvbmUiLCJwcm90b3R5cGUiLCJkZWZhdWx0T3B0aW9ucyIsImRpY3REZWZhdWx0TWVzc2FnZSIsImRpY3RSZW1vdmVGaWxlIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHRlZEZpbGVzIiwibWF4RmlsZXMiLCJ1cGxvYWRNdWx0aXBsZSIsImF1dG9wcm9jZXNzUXVldWUiLCJpbml0IiwiaGlkZGVuRmlsZUlucHV0IiwicmVtb3ZlQXR0cmlidXRlIiwib24iLCJmaWxlIiwicmVtb3ZlQWxsRmlsZXMiLCJhZGRGaWxlIiwib3B0aW9ucyIsInVwZGF0ZUZpbGVUcmlja3NEcm9wem9uZUZvcm0iLCJwYXJhbU5hbWUiLCJmaWxlcyIsInJlbW92ZUZpbGUiLCJyZXNwb25zZSIsInN0YXR1cyIsImFsZXJ0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwiYXV0b3BsYXkiLCJhc05hdkZvciIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJmb2N1c09uU2VsZWN0IiwiY29uZmlybSIsIm1vZGFsIiwidmFsIiwiaW5zZXJ0aW9uQ2hhbXAiLCJmaWxlSWQiLCJ0cmlja0lkIiwiZHJvcHpvbmUiLCJsb2dvRHJvcHpvbmVVcGRhdGUiLCJuYW1lIiwid2lkdGgiLCJub3ciLCJhamF4IiwidXJsIiwidHlwZSIsImNhY2hlIiwiZGF0YSIsInN1Y2Nlc3MiLCJodG1sIiwiZGVsYXkiLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUNBOztBQUVBLElBQUlDLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFmOztBQUVDLENBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1gsZUFEVyxDQUNHO0FBRWQ7O0FBQ0FBLEdBQUMsQ0FBQyxnREFBRCxDQUFELENBQW9EQyxLQUFwRCxDQUEwRCxZQUFZO0FBQ2xFLFFBQ0lDLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsT0FB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QUVEeEYsR0FBQyxDQUFDeUYsSUFBRixDQUFPO0FBQ0g7QUFDQUMsT0FBRyxFQUFFLGlDQUFpQ1AsT0FBakMsR0FBMkMsZUFBM0MsR0FBNkRELE1BRi9EO0FBR0hTLFFBQUksRUFBRSxNQUhIO0FBSUhDLFNBQUssRUFBRSxJQUpKO0FBS0hDLFFBQUksRUFBRVosY0FMSDtBQU1IYSxXQUFPLEVBQUUsaUJBQVVELElBQVYsRUFBZ0I7QUFDckI3RixPQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUNLaUIsUUFETCxDQUNjLGdDQURkLEVBRUs4RSxJQUZMLENBRVUsc0JBRlYsRUFHS0MsS0FITCxDQUdXLElBSFgsRUFJS0MsT0FKTCxDQUlhLElBSmI7QUFLSDtBQVpFLEdBQVA7QUFjSCxDQTVCRCxFOzs7Ozs7Ozs7Ozs7QUNmQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvc2NyaXB0L2luZGV4LmpzJztcclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQgJ2pxdWVyeSc7XHJcbmltcG9ydCAnanF1ZXJ5LXVpJztcclxuaW1wb3J0ICdkcm9wem9uZSc7XHJcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xyXG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuIChmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcclxuXHJcbiAgICAvLyBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGpRdWVyeSBlYXNpbmdcclxuICAgICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpID09PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PT0gdGhpcy5ob3N0bmFtZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgOiAkKFwiW25hbWU9XCIgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSA3Mn0sIDEwMDAsIFwic3dpbmdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbG9zZXMgcmVzcG9uc2l2ZSBtZW51IHdoZW4gYSBzY3JvbGwgdHJpZ2dlciBsaW5rIGlzIGNsaWNrZWRcclxuICAgICQoXCIuanMtc2Nyb2xsLXRyaWdnZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIubmF2YmFyLWNvbGxhcHNlXCIpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFjdGl2YXRlIHNjcm9sbHNweSB0byBhZGQgYWN0aXZlIGNsYXNzIHRvIG5hdmJhciBpdGVtcyBvbiBzY3JvbGxcclxuICAgICQoXCJib2R5XCIpLnNjcm9sbCh7XHJcbiAgICAgICAgdGFyZ2V0OiBcIiNtYWluTmF2XCIsXHJcbiAgICAgICAgb2Zmc2V0OiA3NCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbGxhcHNlIE5hdmJhclxyXG4gICAgdmFyIG5hdmJhckNvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI21haW5OYXZcIikub2Zmc2V0KCkudG9wID4gMTAwKSB7XHJcbiAgICAgICAgICAgICQoXCIjbWFpbk5hdlwiKS5hZGRDbGFzcyhcIm5hdmJhci1zaHJpbmtcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gQ29sbGFwc2Ugbm93IGlmIHBhZ2UgaXMgbm90IGF0IHRvcFxyXG4gICAgbmF2YmFyQ29sbGFwc2UoKTtcclxuICAgIC8vIENvbGxhcHNlIHRoZSBuYXZiYXIgd2hlbiBwYWdlIGlzIHNjcm9sbGVkXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKG5hdmJhckNvbGxhcHNlKTtcclxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcclxuIiwiICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIE9uIHLDqWN1cMOocmUgbGEgYmFsaXNlIDxkaXY+IGVuIHF1ZXN0aW9uIHF1aSBjb250aWVudCBsJ2F0dHJpYnV0IMKrIGRhdGEtcHJvdG90eXBlIMK7IHF1aSBub3VzIGludMOpcmVzc2UuXG4gICAgdmFyICRjb250YWluZXIgPSAkKCdkaXYjdHJpY2tzX3RyaWNrc0ZpbGVzJyk7XG5cbiAgICAvLyBPbiBkw6lmaW5pdCB1biBjb21wdGV1ciB1bmlxdWUgcG91ciBub21tZXIgbGVzIGNoYW1wcyBxdSdvbiB2YSBham91dGVyIGR5bmFtaXF1ZW1lbnRcbiAgICB2YXIgaW5kZXggPSAkY29udGFpbmVyLmZpbmQoJzppbnB1dCcpLmxlbmd0aDtcblxuICAgIC8vIE9uIGFqb3V0ZSB1biBub3V2ZWF1IGNoYW1wIMOgIGNoYXF1ZSBjbGljIHN1ciBsZSBsaWVuIGQnYWpvdXQuXG4gICAgJCgnI2FkZF9jYXRlZ29yeScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFkZENhdGVnb3J5KCRjb250YWluZXIpO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gT24gYWpvdXRlIHVuIHByZW1pZXIgY2hhbXAgYXV0b21hdGlxdWVtZW50IHMnaWwgbidlbiBleGlzdGUgcGFzIGTDqWrDoCB1biAoY2FzIGQndW5lIG5vdXZlbGxlIGFubm9uY2UgcGFyIGV4ZW1wbGUpLlxuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICBhZGRDYXRlZ29yeSgkY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUydpbCBleGlzdGUgZMOpasOgIGRlcyBjYXTDqWdvcmllcywgb24gYWpvdXRlIHVuIGxpZW4gZGUgc3VwcHJlc3Npb24gcG91ciBjaGFjdW5lIGQnZW50cmUgZWxsZXNcbiAgICAgICRjb250YWluZXIuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZERlbGV0ZUxpbmsoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGZvcm11bGFpcmUgQ2F0ZWdvcnlUeXBlXG4gICAgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkoJGNvbnRhaW5lcikge1xuICAgICAgLy8gRGFucyBsZSBjb250ZW51IGRlIGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrssIG9uIHJlbXBsYWNlIDpcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX2xhYmVsX19cIiBxdSdpbCBjb250aWVudCBwYXIgbGUgbGFiZWwgZHUgY2hhbXBcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBudW3DqXJvIGR1IGNoYW1wXG4gICAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyLmF0dHIoJ2RhdGEtcHJvdG90eXBlJylcbiAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fbGFiZWxfXy9nLCAnRmlsZSBuwrAnICsgKGluZGV4KzEpKVxuICAgICAgICAucmVwbGFjZSgvX19uYW1lX18vZywgICAgICAgIGluZGV4KVxuICAgICAgO1xuXG4gICAgICAvLyBPbiBjcsOpZSB1biBvYmpldCBqcXVlcnkgcXVpIGNvbnRpZW50IGNlIHRlbXBsYXRlXG4gICAgICB2YXIgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgYXUgcHJvdG90eXBlIHVuIGxpZW4gcG91ciBwb3V2b2lyIHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICBhZGREZWxldGVMaW5rKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgbGUgcHJvdG90eXBlIG1vZGlmacOpIMOgIGxhIGZpbiBkZSBsYSBiYWxpc2UgPGRpdj5cbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBFbmZpbiwgb24gaW5jcsOpbWVudGUgbGUgY29tcHRldXIgcG91ciBxdWUgbGUgcHJvY2hhaW4gYWpvdXQgc2UgZmFzc2UgYXZlYyB1biBhdXRyZSBudW3DqXJvXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIC8vIExhIGZvbmN0aW9uIHF1aSBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBkJ3VuZSBjYXTDqWdvcmllXG4gICAgZnVuY3Rpb24gYWRkRGVsZXRlTGluaygkcHJvdG90eXBlKSB7XG4gICAgICAvLyBDcsOpYXRpb24gZHUgbGllblxuICAgICAgdmFyICRkZWxldGVMaW5rID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9hPicpO1xuXG4gICAgICAvLyBBam91dCBkdSBsaWVuXG4gICAgICAkcHJvdG90eXBlLmFwcGVuZCgkZGVsZXRlTGluayk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpc3RlbmVyIHN1ciBsZSBjbGljIGR1IGxpZW4gcG91ciBlZmZlY3RpdmVtZW50IHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICAkZGVsZXRlTGluay5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICRwcm90b3R5cGUucmVtb3ZlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDDqXZpdGUgcXUndW4gIyBhcHBhcmFpc3NlIGRhbnMgbCdVUkxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTsiLCJpbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcyc7XG5cbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5kaWN0RGVmYXVsdE1lc3NhZ2UgPSBcIlRoZSBmaWxlIG11c3QgYmUgbGVzcyB0aGFuIDI1NiBNby5cIjtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5kaWN0UmVtb3ZlRmlsZSA9IFwiREVMRVRFXCI7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuYWRkUmVtb3ZlTGlua3MgPSB0cnVlO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmFjY2VwdGVkRmlsZXMgPSBcIi5qcGVnLC5qcGcsLnBuZywuZ2lmXCI7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMubWF4RmlsZXMgPSAxO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLnVwbG9hZE11bHRpcGxlID0gZmFsc2U7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuYXV0b3Byb2Nlc3NRdWV1ZSA9IGZhbHNlO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdtdWx0aXBsZScpO1xuICAgIHRoaXMub24oXCJtYXhmaWxlc2V4Y2VlZGVkXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsRmlsZXMoKTtcbiAgICAgICAgdGhpcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xufTtcblxuXG5Ecm9wem9uZS5vcHRpb25zLnVwZGF0ZUZpbGVUcmlja3NEcm9wem9uZUZvcm09IHtcbiAgICBwYXJhbU5hbWU6IFwidXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybVwiLFxuICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxuICAgIGRpY3RSZW1vdmVGaWxlOiAnREVMRVRFJyxcbiAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxuICAgIG1heEZpbGVzOiAxLFxuICAgIGF1dG9wcm9jZXNzUXVldWU6IGZhbHNlLFxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXNbMV0hPW51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL3NpIG9uIGEgdW5lIGVycmV1ciBzdXIgbGUgY2hhcmdlbWVudFxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiZXJyb3JcIil7XG4gICAgICAgICAgICAgICAgYWxlcnQgKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0vKmVsc2V7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb05hbWU7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb1NpemVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5sb2dvRm9ybWF0XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb1VSSVxuICAgICAgICAgICAgfSovXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbiIsImltcG9ydCAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi90cmlja3MvaW5kZXguanMnO1xyXG5pbXBvcnQgJy4vbmF2aWdhdGlvbi9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9hZGRGaWxlcy9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi91cGRhdGVGaWxlcy9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9kcm9wem9uZS9pbmRleC5qcyc7XHJcbiIsIi8vaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzJztcclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc29sZS5sb2coJCk7XHJcblxyXG4kKFwiI25hdkNvbnRhY3RcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgYWxlcnQoXCJIYW5kbGVyIGZvciAuY2xpY2soKSBjYWxsZWQuXCIpO1xyXG59KTtcclxuXHJcbi8vZG9jdW1lbnQuaGlkZShcIiNuYXZDb250YWN0XCIpO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrJztcclxuXHJcbiQoXCIjY2Fyb3VzZWxGaWxlXCIpLnNsaWNrKHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA3MDAsXHJcbiAgICBhdXRvcGxheTp0cnVlLFxyXG4gICAgYXNOYXZGb3I6ICcjY2Fyb3VzZWxGaWxlcycsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgYXJyb3dzOnRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG59KTtcclxuLy99KTtcclxuJCgnI2Nhcm91c2VsRmlsZXMnKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiA0LFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFzTmF2Rm9yOiAnI2Nhcm91c2VsRmlsZScsXHJcbiAgZG90czogdHJ1ZSxcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG59KTtcclxuXHJcblxyXG4vL30oKSk7XHJcbiIsIlxuJChcIi5kZWxldGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbmZpcm0oJ1RoaXMgZmlsZSB3aWxsIGJlIGRlbGV0ZSBmcm9tIHRoaXMgdHJpY2tzJyk7XG59KTtcblxuJChcIi51cGRhdGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJyNtb2RhbFVwZGF0ZUZpbGUnKS5tb2RhbCgpO1xuICAgICQoXCIjZmlsZUlkXCIpLnZhbCgkKHRoaXMpLmF0dHIoXCJmaWxlXCIpKTtcbn0pO1xuXG4kKFwiLmRlbGV0ZVRyaWNrc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY29uZmlybSgnVGhpcyB0cmlja3Mgd2lsbCBiZSByZW1vdmUgZnJvbSBTbm93VHJpY2tzLCBhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgPycpO1xufSk7XG5cblxuJChcIi51cGRhdGVGaWxlXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAvL0Nyw6lhdGlvbiBkdSB0YWJsZWF1IGRlIHBhcmFtZXRyZSBlbnZvaSBcbiAgICB2YXIgaW5zZXJ0aW9uQ2hhbXAgPSB7fTtcbiAgICB2YXIgZmlsZUlkID0gJChcIiNmaWxlSWRcIikudmFsKCk7XG4gICAgdmFyIHRyaWNrSWQgPSAkKFwiI3RyaWNrSWRcIikudmFsKCk7XG5cbiAgICBpZiAodXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybS5kcm9wem9uZS5maWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdmFyIGxvZ29Ecm9wem9uZVVwZGF0ZSA9IHVwZGF0ZUZpbGVUcmlja3NEcm9wem9uZUZvcm0uZHJvcHpvbmUuZmlsZXNbMF07XG4gICAgICAgIGluc2VydGlvbkNoYW1wW1wiZmlsZU5hbWVcIl0gPSBsb2dvRHJvcHpvbmVVcGRhdGUubmFtZTtcbiAgICAgICAgaW5zZXJ0aW9uQ2hhbXBbXCJmaWxlVHlwZVwiXSA9IFwiaW1hZ2VcIjtcbiAgICAgICAgaW5zZXJ0aW9uQ2hhbXBbXCJmaWxlU2l6ZVwiXSA9IGxvZ29Ecm9wem9uZVVwZGF0ZS53aWR0aDtcbiAgICAgICAgaW5zZXJ0aW9uQ2hhbXBbXCJmaWxlRGF0ZVwiXSA9ICQubm93KCk7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgICAgLy8gdXJsIDogJ2luc2VydERiJywgXG4gICAgICAgIHVybDogXCIvcHJvamV0Ni9hZG1pbi91cGRhdGUvdHJpY2svXCIgKyB0cmlja0lkICsgXCIvdXBkYXRlL2ZpbGUvXCIgKyBmaWxlSWQsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgIGRhdGE6IGluc2VydGlvbkNoYW1wLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgJChcIiNtZXNzYWdlVXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbGVydCBhbGVydC1zdWNjZXNzIHRhLWMgdy0xMDAnKVxuICAgICAgICAgICAgICAgIC5odG1sKFwiVGhlIGZpbGUgd2FzIHVwZGF0ZS5cIilcbiAgICAgICAgICAgICAgICAuZGVsYXkoMTAwMClcbiAgICAgICAgICAgICAgICAuZmFkZU91dCgxMDAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==