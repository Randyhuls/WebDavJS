var webDAV = webDAV || {};

if (!webDAV.config.url) throw 'You have not configured "config.js"';

webDAV.http = function(request, callback) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 || this.status == 201) {
            console.log('Data: ', this.responseText);
        }
    };
    if (!request.dir) request.dir = null;
    if (!request.fileName) request.fileName = null;

    http.open(request.method, request.url + request.dir + request.fileName, true);

    if (webDAV.config.auth) http.setRequestHeader('Authorization', webDAV.config.security + ' ' + btoa(webDAV.config.user + ':' + webDAV.config.pass));

    for (header in request.headers) {
        http.setRequestHeader(header, request.headers[header]);
    }

    http.send(request.data); // Binary file

    console.log('Sent request', request);
}