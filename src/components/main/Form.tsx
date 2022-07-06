import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { expenseCategories, incomeCategories } from '../../constants/constants';
import { AppContext } from '../../context/context';
import { Category, Transaction, Types } from '../../models/common';
import formatDate from '../../utils/utils';

const form = {
    type: 'Income',
    category: '',
    amount: '',
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
      addTransaction(transaction)
      setFormData(form)
  }
  const selectedCategory: Category[] = formData.type === 'Income' ? incomeCategories : expenseCategories
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategory.map((c:Category) => (
              <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" onChange={(e) => setFormData({ ...formData, date: formatDate(new Date(e.target.value)) })} label="Date" fullWidth />
      </Grid>
      <Button variant="outlined" color="primary" fullWidth onClick={createTransactions}>Create</Button>
    </Grid>
  )
}
export default Form;