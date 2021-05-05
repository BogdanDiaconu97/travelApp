//  post request was made in insomnia and locations were stored in an array (data)

// function for building the html template
const displayInfo = arrData => {
  const locationsDiv = document.querySelector('.container');
  arrData.forEach(location => {
    const html = `
        <h3>Location: ${location.name}</h3>
        <h3>Type: ${location.type}</h3>
        <h4>Trip offers:</h4>
        <h5>First:</h5>
        <ul>
            <li>Days: ${location.vacations.first.days}</li>
            <li>Price: ${location.vacations.first.price}</li>
        </ul>
        <h5>Second:</h5>
        <ul>
            <li>Days: ${location.vacations.second.days}</li>
            <li>Price: ${location.vacations.second.price}</li>
        </ul>
        `;
    locationsDiv.innerHTML += html;
  });
};

const myUrl =
  'https://devschool-2020.firebaseio.com/bogdan/places/-MZvnhh9ce6inC1V65In.json';

fetch(myUrl)
  .then(response => response.json())
  .then(data => {
    displayInfo(data.data);
    // data showed in browser
    // console.log(data);
    // data.data.forEach(location=>console.log(location.name, location.type, location.vacations.first.days,location.vacations.first.price, location.vacations.second.days,location.vacations.second.price));
  });
