// in src/App.js
import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import settings from './settings';

import { NodesList } from './nodes';

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    // options.headers.set('Content-Range','bytes : 0-9/*');
    const token = localStorage.getItem('msesst');
    if (token) options.headers.set('xcom', token);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const apiProvider = simpleRestProvider(settings.api.uri, fetchJson);

const App = () => (
        <Admin dataProvider={apiProvider}>
            <Resource name="conf/default/items" list={NodesList} />
        </Admin>
    );

export default App;
