/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var srtm = ee.Image("CGIAR/SRTM90_V4"),
    AOI = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-112.56591572265627, 36.03351745289275],
          [-111.80785908203127, 36.115654777140584],
          [-112.04955830078127, 36.544914232491685],
          [-112.43682636718752, 36.52725959751536]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Computation on Images

// // Load the SRTM image
// var srtm = ee.Image("CGIAR/SRTM90_V4");

// Apply the algorithm to the image
var slope = ee.Terrain.slope(srtm);

// Display the result
Map.setCenter(-112.8598, 36.2841, 9);
// Map.addLayer(slope,{min:0, max:60},'slope');

// Image MATH
var aspect = ee.Terrain.aspect(srtm);

// Convert to radians, compute the sin of the image
var sinImage = aspect.divide(180).multiply(Math.PI).sin();

// Display the result
// Map.addLayer(sinImage,{min:-1, max:1},"sin");

// Compute the mean elevation in the polygon
var meanDict = srtm.reduceRegion(
  {reducer : ee.Reducer.mean(),
  geometry : AOI,
  scale : 30
  });
  
  // Get the mean of the polygon
  var mean = meanDict.get('elevation');
  // print('Mean Elevation',mean);

//Calculating the nominal scale of an image
var scale = srtm.projection().nominalScale();
print("SRTM scale in meters",scale);












