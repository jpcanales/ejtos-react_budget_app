import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
	if(newBudget > 20000) {
	 alert("Budget cannot be more than 20000");}
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary' style={{width:'400px'}}>
<span>Budget: {Location}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
