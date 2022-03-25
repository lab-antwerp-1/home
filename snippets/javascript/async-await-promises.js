/*The purpose of this snippet is to demonstrate how working with and without promises
affects the output result. A lot of codes are simplified just to focus on the 
intended purpose
html code below. save it as index.html*/

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="promises.js"></script>
</body>
</html>
``````js
//Below is the Javascript code. Save it as promises.js
//Array of objects of some countries with their respective cities.

const countries = [
    {name: "Belgium",city: "Brussels"},
    {name: "Netherland",city: "Amsterdam"},
    {name: "France",city: "Paris"},
];

//A function to fetch and render the data
//This function needs at least 1 second to finish displaying the countries
function getCountry(){
    let output = '';
   setTimeout(
    ()=>{
        for(const country of countries){
            output += "<li>"+country.name+"-"+country.city+"</li>";           
       }
       document.body.innerHTML = output;
    }
       ,1000);
};

//A function to add a country with its capital city.
//This function needs at least 2 seconds to finish execution
function addCountry(country){
    return new Promise((resolve,reject)=>{
        setTimeout(
            ()=>{
                countries.push(country);  
                resolve();  
                console.log(countries);     
            }
            , 2000);
    });           
}

/*---------------------------------------------------------------------------------
                ---------- Without Promise------

uncomment the next 2 lines to execute the above code without a promise.
 You cant see 'German' directly in the browser but in the console.
 This is because , by the time the data is added(after 2sec), the render 
 function (needs only 1 sec) has completed its task.
 */
addCountry({name: "German",city: "Berlin"});
getCountry();

/*-----------------------------------------------------------------------------------
                 ------------Using promises--------

uncomment the code below and see how using a promise results in the expected result. 
due to the promise ,the updated data is displayed in the browser*/

// addCountry({name: "German",city: "Berlin"})
// .then(getCountry);

/*-----------------------------------------------------------------------------------
                ------------Using the async/await format of promises-------
 */

// async function init(){
//     await addCountry({name: "German",city: "Berlin"});
//     getCountry();
// }
// init()
//----------------------------------------------------------------------------------
<<<<<<< HEAD
```;
=======
```
>>>>>>> 37d994c656c55ebcfeb3afad1cff75955671262d
