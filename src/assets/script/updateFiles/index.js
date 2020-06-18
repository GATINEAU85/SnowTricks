
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

$(".deleteTricks").click(function () {
    confirm('This tricks will be remove from SnowTricks, are you sure you want to delete this ?');
});


$(".updateFile").click(function () {
    //Création du tableau de parametre envoi 
    var insertionChamp = {};
    var fileId = $("#fileId").val();
    var trickId = $("#trickId").val();
    var videoInput = $("#videoLink").val();

    if (videoInput !== ""){
        if($("#videoLink").val() !== ""){
            insertionChamp["fileName"] = $("#videoName").val();
            insertionChamp["fileType"] = "video";
            insertionChamp["fileUrl"] = $("#videoLink").val();
            insertionChamp["fileDate"] = $.now();
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
        url: "/projet6/admin/update/trick/" + trickId + "/update/file/" + fileId,
        type: 'POST',
        cache: true,
        data: insertionChamp,
        success: function (data) {
            $("#messageUpdate")
                .addClass('alert alert-success ta-c w-100')
                .html("The file was update.")
                .delay(1000)
                .fadeOut(1000);
        }
    });
});