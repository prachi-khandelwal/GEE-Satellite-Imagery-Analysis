/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var AOI = /* color: #00ffff */ee.Geometry.Point([86.00145750263727, 25.577561362278928]),
    l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// One of the problems with this composite is that it's full of clouds. 
// Instead of just taking the last pixel in the collection, you can reduce the ImageCollection

// Compositing Image with reducers(Median)
var median = l8.filterDate('2016-01-01', '2016-12-31').median();
var visParams = {bands:['B4','B3','B2'], max:0.3};

// Display Median composite
Map.setCenter(85.826, 25.635, 8);
Map.addLayer(median, visParams, 'median');

// Load or import the Hansen et al. forest change dataset.
var hansenImage = ee.Image('UMD/hansen/global_forest_change_2015');

// Select the land/water mask.
var datamask = hansenImage.select('datamask');

// Create a binary mask.
var mask = datamask.eq(1);

// Update the composite mask with the water mask.
var maskedComposite = median.updateMask(mask);
Map.addLayer(maskedComposite, visParams, 'masked');

// Make a water image out of the mask.
var water = mask.not();

// Mask water with itself to mask all the zeros (non-water).
water = water.mask(water);

// Make an image collection of visualization images.
var mosaic = ee.ImageCollection([
  median.visualize(visParams),
  water.visualize({palette: '000044'}),
]).mosaic();

// Display the mosaic.
Map.addLayer(mosaic, {}, 'custom mosaic');
