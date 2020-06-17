// AIM: IN THIS FILE WE ARE GOING TO LEARN HOW TO PUT JS OBJECTS INTO GEE CONTAINER

// 1. Handling Strings
var string = "In the cloud!";
var serverString = ee.String(string);
print(serverString);

// Another Way
var string2 = ee.String("Already in Cloud !");

// 2. Numbers : THis Math.E is already exists on server
var num = ee.Number(Math.E);
print(num);

// NOTE: AS WE HAVE TO USE SPECIAL FUNCTIONS TO OPERATE ON EE OBJECTS
var add = ee.Number(3).add(2);
print(add);

// 3. list
var lists = ee.List([1, 2, 3, 4]);
print(lists);
// print(lists[1]) //Undefined Way of accessing EE list Object
print(lists.get(1));  //Use of get method



// ******CASTING********
//  ////NOTE////
// Sometimes, Earth Engine doesn't know the type of an object that gets returned from a method.
// You, as the programmer, know that the value variable in the previous example is a number object.
// But if you try to use the add() method of an ee.Number, you'll get an error like:
// ->value.add is not a function<-




// Use a method on an ee.List to extract a value.
var value = lists.get(2);
print('Value at index 2:', value);
// Cast the return value of get() to a number.
print('No error:', ee.Number(value).add(3));


// 4. DICTIONARY
// We can construct EE dictionary using javascript objects
var dict = ee.Dictionary({
  e : Math.E,
  pi : Math.PI,
  phi : Math.sqrt(10)
  
});

print("Key e",dict.get('e'));
// Get all the keys
print("All the keys",dict.keys());

// **NOTE**
// note that the keys() method returns an ee.List.
// get() could return anything



// 5. DATE
// Define a date in Earth Engine.
var date = ee.Date('2015-12-31');
print('Date:', date);

// Get the current time using the JavaScript Date.now() method.
var now = Date.now();
print('Milliseconds since January 1, 1970', now);

// Initialize an ee.Date object.
var eeNow = ee.Date(now);
print('Now:', eeNow);

var aDate = ee.Date.fromYMD(2017, 1, 13);
print('aDate:', aDate);

var theDate = ee.Date.fromYMD({
  day: 13,
  month: 1,
  year: 2017
});
print('theDate:', theDate);






















