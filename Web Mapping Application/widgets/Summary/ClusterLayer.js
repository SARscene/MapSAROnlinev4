//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/Color esri/layers/GraphicsLayer esri/graphic esri/geometry/Extent esri/geometry/Point esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol".split(" "),function(s,x,m,y,p,z,u,q,v,A,B){return s("ClusterLayer",[y],{constructor:function(a){this.name=a.id;this.displayOnPan=a.displayOnPan||!1;this._map=a.map;this.clusterSize=a.clusterSize||100;this.color=a.color||"#ff0000";this.countField=a.countField;
this._features=[];try{this.setFeatures(a.features)}catch(b){console.log(b)}this.loaded=!0;this.onLoad(this)},setFeatures:function(a){this._map.infoWindow.isShowing&&this._map.infoWindow.hide();this._features=a;this._clusterFeatures()},setColor:function(a){this.color=a;this._clusterFeatures()},_clusterFeatures:function(){this.clear();var a=this._features;if(0<a.length){for(var b=this.clusterSize,e=[],d=this._map.spatialReference,g=this._map.extent,r=new u(g.xmin,g.ymax,d),f=Math.ceil(this._map.height/
b),h=Math.ceil(this._map.width/b),k=g.getWidth()/this._map.width*b,b=g.getHeight()/this._map.height*b,g=0;g<f;g++)for(var t=0;t<h;t++){var l=r.x+k*t,n=r.y-b*g,n=new z(l,n-b,l+k,n,d),l=[],c;for(c in a){var w=a[c];n.contains(w.geometry)&&l.push(w)}0<l.length&&(n=this._getClusterCenter(l),e.push({center:n,graphics:l}))}for(var s in e)a=e[s],d=this._getClusterCount(a),f=a.graphics,h=d.toString(),k=19*h.length,c=this._getSymbolColor(),b=new v(v.STYLE_NULL,new m(0,0,0,0),0),r=new q(q.STYLE_CIRCLE,1.6*k,
b,new m([c[0],c[1],c[2],0.4])),k=new q(q.STYLE_CIRCLE,k,b,new m([c[0],c[1],c[2],0.8])),c=new A,c.family="Arial",c.size="12px",h=new B(h,c,"#ffffff"),h.setOffset(0,-4),f={Count:d,Data:f},1<d?(this.add(new p(a.center,r,f)),this.add(new p(a.center,k,f)),this.add(new p(a.center,h,f))):(a=a.graphics[0].geometry,this.add(new p(a,k,f)),this.add(new p(a,h,f)))}},_getSymbolColor:function(){var a=m.fromString(this.color),b=m.fromString("#000000");return m.blendColors(a,b,0.1).toRgb()},_getClusterCount:function(a){for(var b=
0,e=0;e<a.graphics.length;e++)var d=a.graphics[e],b=this.countField&&d.attributes[this.countField]?b+d.attributes[this.countField]:b+1;return b},_getClusterCenter:function(a){var b=0,e=0,d=a.length;x.forEach(a,function(a){b+=a.geometry.x;e+=a.geometry.y},this);return new u(b/d,e/d,a[0].geometry.spatialReference)}})});