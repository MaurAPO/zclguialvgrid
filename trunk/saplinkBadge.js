function loadXMLDoc(url) {
	req = false;
	// branch for native XMLHttpRequest object
	if(window.XMLHttpRequest && !(window.ActiveXObject)) {
		try {
			req = new XMLHttpRequest();
		} catch(e) {
			req = false;
		}
	// branch for IE/Windows ActiveX version
	} else if(window.ActiveXObject) {
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				req = false;
			}
		}
	}
	if(req) {
		req.onreadystatechange = processReqChange;
		req.open("GET", url, true);
		req.send("");
	}
}

function processReqChange() {
// only if req shows "loaded"
if (req.readyState == 4) {
	// only if "OK"
	if (req.status == 200) {
		alert ('got a doc');
	} else {
		alert("There was a problem retrieving the XML data:\n" +
			req.statusText);
	}
}

loadXMLDoc('http://code.google.com/p/saplink/downloads/list');	