import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const NodesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="role" />
            <TextField source="type" />
            <TextField source="id" />
            <TextField source="inputs" />
        </Datagrid>
    </List>
);
