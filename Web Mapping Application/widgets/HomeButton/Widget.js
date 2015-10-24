//>>built
require({cache:{"esri/dijit/HomeButton":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/HomeButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style".split(" "),function(d,f,e,p,q,g,m,n,h,a,s,t,l,r){return f("esri.dijit.HomeButton",[g,n,d],{templateString:s,options:{theme:"HomeButton",map:null,extent:null,fit:!1,visible:!0},constructor:function(a,c){var b=
e.mixin({},this.options,a);this.domNode=c;this._i18n=t;this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("extent",b.extent);this.set("fit",b.fit);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments);this.own(h(this._homeNode,m,e.hitch(this,this.home)))},startup:function(){this.inherited(arguments);this.map||(this.destroy(),
console.log("HomeButton::map required"));if(this.map.loaded)this._init();else h.once(this.map,"load",e.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},home:function(){var k=new a,c=this.get("extent");this._showLoading();var b={extent:c};c?this.map.extent!==c?this.map.setExtent(c,this.get("fit")).then(e.hitch(this,function(){this._hideLoading();this.emit("home",b);k.resolve(b)}),e.hitch(this,function(a){a||(a=Error("HomeButton::Error setting map extent"));b.error=
a;this.emit("home",b);k.reject(a)})):(this._hideLoading(),this.emit("home",b),k.resolve(b)):(this._hideLoading(),c=Error("HomeButton::home extent is undefined"),b.error=c,this.emit("home",b),k.reject(c));return k.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible();this.get("extent")||this.set("extent",this.map.extent);this.set("loaded",!0);this.emit("load",{})},_showLoading:function(){l.add(this._homeNode,this._css.loading)},_hideLoading:function(){l.remove(this._homeNode,
this._css.loading)},_updateThemeWatch:function(a,c,b){l.remove(this.domNode,c);l.add(this.domNode,b)},_visible:function(){this.get("visible")?r.set(this.domNode,"display","block"):r.set(this.domNode,"display","none")}})})},"widgets/HomeButton/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/HomeButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/HomeButton/css/style.css":".jimu-widget-homebutton {background-color: rgba(255,255,255,0.3); border-radius: 5px;}.jimu-widget-homebutton .HomeButton .home {background-color: rgba(0,0,0,0.2);}.jimu-widget-homebutton.inHome {background-color: #000;}.jimu-widget-homebutton .HomeButton .home:hover {background-color: rgba(0,0,0,0.4);}.jimu-widget-homebutton.inHome .HomeButton .home {background-color: #000;}","*now":function(d){d(['dojo/i18n!*preload*widgets/HomeButton/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang jimu/BaseWidget esri/dijit/HomeButton esri/geometry/Extent dojo/_base/html dojo/dom-construct dojo/topic dojo/on".split(" "),function(d,f,e,p,q,g,m,n,h){return d([e],{name:"HomeButton",baseClass:"jimu-widget-homebutton",postCreate:function(){this.own(n.subscribe("appConfigChanged",f.hitch(this,this.onAppConfigChanged)))},startup:function(){this.inherited(arguments);this.own(h(this.map,"extent-change",f.hitch(this,"onExtentChange")));this.createHomeDijit({map:this.map,
extent:this.map.extent})},createHomeDijit:function(a){this.homeDijit=new p(a,m.create("div"));this.own(h(this.homeDijit,"home",f.hitch(this,"onHome")));g.place(this.homeDijit.domNode,this.domNode);this.homeDijit.startup()},onAppConfigChanged:function(a,e,d){"mapOptionsChange"===e&&(d&&a&&d.extent)&&(a=new q(d.extent),this.homeDijit.set("extent",a))},onExtentChange:function(){g.removeClass(this.domNode,"inHome")},onHome:function(a){(!a||!a.error)&&g.addClass(this.domNode,"inHome")}})});