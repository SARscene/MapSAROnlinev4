//>>built
define(["dojo/_base/declare","jimu/BaseWidget"],function(a,b){return a([b],{baseClass:"jimu-widget-demo",postCreate:function(){this.inherited(arguments);console.log("postCreate")},startup:function(){this.inherited(arguments);this.mapIdNode.innerHTML="map id:"+this.map.id;console.log("startup")},onOpen:function(){console.log("onOpen")},onClose:function(){console.log("onClose")},onMinimize:function(){console.log("onMinimize")},onMaximize:function(){console.log("onMaximize")},onSignIn:function(a){console.log("onSignIn")},
onSignOut:function(){console.log("onSignOut")}})});