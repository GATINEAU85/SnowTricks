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

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

//USE WITH SYMFONY IMAGE FORM
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
}); //USE WITH DROPZONE

$(".remove").click(function () {
  confirm('This file will be remove from this add.');
});
$(".addPicture").click(function () {
  $('#modalAddFile').modal();
  $(".imagePart").show();
  $(".videoPart").hide();
});
$(".addVideo").click(function () {
  $('#modalAddFile').modal();
  $(".videoPart").show();
  $(".imagePart").hide();
}); //Add file from the modal to the datatable on the page

$(".addFileInTab").click(function () {
  //Création du tableau de parametre envoi 
  var insertionChamp = {};
  var fileId = $("#fileId").val();
  var trickId = $("#trickId").val();
  var videoInput = $("#videoLink").val();

  if (videoInput !== "") {
    if ($("#videoLink").val() !== "") {
      var videoName = $("#videoName").val();
      var videoUrl = $("#videoLink").val(); //            $("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>Video</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")

      $("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>Video</td></tr>");
      $('#modalAddFile').modal("hide");
    }

    ;
  } else {
    if (addFileTricksDropzoneForm.dropzone.files.length !== 0) {
      var fileDropzoneUpdate = addFileTricksDropzoneForm.dropzone.files[0];
      pictureName = fileDropzoneUpdate.name;
      pictureUrl = "/" + fileDropzoneUpdate.name;
      insertionChamp["fileDate"] = $.now(); //            $("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>Picture</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")

      $("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>Picture</td></tr>");
      addFileTricksDropzoneForm.dropzone.files.forEach(function (file) {
        file.previewElement.remove();
      });
      $('#modalAddFile').modal("hide");
    }

    ;
  }

  $("#videoName").val("");
  $("#videoLink").val("");
}); //$(".removeFileTricks").click(function () {
//    confirm('This file will not be insert on the creation off this trick.');
//});
//Create the tricks with all the files

$(".createTricks").click(function () {
  //Création du tableau de parametre envoi 
  if ($("#nameTricks").val() !== "" || $("#descriptionTricks").val() !== "") {
    $("#nameTricks").removeClass('is-invalid');
    $("#descriptionTricks").removeClass('is-invalid');
    var trickData = {
      nameTricks: $("#nameTricks").val(),
      groupTricks: $("#groupTricks").val(),
      descriptionTricks: $("#descriptionTricks").val(),
      files: []
    };
  } else {
    if ($("#nameTricks").val() !== "") {
      $("#nameTricks").addClass('is-invalid').focus();
      return;
    }

    ;

    if ($("#descriptionTricks").val() !== "" || $("#descriptionTricks").val().length < 25) {
      $("#descriptionTricks").addClass('is-invalid').focus();
      return;
    }
  }

  if ($("#contentTabFile > tr").length !== 0) {
    $("#contentTabFile > tr").each(function (index) {
      var fileCells = $(this).find($("td"));
      var file = {
        fileName: fileCells.prevObject[0].cells[0].innerText,
        fileUrl: fileCells.prevObject[0].cells[1].innerText,
        fileType: fileCells.prevObject[0].cells[2].innerText
      };
      trickData.files.push(file);
    });
  }

  $.ajax({
    // url : 'insertDb', 
    url: "/projet6/admin/create/tricks",
    type: 'POST',
    cache: true,
    data: trickData,
    success: function success(data) {
      if (data.status == 'succes') {
        //Dans le cas ou on a déja enregistré le fichier
        $("#statusTricksCreation").removeClass('alert-danger').addClass('alert alert-success ta-c w-100').html("This trick is created.").fadeIn(1000).delay(2000).fadeOut(1000);
      }
    },
    error: function error() {
      $("#statusTricksCreation").addClass('alert alert-danger ta-c w-100').html("An error was occured.").fadeIn(500);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/script/datatables/index.js":
/*!***********************************************!*\
  !*** ./src/assets/script/datatables/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables */ "./node_modules/datatables/media/js/jquery.dataTables.js");
/* harmony import */ var datatables__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables__WEBPACK_IMPORTED_MODULE_1__);


var tableFiles = jquery__WEBPACK_IMPORTED_MODULE_0__('#dataTableFiles').DataTable({
  "paging": false,
  "ordering": true,
  "info": false,
  searching: false,
  //    rowId: 0,
  //    "columnDefs": [
  //        {
  //            "targets": [ 0 ],
  //            "visible": false,
  //            "searchable": false
  //        }
  //    ],
  "drawCallback": function drawCallback() {
    jquery__WEBPACK_IMPORTED_MODULE_0__('#dataTableFiles tbody td:not(:last-child)').click(function (idx, ev) {
      var fileId = tableFiles.row(jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent()).data()[0];
      var url = "projet6/public/get/trick/" + fileId;

      if (idx.ctrlKey) {
        window.open(url, '_blank');
      } else {
        document.location.href = url;
      } //}

    });
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0__('#dataTableFiles a.remove').click(function () {
  if (confirm("You will delete this upload. Are you sure ?")) {
    var fileId = tableFiles.row(this.parentElement.parentElement).data()[0];
    jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
      url: 'projet6/admin/delete/upload/' + fileId
    });
    tableFiles.row(this.parentElement.parentElement).remove().draw(false);
  }
});

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


var _Dropzone$options$upd, _Dropzone$options$add, _Dropzone$options$add2;

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
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.options.addFileUserDropzoneForm = (_Dropzone$options$add = {
  paramName: "addFileUserDropzoneForm",
  addRemoveLinks: true,
  dictRemoveFile: 'DELETE'
}, _defineProperty(_Dropzone$options$add, "paramName", "file"), _defineProperty(_Dropzone$options$add, "maxFiles", 1), _defineProperty(_Dropzone$options$add, "autoprocessQueue", false), _defineProperty(_Dropzone$options$add, "init", function init() {
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
}), _Dropzone$options$add);
dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.options.addUserPhotoDropzoneForm = (_Dropzone$options$add2 = {
  paramName: "addFileUserDropzoneForm",
  addRemoveLinks: true,
  dictRemoveFile: 'DELETE'
}, _defineProperty(_Dropzone$options$add2, "paramName", "file"), _defineProperty(_Dropzone$options$add2, "maxFiles", 1), _defineProperty(_Dropzone$options$add2, "autoprocessQueue", false), _defineProperty(_Dropzone$options$add2, "init", function init() {
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
}), _Dropzone$options$add2);

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
/* harmony import */ var _datatables_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datatables/index.js */ "./src/assets/script/datatables/index.js");
/* harmony import */ var _user_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/index.js */ "./src/assets/script/user/index.js");
/* harmony import */ var _user_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_index_js__WEBPACK_IMPORTED_MODULE_7__);









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
});
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

