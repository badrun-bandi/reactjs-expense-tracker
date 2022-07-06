import { Delete, MoneyOff } from '@mui/icons-material';
import { Avatar, IconButton, List as MUIList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/context';
import { Types } from '../../models/common';

const List = () => {
  const {state, dispatch} = useContext(AppContext);
  const deleteTransactions = (id: string) => {
    dispatch({ type: Types.DELETE_TRANSACTION,  payload: id });
  }
  return (
        <MUIList dense={false} >
            {state.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem key={transaction.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText style={{textTransform: 'capitalize'}} primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransactions(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List;
