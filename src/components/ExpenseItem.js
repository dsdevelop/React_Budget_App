import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {MdAddCircle,MdRemoveCircle} from 'react-icons/md'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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

    const decreseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td aling="center"><MdAddCircle size='2em' fill="green" onClick={event=> increaseAllocation(props.name)}></MdAddCircle></td>
        <td><MdRemoveCircle size='2em' fill="red" onClick={event=> decreseAllocation(props.name)}></MdRemoveCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;