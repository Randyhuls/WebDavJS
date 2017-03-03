var webDAV = webDAV || {};

// Convert file object to buffer file and optionally as base64 string
var fileToBinary = function(data, callback) {
    var reader = new FileReader();

    reader.addEventListener('loadend', function(){
        webDAV.config.base64 ? callback(btoa(reader.result)) : callback(reader.result);
    });

    reader.readAsArrayBuffer(data);
};

// Upload file to directory
webDAV.uploadToDirectory = function(directory, fileName, data) {

    var updateRequest = function(bufferData) {
        request.data = bufferData;
        webDAV.http(request);
    };

    var request = {
        'method': 'PUT',
        'url': webDAV.config.url,
        'dir': directory,
        'fileName': fileName,
        'data': fileToBinary(data, updateRequest)
    };
};

// Get content of directory
webDAV.getDirectoryContents = function(directory) {
    var request = {
        'method': 'PROPFIND',
        'url': webDAV.config.url,
        'dir': directory,
        'headers': {
            'Depth': 0
        }
    };

    webDAV.http(request);
};