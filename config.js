var webDAV = webDAV || {};

// Configure this file to match your WebDAV-server settings
webDAV.config = {
    url: 'http://www.my-cloud-server.com/webdav', // Base URL to webDAV-server (exclude ending backslash)
    auth: true, // Authentication required (boolean),
    security: 'Basic', // Type of authentication security; default is 'Basic'
    user: 'MyUserName', // Username
    pass: 'MyPassword', // Password
    base64: false // Whether data needs to be passed as base64 (boolean)
}