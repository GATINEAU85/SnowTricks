
$(".delete").click(function () {
    confirm('This file will be delete from this tricks');
});

$(".updatePicture").click(function () {
    $('#modalUpdateFile').modal();
    $("#fileId").val($(this).attr("file"));
    $(".imagePart").show();
    $(".videoPart").hide();
});

$(".updateVideo").click(function () {
    $('#modalUpdateFile').modal();
    $("#fileId").val($(this).attr("file"));
    $(".videoPart").show();
    $(".imagePart").hide();
});

$(".updateFile").click(function () {
    //Création du tableau de parametre envoi 
    var insertionChamp = {};
    var fileId = $("#fileId").val();
    var trickId = $("#trickId").val();
    var videoInput = $("#videoLinkUpdate").val();

    if (videoInput !== ""){
        if($("#videoLinkUpdate").val() !== "" && $("#videoNameUpdate").val() !== ""){
            insertionChamp["fileName"] = $("#videoNameUpdate").val();
            insertionChamp["fileType"] = "video";
            insertionChamp["fileUrl"] = $("#videoLinkUpdate").val();
            insertionChamp["fileDate"] = $.now();
        }else{
            if($("#videoNameUpdate").val() !== ""){
                $("#videoNameUpdate").addClass("is-invalid").focus();
                $("#videoNameUpdateMessage").html("The name field is empty.");
                return;
            }else if($("#videoLinkUpdate").val() !== ""){
                $("#videoLinkUpdate").addClass("is-invalid").focus();
                $("#videoLinkUpdateMessage").html("The URL field is empty.");
                return;
            }
        };
    }else{
        if (updateFileTricksDropzoneForm.dropzone.files.length !== 0) {
            var logoDropzoneUpdate = updateFileTricksDropzoneForm.dropzone.files[0];
            insertionChamp["fileName"] = logoDropzoneUpdate.name;
            insertionChamp["fileType"] = "image";
            insertionChamp["fileUrl"] = "/" + logoDropzoneUpdate.name;
            insertionChamp["fileDate"] = $.now();
        };
    };

    $('#modalUpdateFile').modal("hide");
    
    $.ajax({
        // url : 'insertDb', 
        url: "/admin/update/trick/" + trickId + "/update/file/" + fileId,
        type: 'POST',
        cache: true,
        data: insertionChamp,
        success: function (data) {
            if(data.status === "success"){
                //Dans le cas ou on a déja enregistré le fichier
                $("#statusFilesCreation")
                    .removeClass('alert-danger')
                    .addClass("alert alert-success ta-c w-100")
                    .html("This file is updated.")
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