$(".addPicture").click(function () {
    $('#fileType').val("image");
    $("#modalAddFile").modal();
    $(".imagePart").show();
    $(".videoPart").hide();
});

$(".addVideo").click(function () {
    $('#fileType').val("video");
    $('#modalAddFile').modal();
    $(".videoPart").show();
    $(".imagePart").hide();
});

//Add file from the modal to the datatable on the page
$(".addFileInTab").click(function () {
    //Création du tableau de parametre envoi 
    var insertionChamp = {};
    var fileType = $('#fileType').val();

    if (fileType === "video"){
        if($("#videoLink").val() !== "" && $("#videoName").val() !== ""){
            var videoName = $("#videoName").val();
            var videoUrl = $("#videoLink").val();
            //$("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>Video</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")
            $("#contentTabFile").append("<tr><td>" + videoName + "</td><td class='cur-p'>" + videoUrl + "</td><td>video</td></tr>");
            $('#modalAddFile').modal("hide");
        }else{
            $("#videoName").removeClass("is-invalid");
            $("#videoNameMessage").html("");
            $("#videoLink").removeClass("is-invalid");
            $("#videoLinkMessage").html("");
            if($("#videoName").val() === ""){
                $("#videoName").addClass("is-invalid").focus();
                $("#videoNameMessage").html("The name field is empty.");
                return;
            }else if($("#videoLink").val() === ""){
                $("#videoLink").addClass("is-invalid").focus();
                $("#videoLinkMessage").html("The URL field is empty.");
                return;
            }
        };
    }else if(fileType === 'image') {
        if (addFileTricksDropzoneForm.dropzone.files.length !== 0) {
            var fileDropzoneUpdate = addFileTricksDropzoneForm.dropzone.files[0];
            pictureName = fileDropzoneUpdate.name;
            pictureUrl = "/" + fileDropzoneUpdate.name;
            insertionChamp["fileDate"] = $.now();
            //$("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>Picture</td><td><a class='removeFileTricks cur-p'><i class='fas fa-trash'></i></a></td></tr>")
            $("#contentTabFile").append("<tr><td>" + pictureName + "</td><td class='cur-p'>" + pictureUrl + "</td><td>image</td></tr>");
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
    var fileType = $('#fileType').val();
    var videoInput = $("#videoLink").val();

    if (fileType === "video"){
        if($("#videoLink").val() !== "" && $("#videoName").val() !== ""){
            var fileName = $("#videoName").val();
            var fileUrl = $("#videoLink").val();
            var fileType = "video";
            var fileDate = $.now();
            $('#modalAddFile').modal("hide");
            $("#videoNameUpdate").val("");
            $("#videoLinkUpdate").val("");
        }else{
            $("#videoName").removeClass("is-invalid");
            $("#videoNameMessage").html("");
            $("#videoLink").removeClass("is-invalid");
            $("#videoLinkMessage").html("");
            if($("#videoName").val() === ""){
                $("#videoName").addClass("is-invalid").focus();
                $("#videoNameMessage").html("The name field is empty.");
                return;
            }else if($("#videoLink").val() === ""){
                $("#videoLink").addClass("is-invalid").focus();
                $("#videoLinkMessage").html("The URL field is empty.");
                return;
            }
        };
    }else if (fileType === "image"){
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
        url: "/admin/update/trick/" + trickId + "/create/file",
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

//Create the tricks with all the files
$(".createTricks").click(function () {
    //Création du tableau de parametre envoi 
    $("#nameTricks").removeClass('is-invalid');
    $("#descriptionTricks").removeClass('is-invalid');
    if ($("#nameTricks").val() !== "" && $("#descriptionTricks").val() !== "" && $("#descriptionTricks").val().length > 50 ) {
        $("#nameTricks").removeClass("is-invalid");
        $("#nameTricksMessage").html("");
        $("#descriptionTricks").removeClass("is-invalid");
        $("#descriptionTricksMessage").html("");
        var trickData = {
            nameTricks: $("#nameTricks").val(),
            groupTricks: $("#groupTricks").val(),
            descriptionTricks: $("#descriptionTricks").val(), 
            files: []
        };
    }else{
        $("#nameTricks").removeClass("is-invalid");
        $("#nameTricksMessage").html("");
        $("#descriptionTricks").removeClass("is-invalid");
        $("#descriptionTricksMessage").html("");
        if ($("#nameTricks").val() === "") {
            $("#nameTricks").addClass("is-invalid").focus();
            $("#nameTricksMessage").html("The name field is empty.");
            return;
        };
        if ($("#descriptionTricks").val() === "" || $("#descriptionTricks").val().length < 50) {
            $("#descriptionTricks").addClass("is-invalid").focus();
            $("#descriptionTricksMessage").html("Your description is to short or empty. 50 characters minimum are required.");
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
    }else{
        $("#statusTricksCreation")
                .html("You must insert at least one file.")
                .addClass('alert alert-danger ta-c w-100')
                .fadeIn(1000)
                .delay(2000)
                .fadeOut(1000)
                .focus();
        return;
    }
    $('#modalAddFile').modal("hide");

    $.ajax({
        // url : 'insertDb', 
        url: "/admin/create/tricks",
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
                    .fadeOut(1000)
                    .focus();
                document.location.reload();
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