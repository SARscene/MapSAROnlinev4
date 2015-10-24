//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/DeferredList dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/geometry/Polyline esri/graphic esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),function(z,r,s,A,k,f,B,w,x,C,t,y,q,D,E,F){return z("ClosestInfo",null,{constructor:function(b,c,a){this.tab=b;this.container=c;this.parent=a;this.graphicsLayer=this.incident=
null;this.map=a.map},updateForIncident:function(b,c,a){this.container.innerHTML="Loading...";var n=[];this.incident=b;c=x.buffer(b.geometry,c,this.parent.config.distanceSettings[this.parent.config.distanceUnits]);this.graphicsLayer=a;this.graphicsLayer.clear();var l=this.tab.tabLayers;a=[];for(var g=0;g<l.length;g++){var d=l[g],h=new F;h.returnGeometry=!0;h.geometry=c;h.outFields=this._getFields(d);a.push(d.queryFeatures(h))}(new A(a)).then(r.hitch(this,function(a){for(var e=0;e<a.length;e++){var c=
a[e][1],d=this._getFields(l[e]),c=c.features;if(0<c.length){for(var g=0;g<c.length;g++){for(var h=c[g],k={DISTANCE:this._getDistance(b.geometry,h.geometry)},f=0;f<d.length;f++)k[d[f]]=h.attributes[d[f]];h.attributes=k}c.sort(this._compareDistance);n.push(c[0])}}this._processResults(n)}))},_processResults:function(b){this.container.innerHTML="";0===b.length&&(this.container.innerHTML=this.parent.nls.noFeaturesFound);var c=f.create("div",{id:"tpc",style:"width:"+220*b.length+"px;"},this.container);
k.add(c,"IMT_tabPanelContent");for(var a=this.parent.nls[this.parent.config.distanceUnits],n=0;n<b.length;n++){var l=n+1,g=b[n],d=g.geometry,h=d;"point"!==d.type&&(h=d.getExtent().getCenter());var g=g.attributes,m=a+": "+Math.round(100*g.DISTANCE)/100,d="",e=0,u;for(u in g)"DISTANCE"!==u&&3>e&&(d+=g[u]+"\x3cbr/\x3e",e+=1);e=f.create("div",{id:"Feature_"+l},c);k.add(e,"IMTcolRec");var p=f.create("div",{},e);k.add(p,"IMTcolRecBar");var v=f.create("div",{innerHTML:l},p);k.add(v,"IMTcolRecNum");B.set(v,
"backgroundColor",this.parent.config.color);w(v,"click",r.hitch(this,this._zoomToLocation,h));m=f.create("div",{innerHTML:m},p);k.add(m,"IMTcolDistance");this.parent.config.enableRouting&&(m=f.create("div",{},p),k.add(m,"IMTcolDir"),w(m,"click",r.hitch(this,this._routeToIncident,h)));d=f.create("div",{innerHTML:d},e);k.add(d,"IMTcolInfo");d=new q(q.STYLE_SOLID,new s.fromString(this.parent.config.color),1);d=new y(y.STYLE_CIRCLE,24,d,new s.fromString(this.parent.config.color));e=new D;e.family="Arial";
e.size="12px";l=new E(l,e,"#ffffff");l.setOffset(0,-4);null===g.OUTSIDE_POLYGON&&(e=new q(q.STYLE_SOLID,new s([0,0,0,1]),1),m=new C(h.spatialReference),p=this.incident.geometry,"point"!==this.incident.geometry.type&&(p=this.incident.geometry.getExtent().getCenter()),m.addPath([h,p]),this.graphicsLayer.add(new t(m,e,{})));this.graphicsLayer.add(new t(h,d,g));this.graphicsLayer.add(new t(h,l,g))}},_getFields:function(b){var c=[];b=b.infoTemplate.info.fieldInfos;for(var a=0;a<b.length;a++){var f=b[a];
f.visible&&c.push(f.fieldName)}return c},_getDistance:function(b,c){var a=0,f=this.parent.config.distanceUnits,a=x.distance(b,c,9001);switch(f){case "miles":a*=6.21371E-4;break;case "kilometers":a*=0.0010;break;case "feet":a*=3.28084;break;case "yards":a*=1.09361;break;case "nauticalMiles":a*=5.39957E-4}return a},_compareDistance:function(b,c){return b.attributes.DISTANCE<c.attributes.DISTANCE?-1:b.attributes.DISTANCE>c.attributes.DISTANCE?1:0},_zoomToLocation:function(b){this.parent.zoomToLocation(b)},
_routeToIncident:function(b){this.parent.routeToIncident(b)}})});