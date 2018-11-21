// function for loging to elastic

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.

        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}


// Make the actual CORS request.
function sendToElastic(content) {
    // The url of the elastiv server
    var url = 'https://case.pidas.com/coreform_tasks/log';
    // create a new CORS request
    var xhr = createCORSRequest('POST', url);
    // if xhr == null then abort
    if (!xhr) {
        // by design user is not alerted by logging problems
        // line below is left for debugging pruposes 
        // alert('CORS not supported');
        return;
    }
    // set the type to be transmitted (JSON in this case)
    xhr.setRequestHeader("Content-type", "application/json");
    // Basic authentification hash generated from user+password
    // hash is not being generated in this code
    xhr.setRequestHeader('Authorization', "Basic Y3R4dC1ycGE6RE1mX1dwLCojNztueEh4LQ==");

    // Response handlers.
    xhr.onload = function () {
        // by design user is not alerted if logging was successful
        // line below is left for debugging pruposes 
        // alert('Response from CORS request to ' + url + ': \n' + xhr.responseText);
    };

    xhr.onerror = function() {
        // by design user is not alerted if logging was not successful
        // line below is left for debugging pruposes
        // alert('Woops, there was an error making the request.');
    };

    // send the request to the elastic server
    xhr.send(JSON.stringify(content));
}

