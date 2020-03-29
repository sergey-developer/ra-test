import React from "react";
import {Filter, TextInput} from "react-admin";

const UsersListFilter = (props) => (
    <Filter {...props}>
        <TextInput
            label="Search"
            source="name"
            alwaysOn
        />
    </Filter>
)

export default UsersListFilter