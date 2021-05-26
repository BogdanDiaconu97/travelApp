import './views/index-view.js';
import './views/places-id-view.js';

import { Router } from '@vaadin/router';

const basicRoutes = [
  {
    path: '/',
    component: 'index-view',
  },
  {
    path: '/places',
    component: 'places-view',
    action: async () => {
      await import('./views/places-view.js');
    },
  },
  {
    path: '/add-destination',
    component: 'add-destination-view',
    action: async () => {
      await import('./views/add-destination-view.js');
    },
  },
];

const createRoutes = async () => {
  const myUrl = 'https://devschool-2020.firebaseio.com/bogdan/places.json';
  const response = await fetch(myUrl);
  const jsonData = await response.json();
  const data = Object.keys(jsonData);
  const locationsPaths = [];
  data.forEach(id => {
    locationsPaths.push({
      path: `/places/${id}`,
      component: 'places-id-view',
    });
  });
  return locationsPaths;
};
const dynamicPaths = await createRoutes();
const routes = basicRoutes.concat(dynamicPaths);
console.log(routes);

const body = document.querySelector('body');

const router = new Router(body);
router.setRoutes(routes);
