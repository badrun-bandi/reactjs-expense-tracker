import { Card as MUICard, CardContent, CardHeader, Divider as divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useContext } from 'react';

import { AppContext } from '../../context/context';
import { Transaction } from '../../models/common';
import { formatNumber } from '../../utils/utils';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const {state} = useContext(AppContext);
    const balance:number = state.reduce((acc: number, crrVlue: Transaction) => crrVlue.type === 'Expense' ? acc - crrVlue.amount : acc + crrVlue.amount, 0 );

    const MUICardContent = styled(CardContent)({
        paddingTop: 0,
    });

    const Divider = styled(divider)({
        margin: '20px 0'
    });

    const Card = styled(MUICard)(({ theme }) => ({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }));

    return (
        <Card>
            <CardHeader title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance { formatNumber(balance) }</Typography>
                <Typography variant="subtitle1" sx={{ lineHeight: '1.5em', mt: '20px' }}>
                    Add Your Income/Expanse
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <MUICardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </MUICardContent>
        </Card>
    )
}

export default Main;
