import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';

Dropzone.prototype.defaultOptions.dictDefaultMessage = "The file must be less than 256 Mo.";
Dropzone.prototype.defaultOptions.dictRemoveFile = "DELETE";
Dropzone.prototype.defaultOptions.addRemoveLinks = true;
Dropzone.prototype.defaultOptions.acceptedFiles = ".jpeg,.jpg,.png,.gif";
Dropzone.prototype.defaultOptions.maxFiles = 1;
Dropzone.prototype.defaultOptions.uploadMultiple = false;
Dropzone.prototype.defaultOptions.autoprocessQueue = false;
Dropzone.prototype.defaultOptions.init = function () {
    this.hiddenFileInput.removeAttribute('multiple');
    this.on("maxfilesexceeded", function (file) {
        this.removeAllFiles();
        this.addFile(file);
    });
};


Dropzone.options.updateFileTricksDropzoneForm= {
    paramName: "updateFileTricksDropzoneForm",
    addRemoveLinks: true,
    dictRemoveFile: 'DELETE',
    paramName: "file", // The name that will be used to transfer the file
    maxFiles: 1,
    autoprocessQueue: false,
    init: function() {
        this.on("addedfile", function() {
            if (this.files[1]!=null){
                this.removeFile(this.files[0]);
            }
        });
        this.on("success", function(file, response) {
            //si on a une erreur sur le chargement
            if(response.status == "error"){
                alert (response.message);
                return;
            }/*else{
                response.logoName;
                response.logoSize
                response.logoFormat
                response.logoURI
            }*/
        });
    }
};

