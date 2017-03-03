// Example file

var getFile = function() {
    var element = document.getElementById('file');
    return (element.files.length > 0) ?  element.files[0] : false;
};

var uploadSomeFile = function() {
    var file = getFile();

    if (!file) throw 'UPLOAD ERROR: File unavailable or file is non-binary';

    webDAV.uploadToDirectory(
        '/Files/', // Directory (Beginning and ending with / )
        file.name, // FileName (including extension)
        file // Data (file object)
    );
};

var getSomeDirectory = function() {
    webDAV.getDirectoryContents('/Files/');
};