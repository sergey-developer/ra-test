import React from 'react';
import {Admin, Resource} from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';

import data from './data';
import UsersList from "./Components/Users/UsersList";

const dataProvider = fakeRestProvider(data, true);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UsersList}/>
    </Admin>
);

export default App;
