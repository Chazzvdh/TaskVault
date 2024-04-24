// src/router.ts
import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('#outlet'), {
    mode: 'history', // Use HTML5 history API
});

router.setRoutes([
    {
        path: '/',
        children: [
            {path: '/', component: 'home-element'},
            {path: '/tasks', component: 'status-container-element'},
        ],
    },
]).then(r => console.log('Router initialized'));