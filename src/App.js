import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data';

const dataProvider = fakeRestProvider(data, true);
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;
