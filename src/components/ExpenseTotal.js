import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary' style={{width:'400px'}}>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
	
    );
};
export default ExpenseTotal;
