function onLoad() {
    console.log("[*] Loaded.")

    Java.perform( function getURL() {
      var URL = Java.use('java.net.URL');
      URL.getHost.implementation = function () {
       	console.log(this.getHost() + this.getPath());
	return this.getHost();
      };
    });
}
onLoad();
