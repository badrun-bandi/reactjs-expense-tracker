import { Button as MUIButton, FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { expenseCategories, incomeCategories } from '../../../constants/constants';
import { AppContext } from '../../../context/context';
import { Category, Transaction, Types } from '../../../models/common';
import { formatDate } from '../../../utils/utils';
import { WrappedTextField } from '../../library/WrappedTextField';

const form = {
    type: 'Income',
    category: '',
    amount: 0,
    date: formatDate(new Date()),
}

const Form = () => {
  const [formData, setFormData] = useState(form);
  const {dispatch} = useContext(AppContext);
  const addTransaction = (transaction: Transaction) => {
    dispatch({ type: Types.ADD_TRANSACTION,  payload: transaction });
  }
  const createTransactions = () => {
      const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
      addTransaction(transaction);
      setFormData(form);
  }
  const selectedCategory: Category[] = formData.type === 'Income' ? incomeCategories : expenseCategories;
  const Button = styled(MUIButton)(({ theme }) => ({
      marginTop: '20px',
      marginLeft: '16px'
  }));
  const handleValueChanged = (name: any) => (event: { target: { value: any; }; }) => {
    let value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="type-label">Type</InputLabel>
          <Select label="Type" labelId="type-label" id="type-select" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select required label="Category" labelId="category-label" id="category-select" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategory.map((c:Category) => (
              <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
          <WrappedTextField
            id='amount-text'
            name='amount'
            label='Amount'
            type='number'
            value={(formData.amount)}
            handleValueChanged={handleValueChanged}/>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" onChange={(e) => setFormData({ ...formData, date: formatDate(new Date(e.target.value)) })} 
        InputLabelProps={{ shrink: true }} defaultValue={formData.date}
        label="Date" fullWidth />
      </Grid>
      <Button variant="outlined" color="primary" fullWidth onClick={createTransactions}>Create</Button>
    </Grid>
  )
}
export default Form;