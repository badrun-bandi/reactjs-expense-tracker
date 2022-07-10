import { Delete, MoneyOff } from '@mui/icons-material';
import { Avatar, IconButton, List as MUIList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide, styled } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useContext } from 'react';
import { AppContext } from '../../../context/context';
import { Types } from '../../../models/common';
import { formatCurrency, formatDate } from '../../../utils/utils';

const List = () => {
  const {state, dispatch} = useContext(AppContext);
  const deleteTransactions = (id: string) => {
    dispatch({ type: Types.DELETE_TRANSACTION,  payload: id });
  }

  const AvatarIncome = styled(Avatar)({
    color: '#fff',
    backgroundColor: green[500]
  });

  const AvatarExpense = styled(Avatar)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  }));

  const List = styled(MUIList)({
    maxHeight: '150px',
    overflow: 'auto',
  });

  return (
        <List dense={false} >
            {state.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem key={transaction.id}>
                        <ListItemAvatar>
                        {transaction.type === 'Income'  && <AvatarIncome><MoneyOff /></AvatarIncome>}
                        {transaction.type === 'Expense' && <AvatarExpense><MoneyOff /></AvatarExpense>}
                        </ListItemAvatar>
                        <ListItemText style={{textTransform: 'capitalize'}} primary={transaction.category} secondary={`$${formatCurrency(transaction.amount)} - ${formatDate(new Date(transaction.date))}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransactions(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </List>
    )
}

export default List;
