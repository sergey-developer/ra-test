import React from "react";
import {Datagrid, List, TextField} from "react-admin";

import CompanyNameTextField from "./CompanyNameTextField";
import UsersListFilter from "./UsersListFilter";
import MapPanel from "./MapPanel";

const UsersList = (props) => (
    <List {...props} filters={<UsersListFilter/>}>
        <Datagrid
            rowClick='expand'
            expand={<MapPanel/>}
        >
            <TextField source='name'/>
            <TextField source='username'/>
            <TextField source='email'/>
            <CompanyNameTextField source='company.name'/>
        </Datagrid>
    </List>
);

export default UsersList