import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{backgroundColor: 'green'}}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={{backgroundColor: 'red'}}>-</button></td>
        <td><TiDelete size='1.5em' onClick={event=> handleDeleteExpense(props.id)}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
