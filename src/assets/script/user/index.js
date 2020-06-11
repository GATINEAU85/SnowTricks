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

    $.ajax({
        // url : 'insertDb', 
        url: "/projet6/admin/add/photoProfile",
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