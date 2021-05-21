import './views/index-view.js';

import { Router } from '@vaadin/router';

const routes = [
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
const body = document.querySelector('body');

const router = new Router(body);
router.setRoutes(routes);
