//>>built
require({cache:{"widgets/Bookmark/setting/Edit":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting esri/geometry/Extent jimu/dijit/ImageChooser jimu/dijit/ExtentChooser jimu/utils dojo/text!./Edit.html".split(" "),function(l,c,m,g,d,n,q,h,r,s,a){return l([n,d],{baseClass:"jimu-Bookmark-Edit",ImageChooser:null,templateString:a,extent:{},portalUrl:null,itemId:null,postCreate:function(){this.inherited(arguments);this.imageChooser=
new h({cropImage:!0,defaultSelfSrc:this.folderUrl+"images/thumbnail_default.png",showSelfImg:!0,format:[h.GIF,h.JPEG,h.PNG],goldenWidth:100,goldenHeight:60});this.own(g(this.name,"Change",c.hitch(this,"_onNameChange")));m.addClass(this.imageChooser.domNode,"img-chooser");m.place(this.imageChooser.domNode,this.imageChooserBase,"replace")},setConfig:function(a){a.name&&this.name.set("value",a.name);if(a.thumbnail){var b=s.processUrlInWidgetConfig(a.thumbnail,this.folderUrl);this.imageChooser.setDefaultSelfSrc(b)}this.extentChooser=
a.extent?new r({portalUrl:this.portalUrl,itemId:this.itemId,initExtent:new q(a.extent)},this.extentChooserNode):new r({portalUrl:this.portalUrl,itemId:this.itemId},this.extentChooserNode);this.own(g(this.extentChooser,"extentChange",c.hitch(this,this._onExtentChange)))},getConfig:function(){return{name:this.name.get("value"),extent:this.extentChooser.getExtent(),thumbnail:this.imageChooser.imageData}},_onNameChange:function(){this._checkRequiredField()},_onExtentChange:function(a){this.currentExtent=
a},_checkRequiredField:function(){this.name.get("value")?this.popup&&this.popup.enableButton(0):this.popup&&this.popup.disableButton(0)}})})},"jimu/dijit/ImageChooser":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/text!./templates/ImageChooser.html dojo/sniff dojo/request esri/lang ../utils ./_CropImage jimu/tokenUtils jimu/dijit/Popup jimu/dijit/Message jimu/dijit/LoadingShelter".split(" "),function(l,c,m,g,d,n,q,h,r,s,
a,f,b,p,e,k){function t(e,b){e=e||"";for(var k=0,f=[{test:window.File&&window.FileReader&&window.FileList&&window.Blob||!a.file.isEnabledFlash(),failure:[e+"libs/polyfills/fileAPI/FileAPI.js"],callback:function(){k++;k===f.length&&b()}}],c=0;c<f.length;c++)testLoad(f[c])}var u="unload",v=0;l=l([c,m],{templateString:q,declaredClass:"jimu.dijit.ImageChooser",cropImage:!0,displayImg:null,defaultSelfSrc:null,showSelfImg:!1,label:null,showTip:!0,goldenWidth:400,goldenHeight:400,format:null,imageData:null,
postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.imageChooser;this.nls.common=window.jimuNls.common;this.nls.readError=this.nls.readError||"Failed to read the file."},postCreate:function(){this._initial();if(!a.file.supportHTML5()&&!h("safari")&&a.file.isEnabledFlash())if("unload"===u){var e=b.isInBuilderWindow()?"stemapp/":"";window.FileAPI={debug:!1,flash:!0,staticPath:e+"libs/polyfills/fileAPI/",flashUrl:e+"libs/polyfills/fileAPI/FileAPI.flash.swf",flashImageUrl:e+
"libs/polyfills/fileAPI/FileAPI.flash.image.swf"};t(e,g.hitch(this,function(){d.setStyle(this.mask,"zIndex",1);u="loaded"}));u="loading"}else d.setStyle(this.mask,"zIndex",1)},setImageSize:function(a){this.goldenWidth=a.width;this.goldenHeight=a.height},disableChooseImage:function(){d.setStyle(this.fileForm,"display","none");this.label&&"string"===typeof this.label&&d.addClass(this.displayText,"disable-label");d.removeAttr(this.domNode,"title")},enableChooseImage:function(){d.setStyle(this.fileForm,
"display","block");this.label&&"string"===typeof this.label&&d.removeClass(this.displayText,"disable-label");this._addTip()},setDefaultSelfSrc:function(a){this.defaultSelfSrc=a;this.imageData=this.selfImg.src=a},getImageData:function(){return this.imageData},_initial:function(){this._processProperties();this._porcessMaskClick();this._setupFileInput();this._addTip()},_processProperties:function(){this.label&&"string"===typeof this.label&&(this.displayText.innerHTML=this.label,d.setStyle(this.hintText,
"display","block"));this.showSelfImg&&d.setStyle(this.hintImage,"display","block");this.defaultSelfSrc&&(this.imageData=this.selfImg.src=this.defaultSelfSrc);if(this.format){var a="image/*";"string"===typeof this.format&&/^image\/./.test(this.format)?a=this.format:"[object Array]"===Object.prototype.toString.call(this.format)&&0<this.format.length&&(a=this.format.join(","));d.setAttr(this.fileInput,"accept",a)}9>=h("ie")&&d.setStyle(this.fileInput,{width:"100%",height:"100%",position:"absolute",left:0,
top:0,opacity:0,zIndex:9})},_porcessMaskClick:function(){d.setAttr(this.fileInput,"id","imageChooser_"+v);d.setAttr(this.mask,"for","imageChooser_"+v);v++;this.maskHandle=n(this.mask,"click",g.hitch(this,function(b){b.stopPropagation();if(h("safari")&&7>h("safari"))new e({message:this.nls.unsupportReaderAPI}),b.preventDefault();else{if(!a.file.supportHTML5()){if(!a.file.isEnabledFlash()){var k=d.create("a",{href:"http://helpx.adobe.com/flash-player.html",innerHTML:this.nls.enableFlash,target:"_blank"});
new e({message:k});b.preventDefault();return}if(!a.file.supportFileAPI()){new e({message:this.nls.unsupportReaderAPI});b.preventDefault();return}}d.setStyle(this.fileInput,"display","none");setTimeout(g.hitch(this,function(){d.setStyle(this.fileInput,"display","block")}),200)}}))},_addTip:function(){if(this.showTip){var a=s.substitute({width:this.goldenWidth||40,height:this.goldenHeight||40},this.nls.toolTip);d.setAttr(this.domNode,"title",a)}else d.setAttr(this.domNode,"title","")},_setupFileInput:function(){if(9>=
h("ie"))this.own(n(this.fileInput,"change",g.hitch(this,this._onFileInputChange)));else n.once(this.fileInput,"change",g.hitch(this,this._onFileInputChange))},_onFileInputChange:function(b){var k=b.target.files&&b.target.files[0]||b.files&&b.files[0];if(this.format&&-1===this.format.indexOf(k.type))new e({message:this.nls.invalidType}),(!h("ie")||9<h("ie"))&&this._recreateFileForm();else{var f=9>h("ie")?23552:1048576;a.file.readFile(b,"image/*",f,g.hitch(this,function(a,b,c){a?(b=this.nls[a.errCode],
"exceed"===a.errCode&&(b=b.replace("1024",f/1024)),new e({message:b})):window.isXT&&this.cropImage&&"image/gif"!==k.type?this._cropImageByUser(c):this._readFileData(c);(!h("ie")||9<h("ie"))&&this._recreateFileForm()}))}},_recreateFileForm:function(){var a=g.clone(this.mask),e=g.clone(this.fileInput);d.destroy(this.mask);d.destroy(this.fileInput);var b=g.clone(this.fileForm);d.place(a,b);d.place(e,b);d.place(b,this.fileForm,"replace");this.maskHandle.remove();this.mask=a;this.fileInput=e;d.destroy(this.fileForm);
this.fileForm=b;this._porcessMaskClick();this._setupFileInput()},_readFileData:function(a){this.onImageChange(a);this.displayImg&&d.setAttr(this.displayImg,"src",a);this.showSelfImg&&(this.selfImg?d.setAttr(this.selfImg,"src",a):this.selfImg.src=a)},_cropImageByUser:function(a){var b=new f({imageSrc:a,nls:g.clone(this.nls),realWidth:this.goldenWidth,realHeight:this.goldenHeight}),c=new k({hidden:!0}),t=new p({titleLabel:"Crop Image",content:b,width:500,height:480,buttons:[{label:this.nls.common.ok,
onClick:g.hitch(this,function(){var k=b.getImageSize(),f=b.getCropSize();c.show();r("/webappbuilder/rest/cropimage",{data:{imageData:a,imageDisplaySize:k.w+","+k.h,cropRectangle:f.w+","+f.h+","+f.t+","+f.l},method:"POST",handleAs:"json",headers:{"X-Requested-With":null}}).then(g.hitch(this,function(a){a.success?(this._readFileData(a.imageData),t.close()):(new e({message:this.nls.unknowError}),c.hide())}),g.hitch(this,function(a){console.error(a);new e({message:this.nls.unknowError});c.hide()}))})}]});
c.placeAt(t.domNode);b.startup();d.addClass(t.domNode,"image-chooser-crop-popup")},onImageChange:function(a){this.imageData=a}});l.GIF="image/gif";l.JPEG="image/jpeg";l.PNG="image/png";return l})},"jimu/dijit/_CropImage":function(){define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/on dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/_CropImage.html jimu/dijit/Message esri/lang dojo/NodeList-dom".split(" "),function(l,c,m,g,d,n,q,h,r,s){return l([n,q],{templateString:h,
inDrag:!1,inSlider:!1,realWidth:30,realHeight:30,ratio:null,imageSrc:null,_currentX:null,_currentY:null,_currentTop:0,_currentLeft:0,postCreate:function(){this._dragingHandlers=[];this.setImageSrc(this.imageSrc);this.own(g(this.ownerDocument,"mousemove",m.hitch(this,"_onMouseMove")));this.own(g(this.ownerDocument,"mouseup",m.hitch(this,"_onMouseUp")));this.loadingImg.src=require.toUrl("jimu")+"/images/loading.gif"},startup:function(){var a=/data:image\/(.*);base64/.test(this.imageSrc)?50:500,f=m.hitch(this,
function(){var b=this._getComputedStyle(this.baseImage),b=parseFloat(b.width);console.log("image width",b);isFinite(b)&&0<b?(this._init(),c.setStyle(this.loadingImg,"display","none")):setTimeout(f,a)});setTimeout(f,a)},setImageSrc:function(a){c.setAttr(this.viewerImage,"src",a);c.setAttr(this.baseImage,"src",a)},getImageSize:function(){return{w:this._currentImageWidth,h:this._currentImageHeight}},getCropSize:function(){return{l:-this._currentLeft,t:-this._currentTop,w:this.idealWidth,h:this.idealHeight}},
_init:function(){var a=this._getComputedStyle(this.cropSection),f=c.getContentBox(this.cropSection),b=this._getComputedStyle(this.baseImage),p=parseFloat(b.width)||this.baseImage.offsetWidth,b=parseFloat(b.height)||this.baseImage.offsetHeight,e=p/b;this._maxImageWidth=p;this._maxImageHeight=b;if(b<this.realHeight&&p<this.realWidth)a=s.substitute({width:this.realWidth,height:this.realHeight},this.nls.cropWaining),setTimeout(m.hitch(this,function(){this.popup.close()}),50),new r({message:a});else{this.idealWidth=
this.realWidth;this.idealHeight=this.realHeight;var k=this.ratio=this.ratio?this.ratio:this.realWidth/this.realHeight;1<=this.ratio?f.h*this.ratio<=f.w?(this.idealHeight=f.h,this.idealWidth=f.h*this.ratio):(this.idealHeight=this._findProperlyValue(0,f.h,f.w-5,function(a){return a*k}),this.idealWidth=this.idealHeight*this.ratio):f.w/this.ratio<=f.h?(this.idealWidth=f.w,this.idealHeight=f.w/this.ratio):(this.idealWidth=this._findProperlyValue(0,f.w,f.h-5,function(a){return a/k}),this.idealHeight=this.idealWidth/
this.ratio);c.setStyle(this.viewerBox,{width:this.idealWidth+"px",height:this.idealHeight+"px"});a=Math.abs((parseFloat(a.height)-this.idealHeight)/2);c.setStyle(this.cropSection,{paddingTop:a+"px",paddingBottom:a+"px"});1<=e?this.idealHeight*e>=this.idealWidth?(c.setStyle(this.viewerImage,"height",this.idealHeight+"px"),c.setStyle(this.baseImage,"height",this.idealHeight+"px")):(a=this._findProperlyValue(0,this.idealWidth,this.idealWidth,function(a){return a*e}),c.setStyle(this.viewerImage,"height",
a+"px"),c.setStyle(this.baseImage,"height",a+"px")):this.idealWidth/e>=this.idealHeight?(c.setStyle(this.viewerImage,"width",this.idealWidth+"px"),c.setStyle(this.baseImage,"width",this.idealWidth+"px")):(a=this._findProperlyValue(0,this.idealHeight,this.idealHeight,function(a){return a/e}),c.setStyle(this.viewerImage,"width",a+"px"),c.setStyle(this.baseImage,"width",a+"px"));d(".hide-status",this.domNode).removeClass("hide-status");b=this._getComputedStyle(this.baseImage);p=parseFloat(b.width)||
this.baseImage.offsetWidth;b=parseFloat(b.height)||this.baseImage.offsetHeight;this._minImageWidth=p;this._minImageHeight=b;this._currentImageWidth=p;this._currentImageHeight=b;this._currentTop=-(b-this.idealHeight)/2;this._currentLeft=-(p-this.idealWidth)/2;c.setStyle(this.baseImage,{top:this._currentTop+"px",left:this._currentLeft+"px"});c.setStyle(this.viewerImage,{top:this._currentTop+"px",left:this._currentLeft+"px"});this._zoomRatio=this._maxImageWidth/this._minImageWidth;this._latestPercentage=
window.isRTL?100:0}},_findProperlyValue:function(a,f,b,c,e){e=isFinite(e)?parseFloat(e):1;b=0>b-e||0>b+e?e:b;var k=(a+f)/2,d=c(k);if(d<=b+e&&d>=b-e)return k;if(d>b)return this._findProperlyValue(a,k,b,c);if(d<b)return this._findProperlyValue(k,f,b,c)},_getComputedStyle:function(a){a=c.getMarginBox(a);return{width:a.w,height:a.h,left:a.l,top:a.t}},_onViewerMouseDown:function(a){var c=this._getComputedStyle(this.baseImage),b=this._getComputedStyle(this.viewerContent);this._maxOffsetLeft=parseFloat(b.width)-
parseFloat(c.width);this._maxOffsetTop=parseFloat(b.height)-parseFloat(c.height);this._maxOffsetLeft=0<this._maxOffsetLeft?0:this._maxOffsetLeft;this._maxOffsetTop=0<this._maxOffsetTop?0:this._maxOffsetTop;this.inDrag=!0;this._currentX=a.clientX;this._currentY=a.clientY;this._stopSelect()},_stopSelect:function(){this._dragingHandlers=this._dragingHandlers.concat([g(this.ownerDocument,"dragstart",function(a){a.stopPropagation();a.preventDefault()}),g(this.ownerDocumentBody,"selectstart",function(a){a.stopPropagation();
a.preventDefault()})])},_removeStopSelect:function(){for(var a=this._dragingHandlers.pop();a;)a.remove(),a=this._dragingHandlers.pop()},_onViewerMouseUp:function(a){this.inDrag&&(this.inDrag=!1,this._resetImagePosition(a.clientX,a.clientY),this._removeStopSelect(),a.stopPropagation())},_onSliderMouseDown:function(a){if(!(1>=this._zoomRatio)){this.inSlider=!0;this._currentX=a.clientX;this._currentY=a.clientY;var f=c.position(this.sliderNode);this._startSliderLeft=f.x;this._sliderWidth=f.w;this._stopSelect();
a.stopPropagation()}},_onSliderMouseUp:function(a){if(!(1>=this._zoomRatio)&&this.inSlider){this.inSlider=!1;this._resetSliderButtonPosition(a.clientX);var c=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(c.left);this._currentTop=parseFloat(c.top);this._latestPercentage=100*((a.clientX-this._startSliderLeft)/this._sliderWidth);this._latestPercentage=this._normalizePercentage(this._latestPercentage);this._removeStopSelect();a.stopPropagation()}},_onMouseMove:function(a){this.inDrag&&
this._resetImagePosition(a.clientX,a.clientY);this.inSlider&&!(1>=this._zoomRatio)&&this._resetSliderButtonPosition(a.clientX,a.clientY)},_onMouseUp:function(a){this.inDrag&&this._onViewerMouseUp(a);this.inSlider&&this._onSliderMouseUp(a)},_onZoomOutClick:function(){1>=this._zoomRatio||this._zoomImage("out")},_onZoomInClick:function(){1>=this._zoomRatio||this._zoomImage("in")},_zoomImage:function(a){var c=0;this._latestPercentage=this._normalizePercentage(this._latestPercentage);"in"===a?c=window.isRTL?
this._latestPercentage-20:this._latestPercentage+20:"out"===a&&(c=window.isRTL?this._latestPercentage+20:this._latestPercentage-20);a=this._normalizePercentage(c);this._moveSliderButton(a,this._latestPercentage);this._latestPercentage=a;a=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(a.left);this._currentTop=parseFloat(a.top)},_resetImagePosition:function(a,f){var b=a-this._currentX,d=f-this._currentY;0<=this._currentTop+d?(c.setStyle(this.baseImage,"top",0),c.setStyle(this.viewerImage,
"top",0),this._currentY=f,this._currentTop=0):this._currentTop+d<=this._maxOffsetTop?(c.setStyle(this.baseImage,"top",this._maxOffsetTop+"px"),c.setStyle(this.viewerImage,"top",this._maxOffsetTop+"px"),this._currentY=f,this._currentTop=this._maxOffsetTop):(c.setStyle(this.baseImage,"top",this._currentTop+d+"px"),c.setStyle(this.viewerImage,"top",this._currentTop+d+"px"),this._currentY=f,this._currentTop+=d);0<=this._currentLeft+b?(c.setStyle(this.baseImage,"left",0),c.setStyle(this.viewerImage,"left",
0),this._currentX=a,this._currentLeft=0):this._currentLeft+b<=this._maxOffsetLeft?(c.setStyle(this.baseImage,"left",this._maxOffsetLeft+"px"),c.setStyle(this.viewerImage,"left",this._maxOffsetLeft+"px"),this._currentX=a,this._currentLeft=this._maxOffsetLeft):(c.setStyle(this.baseImage,"left",this._currentLeft+b+"px"),c.setStyle(this.viewerImage,"left",this._currentLeft+b+"px"),this._currentX=a,this._currentLeft+=b)},_normalizePercentage:function(a){a=0>a?0:a;return 100<a?100:a},_resetSliderButtonPosition:function(a){a=
100*((a-this._startSliderLeft)/this._sliderWidth);a=this._normalizePercentage(a);this._moveSliderButton(a,this._latestPercentage)},_moveSliderButton:function(a,d){c.setStyle(this.sliderButton,"left",a+"%");window.isRTL&&(a=100-a,d=100-d);var b=this._minImageWidth*(this._zoomRatio-1)*a/100,g=this._minImageHeight*(this._zoomRatio-1)*a/100,e=this._getComputedStyle(this.baseImage);this._currentLeft=parseFloat(e.left);this._currentTop=parseFloat(e.top);var e=(Math.abs(this._currentLeft)+this.idealWidth/
2)*((this._minImageWidth+b)/this._currentImageWidth-1),k=(Math.abs(this._currentTop)+this.idealHeight/2)*((this._minImageWidth+b)/this._currentImageWidth-1);c.setStyle(this.baseImage,{width:this._minImageWidth+b+"px",height:this._minImageHeight+g+"px"});c.setStyle(this.viewerImage,{width:this._minImageWidth+b+"px",height:this._minImageHeight+g+"px"});this._currentImageWidth=this._minImageWidth+b;this._currentImageHeight=this._minImageHeight+g;if(0<=a-d)console.log("zoomin"),c.setStyle(this.baseImage,
{top:this._currentTop-k+"px",left:this._currentLeft-e+"px"}),c.setStyle(this.viewerImage,{top:this._currentTop-k+"px",left:this._currentLeft-e+"px"});else{console.log("zoomout");var h=0,m=0,h=0<=this._currentTop-k?0:this._currentTop-k+this._minImageHeight+g<=this.idealHeight?this.idealHeight-this._minImageHeight-g:this._currentTop-k;console.log(this._currentLeft,e);m=0<=this._currentLeft-e?0:this._currentLeft-e+this._minImageWidth+b<=this.idealWidth?this.idealWidth-this._minImageWidth-b:this._currentLeft-
e;c.setStyle(this.baseImage,{top:h+"px",left:m+"px"});c.setStyle(this.viewerImage,{top:h+"px",left:m+"px"})}this._latestPercentage=a}})})},"jimu/dijit/ExtentChooser":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Deferred dijit/_WidgetBase dojo/Evented esri/geometry/Extent jimu/portalUrlUtils jimu/dijit/LoadingShelter jimu/utils".split(" "),function(l,c,m,g,d,n,q,h,r,s,a){return l([n,q],{baseClass:"jimu-extent-chooser",declaredClass:"jimu.dijit.ExtentChooser",portalUrl:null,
itemId:null,initExtent:null,bingMapsKey:"",geometryServiceURL:null,shelter:null,postCreate:function(){this.inherited(arguments);!this.geometryServiceURL&&esriConfig.defaults.geometryService&&(this.geometryServiceURL=esriConfig.defaults.geometryService.url);this.geometryServiceURL||(this.geometryServiceURL=a.getServices().geometryService);this.shelter=new s({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();var d=m.create("div",{style:{width:"100%",height:"100%"}},
this.domNode);if(this.portalUrl&&this.itemId){this.portalUrl=r.getStandardPortalUrl(this.portalUrl);var b={geometryServiceURL:this.geometryServiceURL,bingMapsKey:this.bingMapsKey};this.initExtent&&("esri.geometry.Extent"!==this.initExtent.declaredClass&&(this.initExtent=new h(this.initExtent)),b.mapOptions={extent:this.initExtent});a.createWebMap(this.portalUrl,this.itemId,d,b).then(c.hitch(this,function(a){this.map=a.map;this.map.webMapResponse=a;this.own(g(this.map,"extent-change",c.hitch(this,
function(a){this.onExtentChange(a.extent)})));if(this.initExtent)this.onExtentChange(this.initExtent);else this.onExtentChange(this.map.extent);this.shelter.hide();this.emit("map-load",this.map)}),c.hitch(this,function(a){console.error(a)}))}},getExtent:function(){return this.map&&this.map.extent},setExtent:function(a){if(this.map)return this.map.setExtent(a);var b=new d;setTimeout(c.hitch(this,function(){b.reject("map is null.")}),0);return b},restoreToDefaultWebMapExtent:function(){a.restoreToDefaultWebMapExtent(this.map,
this.map.webMapResponse,this.geometryServiceURL)},onExtentChange:function(a){this.emit("extent-change",a)}})})},"widgets/Bookmark/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:jimu/dijit/templates/ImageChooser.html":'\x3cdiv class\x3d"jimu-image-chooser js-fileapi-wrapper"\x3e\r\n  \x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintText"\x3e\r\n\t\t\x3cspan class\x3d"display-text" data-dojo-attach-point\x3d"displayText"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintImage"\x3e\r\n\t\t\x3cimg class\x3d"display-image" data-dojo-attach-point\x3d"selfImg"\x3e\r\n  \x3c/div\x3e\r\n  \x3cform data-dojo-attach-point\x3d"fileForm"\x3e\r\n    \x3clabel data-dojo-attach-point\x3d"mask"\x3e\x3c/label\x3e\r\n    \x3cinput type\x3d"file" data-dojo-attach-point\x3d"fileInput"\x3e\r\n  \x3c/form\x3e\r\n\x3c/div\x3e',
"url:jimu/dijit/templates/_CropImage.html":'\x3cdiv class\x3d"jimu-crop-image"\x3e\r\n\t\x3cdiv class\x3d"crop-section" data-dojo-attach-point\x3d"cropSection"\x3e\r\n\t\t\x3cdiv class\x3d"viewer-box hide-status" data-dojo-attach-point\x3d"viewerBox"\x3e\r\n\t\t\t\x3cdiv class\x3d"viewer-content" data-dojo-attach-point\x3d"viewerContent"\x3e\r\n\t\t\t\t\x3cimg class\x3d"viewer-image hide-status" data-dojo-attach-point\x3d"viewerImage" src\x3d""\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cimg class\x3d"base-image hide-status" data-dojo-attach-point\x3d"baseImage" data-dojo-attach-event\x3d"mousedown:_onViewerMouseDown,mouseup:_onViewerMouseUp"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cimg class\x3d"loading-image" data-dojo-attach-point\x3d"loadingImg" src\x3d""\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"controller hide-status" data-dojo-attach-point\x3d"zoomController"\x3e\r\n\t\t\x3cdiv class\x3d"zoom-out" data-dojo-attach-event\x3d"click:_onZoomOutClick"\x3e-\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"slider" data-dojo-attach-point\x3d"sliderNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"button" data-dojo-attach-point\x3d"sliderButton" data-dojo-attach-event\x3d"mousedown:_onSliderMouseDown,mouseup:_onSliderMouseUp"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"horizontal"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"zoom-in" data-dojo-attach-event\x3d"click:_onZoomInClick"\x3e+\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Bookmark/setting/Edit.html":'\x3cdiv style\x3d"width: 100%"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd title\x3d"${nls.title}" class\x3d"first"\x3e*${nls.title}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"name" \r\n            required\x3d"true" placeHolder\x3d${nls.title} data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd title\x3d"${nls.thumbnail}" class\x3d"first"\x3e${nls.thumbnail}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"imageChooserBase"\x3e\x3c/div\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;(${nls.thumbnailHint})\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e                                                                  \r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e \r\n    \x3cdiv class\x3d"extent-chooser" style\x3d"height: 400px" data-dojo-attach-point\x3d"extentChooserNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Bookmark/setting/Setting.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"marks-table-div" data-dojo-attach-point\x3d"bookmarksDiv"\x3e\r\n     \x3cdiv class\x3d\'bookmark-add jimu-float-leading\' data-dojo-attach-event\x3d"onclick: onAddBookmarkClick"\x3e\r\n      \x3cdiv class\x3d"add_mark_image"\x3e\x3c/div\x3e\u200b\r\n      \x3cdiv title\x3d"${nls.add}" class\x3d"add_mark_text"\x3e${nls.add}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/Bookmark/setting/css/style.css":".jimu-img-node{font-size: 12px; position: relative; float: left; border-radius: 4px; color: #686868; overflow: hidden;}.jimu-img-node .node-box{position: absolute; top: 0; bottom: 32px; left: 0; width: 100%; border-radius: 4px; overflow: hidden;}.jimu-img-node img{width: 100%; height: 100%; cursor: pointer;}.jimu-img-node .node-label{position: absolute; width: 100%; left: 0; bottom: 0; height: 30px; text-align: center; overflow: hidden; text-overflow: ellipsis;}.jimu-img-node:hover{color: #51b1fe;}.jimu-img-node.jimu-state-selected .node-label{background-color: #d9dde0;}.jimu-widget-bookmark-setting {height: 100%;}.jimu-widget-bookmark-setting .bookmark-list{height: 100%; width: 100%; overflow: auto;}.jimu-widget-bookmark-setting .marks-table-div{width: 100%; height: 100%; overflow-x:hidden; overflow-y:auto;}.jimu-widget-bookmark-setting .bookmark-add{position:relative; width:100px; height:60px; padding:3px; text-align:center; color:#999999; font-size:10px; border:1px dotted gray; -webkit-border-radius:5px; -moz-border-radius:5px; -o-border-radius:5px; -ms-border-radius:5px; border-radius:5px; background-size:cover; margin-top: 5px; margin-left: 20px\\9;}.jimu-widget-bookmark-setting .bookmark-add .add_mark_image{display: block; position: absolute; left: 43px; top: 5px; width:14px; height:14px; background-position:center center; background-image:url(images/add_mark.png);}.jimu-widget-bookmark-setting .bookmark-add .add_mark_text{display: block; position: absolute; top: 25px; width: 100%; font-size: 12px; white-space: normal; height: 28px; overflow: hidden; text-overflow: ellipsis;}.jimu-widget-bookmark-setting .bookmark-add:hover{cursor: pointer;}.jimu-widget-bookmark-setting .mark-item-div{position:relative; width:100px; height: 92px; font-size: 10px; margin-top: 5px;}.jimu-widget-bookmark-setting .mark-item-div:nth-child(8n+1){margin-left: 0px;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg{position:relative; width:100%; height:60px; line-height:28px; text-align:center; color:#999999; font-size:13px;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-thumbnail{width:100%; height:100%; -webkit-border-radius:5px; -moz-border-radius:5px; -o-border-radius:5px; -ms-border-radius:5px; border-radius:5px;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-detail-icon{display: block;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg.selected .mark-item-thumbnail{-webkit-box-sizing:content-box; -moz-box-sizing:content-box; -ms-box-sizing:content-box; -o-box-sizing:content-box; box-sizing:content-box;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-detail-icon{display: none; position:absolute; right:2px; bottom:2px; width:20px; height:20px; background-color:rgba(0, 0, 0, 0.3); background-repeat:no-repeat; background-position:center center; background-image:url(images/edit_mark.png); -webkit-border-radius:3px; -moz-border-radius:3px; -o-border-radius:3px; -ms-border-radius:3px; border-radius:3px; cursor:pointer;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-detail-icon:hover{background-color:rgba(0, 0, 0, 0.6);}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg:hover .mark-item-detail-icon{display: block;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-delete-icon{display: none; position:absolute; right:5px; top:5px; width:10px; height:10px; background-repeat:no-repeat; background-position:center center; background-image:url(images/delete_mark.png); -webkit-border-radius:3px; -moz-border-radius:3px; -o-border-radius:3px; -ms-border-radius:3px; border-radius:3px; cursor:pointer;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-bg:hover .mark-item-delete-icon{display: block;}.jimu-widget-bookmark-setting .mark-item-div .mark-item-title{display:inline-block; width:100%; text-align:center; color:#333333; font-size:12px; margin-top: 2px; margin-bottom: 25px; overflow: hidden; text-overflow: ellipsis; height: 30px;}.jimu-Bookmark-Edit{height: 100%; overflow-y: auto;}.jimu-Bookmark-Edit .setting-table {margin: 5px 20px; border-spacing: 10px; border-collapse: separate;}.jimu-Bookmark-Edit .setting-table .img-chooser{width: 100px; height: 60px;}.jimu-Bookmark-Edit .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: left; padding-right:15px; white-space: nowrap; max-width: 108px; overflow: hidden; text-overflow: ellipsis;}.jimu-Bookmark-Edit .input-table \x3e tbody \x3e tr \x3e .second{width:660px;}.jimu-rtl .jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-delete-icon{right:auto; left: 5px;}.jimu-rtl .jimu-widget-bookmark-setting .mark-item-div .mark-item-bg .mark-item-detail-icon{right:auto; left: 2px;}.jimu-rtl .jimu-widget-bookmark-setting .mark-item-div:nth-child(8n+1){margin-left: auto; margin-right: 0px;}.jimu-rtl .jimu-widget-bookmark-setting .bookmark-add{margin-left: auto; margin-right: 20px\\9;}",
"*now":function(l){l(['dojo/i18n!*preload*widgets/Bookmark/setting/nls/Setting*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/keys dojo/query jimu/BaseWidgetSetting jimu/dijit/Popup jimu/dijit/Message jimu/utils ./Edit libs/storejs/store".split(" "),function(l,c,m,g,d,n,q,h,r,s,a,f,b,p){return l([r,c],{baseClass:"jimu-widget-bookmark-setting",bookmarks:[],edit:null,popup:null,popupState:"",editIndex:null,startup:function(){this.inherited(arguments);this.setConfig(this.config)},setConfig:function(a){this.config=
a;this.bookmarks=this.config.bookmarks2D;this.map.itemInfo&&(this.map.itemInfo.itemData&&this.map.itemInfo.itemData.bookmarks)&&g.forEach(this.map.itemInfo.itemData.bookmarks,function(a){a.isInWebmap=!0;a.name=a.name;for(var b=0,e=0;e<this.bookmarks.length;e++)this.bookmarks[e].name===a.name&&b++;b||this.bookmarks.push(a)},this);this.currentBookmark=null;this.displayBookmarks()},getConfig:function(a){this.config.bookmarks2D=this.bookmarks;if(a){a=this._getKeysKey();for(var b in p.getAll())b.startWith(a)&&
p.remove(b)}return this.config},displayBookmarks:function(){this._clearBookmarksDiv();this._createmarkItems()},_clearBookmarksDiv:function(){for(var a=h(".mark-item-div",this.domNode),b=0;b<a.length;b++)d.destroy(a[b])},destroy:function(){this.inherited(arguments)},_getKeysKey:function(){return this.appConfig.map["3D"]?this.name+".3D":this.name+".2D"},onAddBookmarkClick:function(){this.popupState="ADD";this._openEdit(this.nls.addBookmark,{name:"",thumbnail:"",extent:this.map.extent.toJson()})},getBookmarkByName:function(a){for(var b=
this.bookmarks.length,c=0;c<b;c++)if(this.bookmarks[c].name===a)return this.editIndex=c,this.bookmarks[c]},_onEditClick:function(a){this.getBookmarkByName(a);a=this.bookmarks[this.editIndex];this.popupState="EDIT";this._openEdit(this.nls.edit,a)},_openEdit:function(a,c){this.edit=new b({nls:this.nls,folderUrl:this.folderUrl,portalUrl:this.appConfig.map.portalUrl,itemId:this.appConfig.map.itemId});this.edit.setConfig(c||{});this.popup=new s({titleLabel:a,autoHeight:!0,content:this.edit,container:"main-page",
width:640,buttons:[{label:this.nls.ok,key:q.ENTER,disable:!0,onClick:m.hitch(this,"_onEditOk")},{label:this.nls.cancel,key:q.ESCAPE}],onClose:m.hitch(this,"_onEditClose")});d.addClass(this.popup.domNode,"widget-setting-popup");this.edit.startup()},_onEditOk:function(){var b=this.edit.getConfig(),c=null;!b.name||!b.extent?new a({message:this.nls.warning}):("ADD"===this.popupState?(this.bookmarks.push(b),this.displayBookmarks(),c=!0):"EDIT"===this.popupState&&(this.bookmarks.splice(this.editIndex,1,
b),this.displayBookmarks(),c=!0),c?(this.popup.close(),this.popupState="",this.editIndex=null,c=!1):(b=g.mark(c.repeatFields,m.hitch(this,function(a){return a&&a.name})),new a({message:this.nls[c.errorCode]+b.toString()})))},_onEditClose:function(){this.popup=this.edit=null},_createmarkItems:function(){for(var a=0;a<this.bookmarks.length;a++){var b=this._createmarkItem(this.bookmarks[a]);d.place(b,this.bookmarksDiv)}},_createmarkItem:function(a){var b=d.toDom("\x3cdiv class\x3d'mark-item-div jimu-float-leading jimu-leading-margin2'\x3e\x3cdiv class\x3d'mark-item-bg'\x3e\x3cimg class\x3d'mark-item-thumbnail'\x3e\x3cdiv class\x3d'mark-item-delete-icon'\x3e\x3c/div\x3e\x3cdiv class\x3d'mark-item-detail-icon'\x3e\x3c/div\x3e\x3c/div\x3e\x3cspan class\x3d'mark-item-title'\x3e\x3c/span\x3e\x3c/div\x3e"),
c=h(".mark-item-thumbnail",b)[0],g=h(".mark-item-title",b)[0],l=h(".mark-item-delete-icon",b)[0];this.own(n(l,"click",m.hitch(this,this._onmarkItemDeleteClick,a.name)));l=h(".mark-item-detail-icon",b)[0];this.own(n(l,"click",m.hitch(this,this._onmarkItemEditClick,a.name)));b.item=a;l=a.thumbnail?f.processUrlInWidgetConfig(a.thumbnail,this.folderUrl):this.folderUrl+"images/thumbnail_default.png";d.setAttr(c,"src",l);g.innerHTML=a.name;d.setAttr(g,"title",a.name);return b},_clearBasemarksDiv:function(){for(var a=
h(".mark-item-div",this.domNode),b=0;b<a.length;b++)d.destroy(a[b])},_onmarkItemEditClick:function(a){this._onEditClick(a)},_onmarkItemDeleteClick:function(a){this.getBookmarkByName(a);null!==this.editIndex&&this.bookmarks.splice(this.editIndex,1);this.displayBookmarks()}})});