/***/ "./src/assets/script/user/index.js":
/*!*****************************************!*\
  !*** ./src/assets/script/user/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

$(".createUser").click(function () {
  //Création du tableau de parametre envoi 
  var userData = {
    userPseudo: $("#userPseudo").val(),
    userEmail: $("#userEmail").val(),
    userPassword: $("#userPassword").val(),
    fileName: addFileUserDropzoneForm.dropzone.files[0].name
  };
  $.ajax({
    // url : 'insertDb', 
    url: "/projet6/public/create/account",
    type: 'POST',
    cache: true,
    data: userData,
    success: function success(data) {
      $("#messageUpdate").addClass('alert alert-success ta-c w-100').html("The file was update.").delay(1000).fadeOut(1000);
    }
  });
});
$(".addProfileImage").click(function () {
  $('#modalAddUerPhoto').modal();
});
$(".addUserPhoto").click(function () {
  var userData = {
    userPseudo: $("#userPseudo").val(),
    userEmail: $("#userEmail").val(),
    fileName: addUserPhotoDropzoneForm.dropzone.files[0].name
  };
  $.ajax({
    // url : 'insertDb', 
    url: "/projet6/admin/add/photoProfile",
    type: 'POST',
    cache: true,
    data: userData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2FkZEZpbGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0L2RhdGF0YWJsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvZHJvcHpvbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdC90cmlja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvdXBkYXRlRmlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHQvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiY2xpY2siLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsImxlbmd0aCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImhpZGUiLCJzY3JvbGwiLCJuYXZiYXJDb2xsYXBzZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ3aW5kb3ciLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJGNvbnRhaW5lciIsImluZGV4IiwiZmluZCIsImUiLCJhZGRDYXRlZ29yeSIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJlYWNoIiwiYWRkRGVsZXRlTGluayIsInRlbXBsYXRlIiwiYXR0ciIsIiRwcm90b3R5cGUiLCJhcHBlbmQiLCIkZGVsZXRlTGluayIsInJlbW92ZSIsImNvbmZpcm0iLCJtb2RhbCIsInNob3ciLCJpbnNlcnRpb25DaGFtcCIsImZpbGVJZCIsInZhbCIsInRyaWNrSWQiLCJ2aWRlb0lucHV0IiwidmlkZW9OYW1lIiwidmlkZW9VcmwiLCJhZGRGaWxlVHJpY2tzRHJvcHpvbmVGb3JtIiwiZHJvcHpvbmUiLCJmaWxlcyIsImZpbGVEcm9wem9uZVVwZGF0ZSIsInBpY3R1cmVOYW1lIiwibmFtZSIsInBpY3R1cmVVcmwiLCJub3ciLCJmb3JFYWNoIiwiZmlsZSIsInByZXZpZXdFbGVtZW50IiwidHJpY2tEYXRhIiwibmFtZVRyaWNrcyIsImdyb3VwVHJpY2tzIiwiZGVzY3JpcHRpb25Ucmlja3MiLCJmb2N1cyIsImZpbGVDZWxscyIsImZpbGVOYW1lIiwicHJldk9iamVjdCIsImNlbGxzIiwiaW5uZXJUZXh0IiwiZmlsZVVybCIsImZpbGVUeXBlIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY2FjaGUiLCJkYXRhIiwic3VjY2VzcyIsInN0YXR1cyIsImh0bWwiLCJmYWRlSW4iLCJkZWxheSIsImZhZGVPdXQiLCJlcnJvciIsInRhYmxlRmlsZXMiLCJEYXRhVGFibGUiLCJzZWFyY2hpbmciLCJpZHgiLCJldiIsInJvdyIsInBhcmVudCIsImN0cmxLZXkiLCJvcGVuIiwiaHJlZiIsInBhcmVudEVsZW1lbnQiLCJkcmF3IiwiRHJvcHpvbmUiLCJwcm90b3R5cGUiLCJkZWZhdWx0T3B0aW9ucyIsImRpY3REZWZhdWx0TWVzc2FnZSIsImRpY3RSZW1vdmVGaWxlIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHRlZEZpbGVzIiwibWF4RmlsZXMiLCJ1cGxvYWRNdWx0aXBsZSIsImF1dG9wcm9jZXNzUXVldWUiLCJpbml0IiwiaGlkZGVuRmlsZUlucHV0IiwicmVtb3ZlQXR0cmlidXRlIiwib24iLCJyZW1vdmVBbGxGaWxlcyIsImFkZEZpbGUiLCJvcHRpb25zIiwidXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybSIsInBhcmFtTmFtZSIsInJlbW92ZUZpbGUiLCJyZXNwb25zZSIsImFsZXJ0IiwibWVzc2FnZSIsImFkZEZpbGVVc2VyRHJvcHpvbmVGb3JtIiwiYWRkVXNlclBob3RvRHJvcHpvbmVGb3JtIiwiY29uc29sZSIsImxvZyIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJhdXRvcGxheSIsImFzTmF2Rm9yIiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiY2VudGVyTW9kZSIsImZvY3VzT25TZWxlY3QiLCJsb2dvRHJvcHpvbmVVcGRhdGUiLCJ3aWR0aCIsInVzZXJEYXRhIiwidXNlclBzZXVkbyIsInVzZXJFbWFpbCIsInVzZXJQYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxtQkFBTyxDQUFDLG1IQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUdBQUQsQ0FBUDs7QUFDQTs7QUFFQSxJQUFJQyxDQUFDLEdBQUdELG1CQUFPLENBQUMsb0RBQUQsQ0FBZjs7QUFFQyxDQUFDLFVBQVVDLENBQVYsRUFBYTtBQUNYLGVBRFcsQ0FDRztBQUVkOztBQUNBQSxHQUFDLENBQUMsZ0RBQUQsQ0FBRCxDQUFvREMsS0FBcEQsQ0FBMEQsWUFBWTtBQUNsRSxRQUNJQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLE1BQXlDLEtBQUtELFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixDQUF6QyxJQUE2RUYsUUFBUSxDQUFDRyxRQUFULEtBQXNCLEtBQUtBLFFBRDVHLEVBRUU7QUFDRSxVQUFJQyxNQUFNLEdBQUdOLENBQUMsQ0FBQyxLQUFLTyxJQUFOLENBQWQ7QUFDQUQsWUFBTSxHQUFHQSxNQUFNLENBQUNFLE1BQVAsR0FDSEYsTUFERyxHQUVITixDQUFDLENBQUMsV0FBVyxLQUFLTyxJQUFMLENBQVVFLEtBQVYsQ0FBZ0Is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Q3JCNUUsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FDS2lCLFFBREwsQ0FDYyxnQ0FEZCxFQUVLOEQsSUFGTCxDQUVVLHNCQUZWLEVBR0tFLEtBSEwsQ0FHVyxJQUhYLEVBSUtDLE9BSkwsQ0FJYSxJQUpiO0FBS0g7QUFaRSxHQUFQO0FBY0gsQ0FyQkQsRTs7Ozs7Ozs7Ozs7O0FDN0JBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3JpcHQvaW5kZXguanMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnanF1ZXJ5JztcclxuaW1wb3J0ICdqcXVlcnktdWknO1xyXG5pbXBvcnQgJ2Ryb3B6b25lJztcclxucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XHJcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4gKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxyXG5cclxuICAgIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xyXG4gICAgJCgnYS5qcy1zY3JvbGwtdHJpZ2dlcltocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgPT09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09PSB0aGlzLmhvc3RuYW1lXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICA6ICQoXCJbbmFtZT1cIiArIHRoaXMuaGFzaC5zbGljZSgxKSArIFwiXVwiKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcyfSwgMTAwMCwgXCJzd2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlcyByZXNwb25zaXZlIG1lbnUgd2hlbiBhIHNjcm9sbCB0cmlnZ2VyIGxpbmsgaXMgY2xpY2tlZFxyXG4gICAgJChcIi5qcy1zY3JvbGwtdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWN0aXZhdGUgc2Nyb2xsc3B5IHRvIGFkZCBhY3RpdmUgY2xhc3MgdG8gbmF2YmFyIGl0ZW1zIG9uIHNjcm9sbFxyXG4gICAgJChcImJvZHlcIikuc2Nyb2xsKHtcclxuICAgICAgICB0YXJnZXQ6IFwiI21haW5OYXZcIixcclxuICAgICAgICBvZmZzZXQ6IDc0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29sbGFwc2UgTmF2YmFyXHJcbiAgICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjbWFpbk5hdlwiKS5vZmZzZXQoKS50b3AgPiAxMDApIHtcclxuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBDb2xsYXBzZSBub3cgaWYgcGFnZSBpcyBub3QgYXQgdG9wXHJcbiAgICBuYXZiYXJDb2xsYXBzZSgpO1xyXG4gICAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcclxuICAgICQod2luZG93KS5zY3JvbGwobmF2YmFyQ29sbGFwc2UpO1xyXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxyXG4iLCIgLy9VU0UgV0lUSCBTWU1GT05ZIElNQUdFIEZPUk1cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIE9uIHLDqWN1cMOocmUgbGEgYmFsaXNlIDxkaXY+IGVuIHF1ZXN0aW9uIHF1aSBjb250aWVudCBsJ2F0dHJpYnV0IMKrIGRhdGEtcHJvdG90eXBlIMK7IHF1aSBub3VzIGludMOpcmVzc2UuXG4gICAgdmFyICRjb250YWluZXIgPSAkKCdkaXYjdHJpY2tzX3RyaWNrc0ZpbGVzJyk7XG5cbiAgICAvLyBPbiBkw6lmaW5pdCB1biBjb21wdGV1ciB1bmlxdWUgcG91ciBub21tZXIgbGVzIGNoYW1wcyBxdSdvbiB2YSBham91dGVyIGR5bmFtaXF1ZW1lbnRcbiAgICB2YXIgaW5kZXggPSAkY29udGFpbmVyLmZpbmQoJzppbnB1dCcpLmxlbmd0aDtcblxuICAgIC8vIE9uIGFqb3V0ZSB1biBub3V2ZWF1IGNoYW1wIMOgIGNoYXF1ZSBjbGljIHN1ciBsZSBsaWVuIGQnYWpvdXQuXG4gICAgJCgnI2FkZF9jYXRlZ29yeScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFkZENhdGVnb3J5KCRjb250YWluZXIpO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIMOpdml0ZSBxdSd1biAjIGFwcGFyYWlzc2UgZGFucyBsJ1VSTFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gT24gYWpvdXRlIHVuIHByZW1pZXIgY2hhbXAgYXV0b21hdGlxdWVtZW50IHMnaWwgbidlbiBleGlzdGUgcGFzIGTDqWrDoCB1biAoY2FzIGQndW5lIG5vdXZlbGxlIGFubm9uY2UgcGFyIGV4ZW1wbGUpLlxuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICBhZGRDYXRlZ29yeSgkY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUydpbCBleGlzdGUgZMOpasOgIGRlcyBjYXTDqWdvcmllcywgb24gYWpvdXRlIHVuIGxpZW4gZGUgc3VwcHJlc3Npb24gcG91ciBjaGFjdW5lIGQnZW50cmUgZWxsZXNcbiAgICAgICRjb250YWluZXIuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZERlbGV0ZUxpbmsoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMYSBmb25jdGlvbiBxdWkgYWpvdXRlIHVuIGZvcm11bGFpcmUgQ2F0ZWdvcnlUeXBlXG4gICAgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkoJGNvbnRhaW5lcikge1xuICAgICAgLy8gRGFucyBsZSBjb250ZW51IGRlIGwnYXR0cmlidXQgwqsgZGF0YS1wcm90b3R5cGUgwrssIG9uIHJlbXBsYWNlIDpcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX2xhYmVsX19cIiBxdSdpbCBjb250aWVudCBwYXIgbGUgbGFiZWwgZHUgY2hhbXBcbiAgICAgIC8vIC0gbGUgdGV4dGUgXCJfX25hbWVfX1wiIHF1J2lsIGNvbnRpZW50IHBhciBsZSBudW3DqXJvIGR1IGNoYW1wXG4gICAgICB2YXIgdGVtcGxhdGUgPSAkY29udGFpbmVyLmF0dHIoJ2RhdGEtcHJvdG90eXBlJylcbiAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fbGFiZWxfXy9nLCAnRmlsZSBuwrAnICsgKGluZGV4KzEpKVxuICAgICAgICAucmVwbGFjZSgvX19uYW1lX18vZywgICAgICAgIGluZGV4KVxuICAgICAgO1xuXG4gICAgICAvLyBPbiBjcsOpZSB1biBvYmpldCBqcXVlcnkgcXVpIGNvbnRpZW50IGNlIHRlbXBsYXRlXG4gICAgICB2YXIgJHByb3RvdHlwZSA9ICQodGVtcGxhdGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgYXUgcHJvdG90eXBlIHVuIGxpZW4gcG91ciBwb3V2b2lyIHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICBhZGREZWxldGVMaW5rKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBPbiBham91dGUgbGUgcHJvdG90eXBlIG1vZGlmacOpIMOgIGxhIGZpbiBkZSBsYSBiYWxpc2UgPGRpdj5cbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRwcm90b3R5cGUpO1xuXG4gICAgICAvLyBFbmZpbiwgb24gaW5jcsOpbWVudGUgbGUgY29tcHRldXIgcG91ciBxdWUgbGUgcHJvY2hhaW4gYWpvdXQgc2UgZmFzc2UgYXZlYyB1biBhdXRyZSBudW3DqXJvXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIC8vIExhIGZvbmN0aW9uIHF1aSBham91dGUgdW4gbGllbiBkZSBzdXBwcmVzc2lvbiBkJ3VuZSBjYXTDqWdvcmllXG4gICAgZnVuY3Rpb24gYWRkRGVsZXRlTGluaygkcHJvdG90eXBlKSB7XG4gICAgICAvLyBDcsOpYXRpb24gZHUgbGllblxuICAgICAgdmFyICRkZWxldGVMaW5rID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlPC9hPicpO1xuXG4gICAgICAvLyBBam91dCBkdSBsaWVuXG4gICAgICAkcHJvdG90eXBlLmFwcGVuZCgkZGVsZXRlTGluayk7XG5cbiAgICAgIC8vIEFqb3V0IGR1IGxpc3RlbmVyIHN1ciBsZSBjbGljIGR1IGxpZW4gcG91ciBlZmZlY3RpdmVtZW50IHN1cHByaW1lciBsYSBjYXTDqWdvcmllXG4gICAgICAkZGVsZXRlTGluay5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICRwcm90b3R5cGUucmVtb3ZlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDDqXZpdGUgcXUndW4gIyBhcHBhcmFpc3NlIGRhbnMgbCdVUkxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxufSk7XG4gIFxuLy9VU0UgV0lUSCBEUk9QWk9ORVxuJChcIi5yZW1vdmVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNvbmZpcm0oJ1RoaXMgZmlsZSB3aWxsIGJlIHJlbW92ZSBmcm9tIHRoaXMgYWRkLicpO1xufSk7XG5cbiQoXCIuYWRkUGljdHVyZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnI21vZGFsQWRkRmlsZScpLm1vZGFsKCk7XG4gICAgJChcIi5pbWFnZVBhcnRcIikuc2hvdygpO1xuICAgICQoXCIudmlkZW9QYXJ0XCIpLmhpZGUoKTtcbn0pO1xuXG4kKFwiLmFkZFZpZGVvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbW9kYWxBZGRGaWxlJykubW9kYWwoKTtcbiAgICAkKFwiLnZpZGVvUGFydFwiKS5zaG93KCk7XG4gICAgJChcIi5pbWFnZVBhcnRcIikuaGlkZSgpO1xufSk7XG5cbi8vQWRkIGZpbGUgZnJvbSB0aGUgbW9kYWwgdG8gdGhlIGRhdGF0YWJsZSBvbiB0aGUgcGFnZVxuJChcIi5hZGRGaWxlSW5UYWJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vQ3LDqWF0aW9uIGR1IHRhYmxlYXUgZGUgcGFyYW1ldHJlIGVudm9pIFxuICAgIHZhciBpbnNlcnRpb25DaGFtcCA9IHt9O1xuICAgIHZhciBmaWxlSWQgPSAkKFwiI2ZpbGVJZFwiKS52YWwoKTtcbiAgICB2YXIgdHJpY2tJZCA9ICQoXCIjdHJpY2tJZFwiKS52YWwoKTtcbiAgICB2YXIgdmlkZW9JbnB1dCA9ICQoXCIjdmlkZW9MaW5rXCIpLnZhbCgpO1xuXG4gICAgaWYgKHZpZGVvSW5wdXQgIT09IFwiXCIpe1xuICAgICAgICBpZigkKFwiI3ZpZGVvTGlua1wiKS52YWwoKSAhPT0gXCJcIil7XG4gICAgICAgICAgICB2YXIgdmlkZW9OYW1lID0gJChcIiN2aWRlb05hbWVcIikudmFsKCk7XG4gICAgICAgICAgICB2YXIgdmlkZW9VcmwgPSAkKFwiI3ZpZGVvTGlua1wiKS52YWwoKTtcbi8vICAgICAgICAgICAgJChcIiNjb250ZW50VGFiRmlsZVwiKS5hcHBlbmQoXCI8dHI+PHRkPlwiICsgdmlkZW9OYW1lICsgXCI8L3RkPjx0ZCBjbGFzcz0nY3VyLXAnPlwiICsgdmlkZW9VcmwgKyBcIjwvdGQ+PHRkPlZpZGVvPC90ZD48dGQ+PGEgY2xhc3M9J3JlbW92ZUZpbGVUcmlja3MgY3VyLXAnPjxpIGNsYXNzPSdmYXMgZmEtdHJhc2gnPjwvaT48L2E+PC90ZD48L3RyPlwiKVxuICAgICAgICAgICAgJChcIiNjb250ZW50VGFiRmlsZVwiKS5hcHBlbmQoXCI8dHI+PHRkPlwiICsgdmlkZW9OYW1lICsgXCI8L3RkPjx0ZCBjbGFzcz0nY3VyLXAnPlwiICsgdmlkZW9VcmwgKyBcIjwvdGQ+PHRkPlZpZGVvPC90ZD48L3RyPlwiKVxuICAgICAgICAgICAgJCgnI21vZGFsQWRkRmlsZScpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgfTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYgKGFkZEZpbGVUcmlja3NEcm9wem9uZUZvcm0uZHJvcHpvbmUuZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZmlsZURyb3B6b25lVXBkYXRlID0gYWRkRmlsZVRyaWNrc0Ryb3B6b25lRm9ybS5kcm9wem9uZS5maWxlc1swXTtcbiAgICAgICAgICAgIHBpY3R1cmVOYW1lID0gZmlsZURyb3B6b25lVXBkYXRlLm5hbWU7XG4gICAgICAgICAgICBwaWN0dXJlVXJsID0gXCIvXCIgKyBmaWxlRHJvcHpvbmVVcGRhdGUubmFtZTtcbiAgICAgICAgICAgIGluc2VydGlvbkNoYW1wW1wiZmlsZURhdGVcIl0gPSAkLm5vdygpO1xuLy8gICAgICAgICAgICAkKFwiI2NvbnRlbnRUYWJGaWxlXCIpLmFwcGVuZChcIjx0cj48dGQ+XCIgKyBwaWN0dXJlTmFtZSArIFwiPC90ZD48dGQgY2xhc3M9J2N1ci1wJz5cIiArIHBpY3R1cmVVcmwgKyBcIjwvdGQ+PHRkPlBpY3R1cmU8L3RkPjx0ZD48YSBjbGFzcz0ncmVtb3ZlRmlsZVRyaWNrcyBjdXItcCc+PGkgY2xhc3M9J2ZhcyBmYS10cmFzaCc+PC9pPjwvYT48L3RkPjwvdHI+XCIpXG4gICAgICAgICAgICAkKFwiI2NvbnRlbnRUYWJGaWxlXCIpLmFwcGVuZChcIjx0cj48dGQ+XCIgKyBwaWN0dXJlTmFtZSArIFwiPC90ZD48dGQgY2xhc3M9J2N1ci1wJz5cIiArIHBpY3R1cmVVcmwgKyBcIjwvdGQ+PHRkPlBpY3R1cmU8L3RkPjwvdHI+XCIpXG4gICAgICAgICAgICBhZGRGaWxlVHJpY2tzRHJvcHpvbmVGb3JtLmRyb3B6b25lLmZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkgeyBcbiAgICAgICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnJlbW92ZSgpOyBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI21vZGFsQWRkRmlsZScpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgJChcIiN2aWRlb05hbWVcIikudmFsKFwiXCIpO1xuICAgICQoXCIjdmlkZW9MaW5rXCIpLnZhbChcIlwiKTtcbn0pO1xuXG4vLyQoXCIucmVtb3ZlRmlsZVRyaWNrc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4vLyAgICBjb25maXJtKCdUaGlzIGZpbGUgd2lsbCBub3QgYmUgaW5zZXJ0IG9uIHRoZSBjcmVhdGlvbiBvZmYgdGhpcyB0cmljay4nKTtcbi8vfSk7XG5cbi8vQ3JlYXRlIHRoZSB0cmlja3Mgd2l0aCBhbGwgdGhlIGZpbGVzXG4kKFwiLmNyZWF0ZVRyaWNrc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgLy9DcsOpYXRpb24gZHUgdGFibGVhdSBkZSBwYXJhbWV0cmUgZW52b2kgXG4gICAgaWYgKCQoXCIjbmFtZVRyaWNrc1wiKS52YWwoKSAhPT0gXCJcIiB8fCAkKFwiI2Rlc2NyaXB0aW9uVHJpY2tzXCIpLnZhbCgpICE9PSBcIlwiICkge1xuICAgICAgICAkKFwiI25hbWVUcmlja3NcIikucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgJChcIiNkZXNjcmlwdGlvblRyaWNrc1wiKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuICAgICAgICB2YXIgdHJpY2tEYXRhID0ge1xuICAgICAgICAgICAgbmFtZVRyaWNrczogJChcIiNuYW1lVHJpY2tzXCIpLnZhbCgpLFxuICAgICAgICAgICAgZ3JvdXBUcmlja3M6ICQoXCIjZ3JvdXBUcmlja3NcIikudmFsKCksXG4gICAgICAgICAgICBkZXNjcmlwdGlvblRyaWNrczogJChcIiNkZXNjcmlwdGlvblRyaWNrc1wiKS52YWwoKSwgXG4gICAgICAgICAgICBmaWxlczogW11cbiAgICAgICAgfTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYgKCQoXCIjbmFtZVRyaWNrc1wiKS52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgJChcIiNuYW1lVHJpY2tzXCIpLmFkZENsYXNzKCdpcy1pbnZhbGlkJykuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCQoXCIjZGVzY3JpcHRpb25Ucmlja3NcIikudmFsKCkgIT09IFwiXCIgfHwgJChcIiNkZXNjcmlwdGlvblRyaWNrc1wiKS52YWwoKS5sZW5ndGggPCAyNSkge1xuICAgICAgICAgICAgJChcIiNkZXNjcmlwdGlvblRyaWNrc1wiKS5hZGRDbGFzcygnaXMtaW52YWxpZCcpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIGlmICgkKFwiI2NvbnRlbnRUYWJGaWxlID4gdHJcIikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICQoIFwiI2NvbnRlbnRUYWJGaWxlID4gdHJcIiApLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlQ2VsbHMgPSAkKHRoaXMpLmZpbmQoJChcInRkXCIpKTtcbiAgICAgICAgICAgIHZhciBmaWxlID0ge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlQ2VsbHMucHJldk9iamVjdFswXS5jZWxsc1swXS5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgZmlsZVVybDogZmlsZUNlbGxzLnByZXZPYmplY3RbMF0uY2VsbHNbMV0uaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgIGZpbGVUeXBlOiBmaWxlQ2VsbHMucHJldk9iamVjdFswXS5jZWxsc1syXS5pbm5lclRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmlja0RhdGEuZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgICAgLy8gdXJsIDogJ2luc2VydERiJywgXG4gICAgICAgIHVybDogXCIvcHJvamV0Ni9hZG1pbi9jcmVhdGUvdHJpY2tzXCIsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgIGRhdGE6IHRyaWNrRGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXMnKXtcbiAgICAgICAgICAgICAgICAvL0RhbnMgbGUgY2FzIG91IG9uIGEgZMOpamEgZW5yZWdpc3Ryw6kgbGUgZmljaGllclxuICAgICAgICAgICAgICAgICQoXCIjc3RhdHVzVHJpY2tzQ3JlYXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MgdGEtYyB3LTEwMCcpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKFwiVGhpcyB0cmljayBpcyBjcmVhdGVkLlwiKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZUluKDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgyMDAwKVxuICAgICAgICAgICAgICAgICAgICAuZmFkZU91dCgxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgICQoXCIjc3RhdHVzVHJpY2tzQ3JlYXRpb25cIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LWRhbmdlciB0YS1jIHctMTAwJylcbiAgICAgICAgICAgICAgICAuaHRtbChcIkFuIGVycm9yIHdhcyBvY2N1cmVkLlwiKVxuICAgICAgICAgICAgICAgIC5mYWRlSW4oNTAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdkYXRhdGFibGVzJztcblxudmFyIHRhYmxlRmlsZXMgPSAkKCcjZGF0YVRhYmxlRmlsZXMnKS5EYXRhVGFibGUoe1xuICAgIFwicGFnaW5nXCI6ICAgZmFsc2UsXG4gICAgXCJvcmRlcmluZ1wiOiB0cnVlLFxuICAgIFwiaW5mb1wiOiAgICAgZmFsc2UsXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbi8vICAgIHJvd0lkOiAwLFxuLy8gICAgXCJjb2x1bW5EZWZzXCI6IFtcbi8vICAgICAgICB7XG4vLyAgICAgICAgICAgIFwidGFyZ2V0c1wiOiBbIDAgXSxcbi8vICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlLFxuLy8gICAgICAgICAgICBcInNlYXJjaGFibGVcIjogZmFsc2Vcbi8vICAgICAgICB9XG4vLyAgICBdLFxuICAgIFwiZHJhd0NhbGxiYWNrXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcjZGF0YVRhYmxlRmlsZXMgdGJvZHkgdGQ6bm90KDpsYXN0LWNoaWxkKScpLmNsaWNrKGZ1bmN0aW9uIChpZHgsIGV2KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVJZCA9IHRhYmxlRmlsZXMucm93KCAkKHRoaXMpLnBhcmVudCgpICkuZGF0YSgpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcInByb2pldDYvcHVibGljL2dldC90cmljay9cIiArIGZpbGVJZDtcblxuICAgICAgICAgICAgICAgIGlmIChpZHguY3RybEtleSl7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwnX2JsYW5rJylcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfSk7XG5cbiAgICB9LFxufSk7XG5cbiQoJyNkYXRhVGFibGVGaWxlcyBhLnJlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgaWYoY29uZmlybShcIllvdSB3aWxsIGRlbGV0ZSB0aGlzIHVwbG9hZC4gQXJlIHlvdSBzdXJlID9cIikpe1xuICAgICAgICB2YXIgZmlsZUlkID0gdGFibGVGaWxlcy5yb3codGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpLmRhdGEoKVswXTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJ3Byb2pldDYvYWRtaW4vZGVsZXRlL3VwbG9hZC8nICsgZmlsZUlkLFxuICAgICAgICB9KVxuICAgICAgICB0YWJsZUZpbGVzLnJvdyh0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkucmVtb3ZlKCkuZHJhdyggZmFsc2UgKTtcbiAgICB9XG59KTtcbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICdkcm9wem9uZSc7XG5pbXBvcnQgJ2Ryb3B6b25lL2Rpc3QvZHJvcHpvbmUuY3NzJztcblxuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3REZWZhdWx0TWVzc2FnZSA9IFwiVGhlIGZpbGUgbXVzdCBiZSBsZXNzIHRoYW4gMjU2IE1vLlwiO1xuRHJvcHpvbmUucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zLmRpY3RSZW1vdmVGaWxlID0gXCJERUxFVEVcIjtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5hZGRSZW1vdmVMaW5rcyA9IHRydWU7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuYWNjZXB0ZWRGaWxlcyA9IFwiLmpwZWcsLmpwZywucG5nLC5naWZcIjtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5tYXhGaWxlcyA9IDE7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMudXBsb2FkTXVsdGlwbGUgPSBmYWxzZTtcbkRyb3B6b25lLnByb3RvdHlwZS5kZWZhdWx0T3B0aW9ucy5hdXRvcHJvY2Vzc1F1ZXVlID0gZmFsc2U7XG5Ecm9wem9uZS5wcm90b3R5cGUuZGVmYXVsdE9wdGlvbnMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ211bHRpcGxlJyk7XG4gICAgdGhpcy5vbihcIm1heGZpbGVzZXhjZWVkZWRcIiwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxGaWxlcygpO1xuICAgICAgICB0aGlzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG59O1xuXG5cbkRyb3B6b25lLm9wdGlvbnMudXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybSA9IHtcbiAgICBwYXJhbU5hbWU6IFwidXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybVwiLFxuICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxuICAgIGRpY3RSZW1vdmVGaWxlOiAnREVMRVRFJyxcbiAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxuICAgIG1heEZpbGVzOiAxLFxuICAgIGF1dG9wcm9jZXNzUXVldWU6IGZhbHNlLFxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXNbMV0hPW51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oXCJzdWNjZXNzXCIsIGZ1bmN0aW9uKGZpbGUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL3NpIG9uIGEgdW5lIGVycmV1ciBzdXIgbGUgY2hhcmdlbWVudFxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IFwiZXJyb3JcIil7XG4gICAgICAgICAgICAgICAgYWxlcnQgKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0vKmVsc2V7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb05hbWU7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb1NpemVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5sb2dvRm9ybWF0XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb1VSSVxuICAgICAgICAgICAgfSovXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbkRyb3B6b25lLm9wdGlvbnMuYWRkRmlsZVVzZXJEcm9wem9uZUZvcm0gPSB7XG4gICAgcGFyYW1OYW1lOiBcImFkZEZpbGVVc2VyRHJvcHpvbmVGb3JtXCIsXG4gICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXG4gICAgZGljdFJlbW92ZUZpbGU6ICdERUxFVEUnLFxuICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgbWF4RmlsZXM6IDEsXG4gICAgYXV0b3Byb2Nlc3NRdWV1ZTogZmFsc2UsXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub24oXCJhZGRlZGZpbGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlc1sxXSE9bnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKHRoaXMuZmlsZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vc2kgb24gYSB1bmUgZXJyZXVyIHN1ciBsZSBjaGFyZ2VtZW50XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gXCJlcnJvclwiKXtcbiAgICAgICAgICAgICAgICBhbGVydCAocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfS8qZWxzZXtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5sb2dvTmFtZTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5sb2dvU2l6ZVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmxvZ29Gb3JtYXRcbiAgICAgICAgICAgICAgICByZXNwb25zZS5sb2dvVVJJXG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuXG5Ecm9wem9uZS5vcHRpb25zLmFkZFVzZXJQaG90b0Ryb3B6b25lRm9ybSA9IHtcbiAgICBwYXJhbU5hbWU6IFwiYWRkRmlsZVVzZXJEcm9wem9uZUZvcm1cIixcbiAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcbiAgICBkaWN0UmVtb3ZlRmlsZTogJ0RFTEVURScsXG4gICAgcGFyYW1OYW1lOiBcImZpbGVcIiwgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcbiAgICBtYXhGaWxlczogMSxcbiAgICBhdXRvcHJvY2Vzc1F1ZXVlOiBmYWxzZSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vbihcImFkZGVkZmlsZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzWzFdIT1udWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWxlc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKFwic3VjY2Vzc1wiLCBmdW5jdGlvbihmaWxlLCByZXNwb25zZSkge1xuICAgICAgICAgICAgLy9zaSBvbiBhIHVuZSBlcnJldXIgc3VyIGxlIGNoYXJnZW1lbnRcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSBcImVycm9yXCIpe1xuICAgICAgICAgICAgICAgIGFsZXJ0IChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9LyplbHNle1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmxvZ29OYW1lO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmxvZ29TaXplXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UubG9nb0Zvcm1hdFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmxvZ29VUklcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5cbiIsImltcG9ydCAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi90cmlja3MvaW5kZXguanMnO1xyXG5pbXBvcnQgJy4vbmF2aWdhdGlvbi9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9hZGRGaWxlcy9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi91cGRhdGVGaWxlcy9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9kcm9wem9uZS9pbmRleC5qcyc7XHJcbmltcG9ydCAnLi9kYXRhdGFibGVzL2luZGV4LmpzJztcclxuaW1wb3J0ICcuL3VzZXIvaW5kZXguanMnO1xyXG4iLCIvL2ltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyc7XHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnNvbGUubG9nKCQpO1xyXG5cclxuJChcIiNuYXZDb250YWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gIGFsZXJ0KFwiSGFuZGxlciBmb3IgLmNsaWNrKCkgY2FsbGVkLlwiKTtcclxufSk7XHJcblxyXG4vL2RvY3VtZW50LmhpZGUoXCIjbmF2Q29udGFjdFwiKTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcclxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljayc7XHJcblxyXG4kKFwiI2Nhcm91c2VsRmlsZVwiKS5zbGljayh7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNzAwLFxyXG4gICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgIGFzTmF2Rm9yOiAnI2Nhcm91c2VsRmlsZXMnLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgIGFycm93czp0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDFcclxufSk7XHJcbi8vfSk7XHJcbiQoJyNjYXJvdXNlbEZpbGVzJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhc05hdkZvcjogJyNjYXJvdXNlbEZpbGUnLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICBhcnJvd3M6ZmFsc2UsXHJcbiAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxufSk7IiwiXG4kKFwiLmRlbGV0ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY29uZmlybSgnVGhpcyBmaWxlIHdpbGwgYmUgZGVsZXRlIGZyb20gdGhpcyB0cmlja3MnKTtcbn0pO1xuXG4kKFwiLnVwZGF0ZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnI21vZGFsVXBkYXRlRmlsZScpLm1vZGFsKCk7XG4gICAgJChcIiNmaWxlSWRcIikudmFsKCQodGhpcykuYXR0cihcImZpbGVcIikpO1xufSk7XG5cbiQoXCIuZGVsZXRlVHJpY2tzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjb25maXJtKCdUaGlzIHRyaWNrcyB3aWxsIGJlIHJlbW92ZSBmcm9tIFNub3dUcmlja3MsIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyA/Jyk7XG59KTtcblxuXG4kKFwiLnVwZGF0ZUZpbGVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vQ3LDqWF0aW9uIGR1IHRhYmxlYXUgZGUgcGFyYW1ldHJlIGVudm9pIFxuICAgIHZhciBpbnNlcnRpb25DaGFtcCA9IHt9O1xuICAgIHZhciBmaWxlSWQgPSAkKFwiI2ZpbGVJZFwiKS52YWwoKTtcbiAgICB2YXIgdHJpY2tJZCA9ICQoXCIjdHJpY2tJZFwiKS52YWwoKTtcblxuICAgIGlmICh1cGRhdGVGaWxlVHJpY2tzRHJvcHpvbmVGb3JtLmRyb3B6b25lLmZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB2YXIgbG9nb0Ryb3B6b25lVXBkYXRlID0gdXBkYXRlRmlsZVRyaWNrc0Ryb3B6b25lRm9ybS5kcm9wem9uZS5maWxlc1swXTtcbiAgICAgICAgaW5zZXJ0aW9uQ2hhbXBbXCJmaWxlTmFtZVwiXSA9IGxvZ29Ecm9wem9uZVVwZGF0ZS5uYW1lO1xuICAgICAgICBpbnNlcnRpb25DaGFtcFtcImZpbGVUeXBlXCJdID0gXCJpbWFnZVwiO1xuICAgICAgICBpbnNlcnRpb25DaGFtcFtcImZpbGVTaXplXCJdID0gbG9nb0Ryb3B6b25lVXBkYXRlLndpZHRoO1xuICAgICAgICBpbnNlcnRpb25DaGFtcFtcImZpbGVEYXRlXCJdID0gJC5ub3coKTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICAvLyB1cmwgOiAnaW5zZXJ0RGInLCBcbiAgICAgICAgdXJsOiBcIi9wcm9qZXQ2L2FkbWluL3VwZGF0ZS90cmljay9cIiArIHRyaWNrSWQgKyBcIi91cGRhdGUvZmlsZS9cIiArIGZpbGVJZCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgZGF0YTogaW5zZXJ0aW9uQ2hhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAkKFwiI21lc3NhZ2VVcGRhdGVcIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MgdGEtYyB3LTEwMCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoXCJUaGUgZmlsZSB3YXMgdXBkYXRlLlwiKVxuICAgICAgICAgICAgICAgIC5kZWxheSgxMDAwKVxuICAgICAgICAgICAgICAgIC5mYWRlT3V0KDEwMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIkKFwiLmNyZWF0ZVVzZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIC8vQ3LDqWF0aW9uIGR1IHRhYmxlYXUgZGUgcGFyYW1ldHJlIGVudm9pIFxuICAgIHZhciB1c2VyRGF0YSA9IHtcbiAgICAgICAgdXNlclBzZXVkbzogJChcIiN1c2VyUHNldWRvXCIpLnZhbCgpLFxuICAgICAgICB1c2VyRW1haWw6ICQoXCIjdXNlckVtYWlsXCIpLnZhbCgpLFxuICAgICAgICB1c2VyUGFzc3dvcmQ6ICQoXCIjdXNlclBhc3N3b3JkXCIpLnZhbCgpLFxuICAgICAgICBmaWxlTmFtZTogYWRkRmlsZVVzZXJEcm9wem9uZUZvcm0uZHJvcHpvbmUuZmlsZXNbMF0ubmFtZVxuICAgIH07XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICAvLyB1cmwgOiAnaW5zZXJ0RGInLCBcbiAgICAgICAgdXJsOiBcIi9wcm9qZXQ2L3B1YmxpYy9jcmVhdGUvYWNjb3VudFwiLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoXCIjbWVzc2FnZVVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWxlcnQgYWxlcnQtc3VjY2VzcyB0YS1jIHctMTAwJylcbiAgICAgICAgICAgICAgICAuaHRtbChcIlRoZSBmaWxlIHdhcyB1cGRhdGUuXCIpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEwMDApXG4gICAgICAgICAgICAgICAgLmZhZGVPdXQoMTAwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4kKFwiLmFkZFByb2ZpbGVJbWFnZVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnI21vZGFsQWRkVWVyUGhvdG8nKS5tb2RhbCgpO1xufSk7XG5cbiQoXCIuYWRkVXNlclBob3RvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckRhdGEgPSB7XG4gICAgICAgIHVzZXJQc2V1ZG86ICQoXCIjdXNlclBzZXVkb1wiKS52YWwoKSxcbiAgICAgICAgdXNlckVtYWlsOiAkKFwiI3VzZXJFbWFpbFwiKS52YWwoKSxcbiAgICAgICAgZmlsZU5hbWU6IGFkZFVzZXJQaG90b0Ryb3B6b25lRm9ybS5kcm9wem9uZS5maWxlc1swXS5uYW1lXG4gICAgfTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIC8vIHVybCA6ICdpbnNlcnREYicsIFxuICAgICAgICB1cmw6IFwiL3Byb2pldDYvYWRtaW4vYWRkL3Bob3RvUHJvZmlsZVwiLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICQoXCIjbWVzc2FnZVVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWxlcnQgYWxlcnQtc3VjY2VzcyB0YS1jIHctMTAwJylcbiAgICAgICAgICAgICAgICAuaHRtbChcIlRoZSBmaWxlIHdhcyB1cGRhdGUuXCIpXG4gICAgICAgICAgICAgICAgLmRlbGF5KDEwMDApXG4gICAgICAgICAgICAgICAgLmZhZGVPdXQoMTAwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=