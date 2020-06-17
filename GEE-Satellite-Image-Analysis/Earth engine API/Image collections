/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var AOI = /* color: #ffc82d */ee.Geometry.Point([85.19346107692121, 25.648918012954102]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// An image collection refers to a set of Earth Engine images. 

// Importing Landsat Image collection
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA");

// Filtering the Image collection
var spatialFilter = l8.filterBounds(AOI);
print("Spatial Filter",spatialFilter);

var temporalFilter = spatialFilter.filterDate("2015-01-01","2020-01-01");
print("Temporal Filter",temporalFilter);

// To Sort the least Cloudy image
var sortCloud = temporalFilter.sort("CLOUD_COVER");

// Get the first Least Cloudy Images
var leastCloudy = sortCloud.first();
 
// Displaying Multi-Bands Images With default RGB
Map.centerObject(leastCloudy, 8);
Map.addLayer(leastCloudy, {}, 'default RGB');

// Displaying Multi-Bands Images with True-Color composite
Map.addLayer(leastCloudy,{bands:['B4','B3','B2'], max:0.3}, 'True-Color composite');
            
// Displaying Multi-Bands Images with False-Color Composite
Map.addLayer(leastCloudy,{bands:['B5','B4','B3'], max:0.3}, 'False-Color composite');

// Displaying NOn-Filtered images
var visParams = {bands: ['B4', 'B3', 'B2'], max: 0.3};
var landsat2016 = l8.filterDate('2016-01-01', '2016-12-31');
Map.addLayer(landsat2016, visParams, 'l8 collection');
















