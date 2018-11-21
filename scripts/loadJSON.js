// vanilla javascript ajax json loader
function loadJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);

	/* Make sure the browser does not cache the loaded JSON file... */
    httpRequest.setRequestHeader("cache-control", "no-cache, must-revalidate, post-check=0, pre-check=0");
    httpRequest.setRequestHeader("cache-control", "max-age=0");
	httpRequest.setRequestHeader("expires", "0");
	httpRequest.setRequestHeader("expires", "Tue, 01 Jan 1980 01:00:00 GMT");
	httpRequest.setRequestHeader("pragma", "no-cache");

    httpRequest.send(); 
}