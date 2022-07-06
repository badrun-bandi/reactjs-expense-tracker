import { useContext } from 'react';
import { expenseCategories, incomeCategories, resetCategories } from '../constants/constants';
import { AppContext } from '../context/context';

const useTransactions = (title: string) => {
    resetCategories();
    const { state } = useContext(AppContext);
    const transactionPerType = state.filter((t) => t.type === title);
    const total = transactionPerType.reduce((acc, currentVal) => acc += currentVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    transactionPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if(category) category.amount += t.amount
    })
    const filteredCategories = categories.filter((sc) => sc.amount > 0);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
            labels: filteredCategories.map((c) => c.type),
    };
    return { filteredCategories, total, chartData };
}
export default useTransactions;