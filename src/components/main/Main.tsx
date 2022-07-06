import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { useContext } from 'react';

import { AppContext } from '../../context/context';
import { Transaction } from '../../models/common';
import Form from './Form';
import List from './List';

const Main = () => {
    const {state} = useContext(AppContext);
    const balance:number = state.reduce((acc: number, crrVlue: Transaction) => crrVlue.type === 'Expense' ? acc - crrVlue.amount : acc + crrVlue.amount, 0 );

    return (
        <Card >
            <CardHeader title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $ { balance }</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    Add Your Statement
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
