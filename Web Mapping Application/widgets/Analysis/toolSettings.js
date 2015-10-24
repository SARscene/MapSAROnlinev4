//>>built
define(["dojo/_base/lang","dojo/_base/array"],function(d,f){var b={},c="AggregatePoints CalculateDensity ConnectOriginsToDestinations CreateBuffers CreateDriveTimeAreas CreateViewshed CreateWatersheds DeriveNewLocations DissolveBoundaries EnrichLayer ExtractData FindExistingLocations FindHotSpots FindNearest FindSimilarLocations InterpolatePoints MergeLayers OverlayLayers PlanRoutes SummarizeNearby SummarizeWithin TraceDownstream".split(" "),e=[{id:0,dijitID:"esri/dijit/analysis/AggregatePoints",
title:"aggregateTool",imgDisplay:"images/aggregate-points.png",usage:"aggregatePointsUsage",analysisLayer:{name:"pointLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},requiredParam:{name:"polygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},icon:"images/AggregatePoints32.png"},{id:1,dijitID:"esri/dijit/analysis/CalculateDensity",title:"calculateDensity",imgDisplay:"images/calculate-density.png",usage:"calculateDensityUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint",
"esriGeometryMultipoint","esriGeometryPolyline"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/CreateDensitySurface32.png"},{id:2,dijitID:"esri/dijit/analysis/ConnectOriginsToDestinations",title:"connectOriginsToDestinations",imgDisplay:"images/connect-origins-to-destinations.png",usage:"connectOriginsToDestinationsUsage",analysisLayer:{name:"originsLayer",geomTypes:["esriGeometryPoint"]},requiredParam:{name:"featureLayers",isArray:!0,geomTypes:["esriGeometryPoint"]},
icon:"images/ConnectOriginstoDestinations32.png",privileges:["networkanalysis"]},{id:3,dijitID:"esri/dijit/analysis/CreateBuffers",title:"createBuffers",imgDisplay:"images/create-buffers.png",usage:"createBuffersUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},icon:"images/CreateBuffers32.png"},{id:4,dijitID:"esri/dijit/analysis/CreateDriveTimeAreas",title:"createDriveTimeAreas",imgDisplay:"images/create-drivetime.png",usage:"createDriveTimeAreasUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},
icon:"images/CreateDriveTimeAreas32.png",cannotCancel:!0,privileges:["networkanalysis"]},{id:5,dijitID:"esri/dijit/analysis/CreateViewshed",title:"createViewshed",imgDisplay:"images/create-viewshed.png",usage:"createViewshedUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},icon:"images/Viewshed32.png",privileges:["elevation"]},{id:6,dijitID:"esri/dijit/analysis/CreateWatersheds",title:"createWatershed",imgDisplay:"images/create-watersheds.png",usage:"createWatershedsUsage",
analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},icon:"images/Watershed32.png",privileges:["elevation"]},{id:7,dijitID:"esri/dijit/analysis/DeriveNewLocations",title:"deriveNewLocations",imgDisplay:"images/derive-new-locations.png",usage:"deriveNewLocationsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},optionalParams:[{name:"inputLayers",isArray:!0,geomTypes:["*"]}],icon:"images/FindNewLocations32.png"},{id:8,dijitID:"esri/dijit/analysis/DissolveBoundaries",title:"dissolveBoundaries",
imgDisplay:"images/dissolve-boundaries.png",usage:"dissolveBoundariesUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPolygon"]},icon:"images/DissolveBoundaries32.png"},{id:9,dijitID:"esri/dijit/analysis/EnrichLayer",title:"enrichLayer",imgDisplay:"images/enrich-layer.png",usage:"enrichLayerUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},icon:"images/GeoenrichFeatures32.png",privileges:["geoenrichment"]},{id:10,dijitID:"esri/dijit/analysis/ExtractData",title:"extractData",
imgDisplay:"images/extract-data.png",usage:"extractDataDesc",optionalParams:[{name:"featureLayers",isArray:!0,geomTypes:["*"]}],icon:"images/ClipAndShip32.png"},{id:11,dijitID:"esri/dijit/analysis/FindExistingLocations",title:"findExistingLocations",imgDisplay:"images/find-existing-locations.png",usage:"findExistingLocationsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},optionalParams:[{name:"inputLayers",isArray:!0,geomTypes:["*"]}],icon:"images/FindExistingLocations32.png"},{id:12,
dijitID:"esri/dijit/analysis/FindHotSpots",title:"findHotSpots",imgDisplay:"images/find-hot-spots.png",usage:"findHotSpotsUsage",analysisLayer:{name:"analysisLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolygon"]},optionalParams:[{name:"aggregationPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/FindHotSpots32.png"},{id:13,dijitID:"esri/dijit/analysis/FindNearest",title:"findNearest",
imgDisplay:"images/find-nearest.png",usage:"findNearestUsage",analysisLayer:{name:"analysisLayer",geomTypes:["*"]},requiredParam:{name:"nearLayers",isArray:!0,geomTypes:["*"]},icon:"images/FindNearest32.png",cannotCancel:!0},{id:14,dijitID:"esri/dijit/analysis/FindSimilarLocations",title:"findSimilarLocations",imgDisplay:"images/find-similar-locations.png",usage:"findSimilarLocationsUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},optionalParams:[{name:"searchLayers",isArray:!0,geomTypes:["*"]}],
icon:"images/FindSimilarLocations32.png"},{id:15,dijitID:"esri/dijit/analysis/InterpolatePoints",title:"interpolatePoints",imgDisplay:"images/interpolate-points.png",usage:"interpolatePointsUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint","esriGeometryMultipoint"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]},{name:"predictAtPointLayers",isArray:!0,geomTypes:["esriGeometryPoint"]}],icon:"images/CreateInterpolatedSurface32.png"},
{id:16,dijitID:"esri/dijit/analysis/MergeLayers",title:"mergeLayers",imgDisplay:"images/merge-layers.png",usage:"mergeLayersUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},requiredParam:{name:"mergeLayers",isArray:!0,geomTypes:["*"]},icon:"images/MergeLayers32.png"},{id:17,dijitID:"esri/dijit/analysis/OverlayLayers",title:"overlayLayers",imgDisplay:"images/overlay-layers.png",usage:"overlayLayersUsage",analysisLayer:{name:"inputLayer",geomTypes:["*"]},requiredParam:{name:"overlayLayer",isArray:!0,
geomTypes:["*"]},icon:"images/OverlayLayers32.png"},{id:18,dijitID:"esri/dijit/analysis/PlanRoutes",title:"planRoutes",imgDisplay:"images/plan-routes.png",usage:"planRoutesUsage",analysisLayer:{name:"stopsLayer",geomTypes:["esriGeometryPoint"]},optionalParams:[{name:"featureLayers",isArray:!0,geomTypes:["esriGeometryPoint"]}],icon:"images/PlanRoutes32.png",cannotCancel:!0,privileges:["networkanalysis"]},{id:19,dijitID:"esri/dijit/analysis/SummarizeNearby",title:"summarizeNearby",imgDisplay:"images/summarize-nearby.png",
usage:"summarizeNearbyUsage",analysisLayer:{name:"sumNearbyLayer",geomTypes:["*"]},requiredParam:{name:"summaryLayers",isArray:!0,geomTypes:["*"]},icon:"images/SummarizeNearby32.png"},{id:20,dijitID:"esri/dijit/analysis/SummarizeWithin",title:"summarizeWithin",imgDisplay:"images/summarize-within.png",usage:"summarizeWithinUsage",analysisLayer:{name:"sumWithinLayer",geomTypes:["esriGeometryPolygon"]},requiredParam:{name:"summaryLayers",isArray:!0,geomTypes:["*"]},icon:"images/SummarizeWithin32.png"},
{id:21,dijitID:"esri/dijit/analysis/TraceDownstream",title:"traceDownstream",imgDisplay:"images/trace-downstream.png",usage:"traceDownstreamUsage",analysisLayer:{name:"inputLayer",geomTypes:["esriGeometryPoint"]},optionalParams:[{name:"boundingPolygonLayers",isArray:!0,geomTypes:["esriGeometryPolygon"]}],icon:"images/TraceDownstream32.png",privileges:["elevation"]}];b.findToolSetting=function(a){a=f.indexOf(c,a);return-1!==a?d.clone(e[a]):null};b.getToolName=function(a){return"id"in a&&0<=a.id&&a.id<
c.length?c[a.id]:null};b.getAllSettings=function(){return d.clone(e)};return b});