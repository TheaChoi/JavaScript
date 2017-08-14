var req = new XMLHttpRequest();
req.open("GET", "./json/imageList.json");
req.onreadystatechange = function() {
	if(this.readyState == 4) {
		console.log(this.response);
	}
}

req.send();