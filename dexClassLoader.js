function onLoad() {
	console.log("[*] Loaded.")
	Java.perform(function(){
        	var dexclassLoader = Java.use("dalvik.system.DexClassLoader");
	        dexclassLoader.$init.implementation = function(dexPath,optimizedDirectory,librarySearchPath,parent){
        		console.log("dexPath:"+dexPath);
            		console.log("optimizedDirectory:"+optimizedDirectory);
	             	console.log("librarySearchPath:"+librarySearchPath);
        	    	console.log("parent:"+parent);
          		this.$init(dexPath,optimizedDirectory,librarySearchPath,parent);
	        }
	});
}
onLoad();
