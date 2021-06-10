<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

# [My live link](https://angry-hodgkin-a54780.netlify.app)✌

## Summary

In this project I tried to simulate a travel application. It is based on Lit Element which is a javascript framework and Lion Web Components which are open source components.

### Key Points

##### - Routes based on Vaadin Router.

##### - 4 different views, 3 statics (index, add-destination, places-view) and 1 dynamic based on an id (places-id-view).

##### - Style applied on lion web components.

##### - Components with minimal responsability for reusability and simplicity.

##### - API calls in web components.

##### - Choosen colors from Adobe Colors.

##### - High accesibility (tab index, labels, keypress)

##### - Input validators (min characters, http/https for links).

##### - Responsive design (media queries).

## Interactions with the API

##### 1. Post Method:

- I created a POST request at the following link: https://devschool-2020.firebaseio.com/bogdan/places.json
  Using the following JSON body:

{
"name":"Muntii Ciucas",
"type":"nature",
"description":"lorem ipsum",
"imageUrl":""
}

##### 2. Get Method:

- I created a GET request on the following link: https://devschool-2020.firebaseio.com/bogdan/places.json
  In return I received the following response:

{
"-M_G9qMRDbt7Ujd_ts0k": {
"description": "lorem ipsum",
"imageUrl": "",
"name": "Muntii Ciucas",
"type": "nature"
}
}

- Also I can make a GET request on the specific ID of the location in this format: rootURL/bogdan/places/-M_G9qMRDbt7Ujd_ts0k.json
  In return, the response will be:

{
"description": "lorem ipsum",
"imageUrl": "",
"name": "Muntii Ciucas",
"type": "nature"
}

##### 3. PUT Method:

- I created a PUT request on the specific ID, to replace informations of that location: rootURL/bogdan/places/-M_G9qMRDbt7Ujd_ts0k.json

{
"name":"Bucharest",
"type":"city",
"description":"lorem ipsum",
"imageUrl":""
}

Now, the previous content was overwritten.

##### 4. PATCH Method:

- I created a PATCH request to update the image URL of a specific location: rootURL/bogdan/places/-M_GD6P2D7QuzMhak1By.json
  with the following body:

{
"imageUrl": "someRandomUrl.."
}

Now, the previous value of imageUrl was updated, with no side effects on the other properties.

##### 5. DELETE Method:

- Using this method will delete the content of specific ID : rootURL/bogdan/places/-M_GD6P2D7QuzMhak1By.json

In return, we will receive null.

##### 6. FETCH API

- In our page, I used the fetch() method to return the information as bellow:

const myUrl = 'https://devschool-2020.firebaseio.com/bogdan/places.json';

fetch(myUrl)

.then(response => response.json())

.then(data => {

    //log an array with objects of the locations
    console.log(Object.values(data));

    //log the first object
    console.log(Object.values(data)[0]);

    //log the value of name property of first object
    console.log(Object.values(data)[0].name);

    //Iterate through the array to log all the values
    Object.values(data).forEach(location => {
      console.log(location.name, location.type, location.description);
    });

});

In this way, I get access to all the properties of each location i added, using the POST method.

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

Welcome to TravelApp starter kit ! You will implement features for the app while learning about frontend development.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
