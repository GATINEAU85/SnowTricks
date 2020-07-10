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
