
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
        success: function (data) {
            $("#messageUpdate")
                .addClass('alert alert-success ta-c w-100')
                .html("The file was update.")
                .delay(1000)
                .fadeOut(1000);
        }
    });
});