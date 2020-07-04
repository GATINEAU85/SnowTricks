 //USE WITH SYMFONY IMAGE FORM
$(document).ready(function() {
    // On récupère la balise <div> en question qui contient l'attribut « data-prototype » qui nous intéresse.
    var $container = $("div#tricks_tricksFiles");

    // On définit un compteur unique pour nommer les champs qu'on va ajouter dynamiquement
    var index = $container.find(":input").length;

    // On ajoute un nouveau champ à chaque clic sur le lien d'ajout.
    $("#add_category").click(function(e) {
      addCategory($container);

      e.preventDefault(); // évite qu'un # apparaisse dans l'URL
      return false;
    });

    // On ajoute un premier champ automatiquement s'il n'en existe pas déjà un (cas d'une nouvelle annonce par exemple).
    if (index === 0) {
      addCategory($container);
    } else {
      // S'il existe déjà des catégories, on ajoute un lien de suppression pour chacune d'entre elles
      $container.children('div').each(function() {
        addDeleteLink($(this));
      });
    }

    // La fonction qui ajoute un formulaire CategoryType
    function addCategory($container) {
      // Dans le contenu de l'attribut « data-prototype », on remplace :
      // - le texte "__name__label__" qu'il contient par le label du champ
      // - le texte "__name__" qu'il contient par le numéro du champ
      var template = $container.attr("data-prototype")
        .replace(/__name__label__/g, 'File n°' + (index+1))
        .replace(/__name__/g,        index)
      ;

      // On crée un objet jquery qui contient ce template
      var $prototype = $(template);

      // On ajoute au prototype un lien pour pouvoir supprimer la catégorie
      addDeleteLink($prototype);

      // On ajoute le prototype modifié à la fin de la balise <div>
      $container.append($prototype);

      // Enfin, on incrémente le compteur pour que le prochain ajout se fasse avec un autre numéro
      index++;
    }

    // La fonction qui ajoute un lien de suppression d'une catégorie
    function addDeleteLink($prototype) {
      // Création du lien
      var $deleteLink = $("<a href='#' class='btn btn-danger'>Delete</a>");

      // Ajout du lien
      $prototype.append($deleteLink);

      // Ajout du listener sur le clic du lien pour effectivement supprimer la catégorie
      $deleteLink.click(function(e) {
        $prototype.remove();

        e.preventDefault(); // évite qu'un # apparaisse dans l'URL
        return false;
      });
    }
});
  
//USE WITH DROPZONE
$(".remove").click(function () {
    confirm("This file will be remove from this add.");
});

$(".addPicture").click(function () {
    $("#modalAddFile").modal();
    $(".imagePart").show();
    $(".videoPart").hide();
});

$(".addVideo").click(function () {
    $('#modalAddFile').modal();
    $(".videoPart").show();
    $(".imagePart").hide();
});

//Add file from the modal to the datatable on the page
$(".addFileInTab").click(function () {
    //Création du tableau de parametre envoi 
    var insertionChamp = {};
    var fileId = $("#fileId").val();
    var trickId = $("#trickId").val();
    var videoInput = $("#videoLink").val();

    if (videoInput !== ""){
        if($("#videoLink").val() !== ""){
            var videoName = $("#videoName").val();
            var videoUrl = $("#videoLink").val();
//            $("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>Video</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")
            $("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>video</td></tr>")
            $('#modalAddFile').modal("hide");
        };
    }else{
        if (addFileTricksDropzoneForm.dropzone.files.length !== 0) {
            var fileDropzoneUpdate = addFileTricksDropzoneForm.dropzone.files[0];
            pictureName = fileDropzoneUpdate.name;
            pictureUrl = "/" + fileDropzoneUpdate.name;
            insertionChamp["fileDate"] = $.now();
//            $("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>Picture</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")
            $("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>image</td></tr>")
            addFileTricksDropzoneForm.dropzone.files.forEach(function(file) { 
                file.previewElement.remove(); 
            });
            $("#modalAddFile").modal("hide");
        };
    }
    
    $("#videoName").val("");
    $("#videoLink").val("");
});


