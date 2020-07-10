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
        url: "/public/create/account",
        type: 'POST',
        cache: true,
        data: userData,
        success: function (data) {
            $("#messageUpdate")
                .addClass('alert alert-success ta-c w-100')
                .html("The file was update.")
                .delay(1000)
                .fadeOut(1000);
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

    $('#modalAddUerPhoto').modal("hide");
 
    $.ajax({
        // url : 'insertDb', 
        url: "/admin/add/photoProfile",
        type: 'POST',
        cache: true,
        data: userData,
        success: function (data) {
            if(data.status === "success"){
                //Dans le cas ou on a déja enregistré le fichier
                $("#messageUpdate")
                    .removeClass('alert-danger')
                    .addClass("alert alert-success ta-c w-100")
                    .html("Your photo is update.")
                    .fadeIn(1000)
                    .delay(2000)
                    .fadeOut(1000);
                    document.location.reload();
            }
        },
        error : function (){
            $("#messageUpdate")
                .addClass("alert alert-danger ta-c w-100")
                .html("An error was occured.")
                .fadeIn(500);
        }
    });
});