//Add file from the modal to the datatable on the page
$(".addFileInCarrousel").click(function () {
    //Création du tableau de parametre envoi 
    var insertionChamp = {};
    var fileId = $("#fileId").val();
    var trickId = $("#trickId").val();
    var videoInput = $("#videoLink").val();

    if (videoInput !== ""){
        if($("#videoLink").val() !== ""){
            var fileName = $("#videoName").val();
            var fileUrl = $("#videoLink").val();
            var fileType = "video";
            var fileDate = $.now();
            $("#modalAddFile").modal("hide");
            $("#videoNameUpdate").val("");
            $("#videoLinkUpdate").val("");
        };
    }else{
        if (addFileTricksDropzoneForm.dropzone.files.length !== 0) {
            var fileDropzoneUpdate = addFileTricksDropzoneForm.dropzone.files[0];
            var fileName = fileDropzoneUpdate.name;
            var fileUrl = "/" + fileDropzoneUpdate.name;
            var fileType = "image";
            var fileDate = $.now();
            addFileTricksDropzoneForm.dropzone.files.forEach(function(file) { 
                file.previewElement.remove(); 
            });
        };
    }
    $('#modalAddFile').modal("hide");

    $.ajax({
        // url : 'insertDb', 
        url: "/projet6/admin/update/trick/" + trickId + "/create/file",
        type: 'POST',
        cache: true,
        data: {
            fileName : fileName,
            fileUrl : fileUrl,
            fileType : fileType,
            fileDate : fileDate
        },
        success: function (data) {
            if(data.status === "success"){
                //Dans le cas ou on a déja enregistré le fichier
                $("#statusFilesCreation")
                    .removeClass('alert-danger')
                    .addClass("alert alert-success ta-c w-100")
                    .html("This file is created.")
                    .fadeIn(1000)
                    .delay(2000)
                    .fadeOut(1000);
                    document.location.reload();
            }
        },
        error : function (){
            $("#statusFilesCreation")
                .addClass("alert alert-danger ta-c w-100")
                .html("An error was occured.")
                .fadeIn(500);
        }
    });
});

//$(".removeFileTricks").click(function () {
//    confirm('This file will not be insert on the creation off this trick.');
//});

//Create the tricks with all the files
$(".createTricks").click(function () {
    //Création du tableau de parametre envoi 
    $("#nameTricks").removeClass('is-invalid');
    $("#descriptionTricks").removeClass('is-invalid');
    if ($("#nameTricks").val() !== "" && $("#descriptionTricks").val() !== "" && $("#descriptionTricks").val().length > 50 ) {
        var trickData = {
            nameTricks: $("#nameTricks").val(),
            groupTricks: $("#groupTricks").val(),
            descriptionTricks: $("#descriptionTricks").val(), 
            files: []
        };
    }else{
        if ($("#nameTricks").val() === "") {
            $("#nameTricks").addClass("is-invalid").focus();
            return;
        };
        if ($("#descriptionTricks").val() === "" || $("#descriptionTricks").val().length < 50) {
            $("#descriptionTricks").addClass("is-invalid").focus();
            return;
        }
    }
        
    if ($("#contentTabFile > tr").length !== 0) {
        $( "#contentTabFile > tr" ).each(function(index) {
            var fileCells = $(this).find($("td"));
            var file = {
                fileName: fileCells.prevObject[0].cells[0].innerText,
                fileUrl: fileCells.prevObject[0].cells[1].innerText,
                fileType: fileCells.prevObject[0].cells[2].innerText
            };
            trickData.files.push(file);
        });
    }
    $('#modalAddFile').modal("hide");

    $.ajax({
        // url : 'insertDb', 
        url: "/projet6/admin/create/tricks",
        type: 'POST',
        cache: true,
        data: trickData,
        success: function (data) {
            if(data.status === 'success'){
                //Dans le cas ou on a déja enregistré le fichier
                $("#statusTricksCreation")
                    .removeClass('alert-danger')
                    .addClass('alert alert-success ta-c w-100')
                    .html("This trick is created.")
                    .fadeIn(1000)
                    .delay(2000)
                    .fadeOut(1000);
            }
        },
        error : function (){
            $("#statusTricksCreation")
                .addClass('alert alert-danger ta-c w-100')
                .html("An error was occured.")
                .fadeIn(500);
        }
    });
});