import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const submitEvent = (event) => {
        if(event.target.value > 20000){
            alert("The value cannot exced: " + currency +" 20000" );
            return;

        } else if (event.target.value < totalExpenses){
            alert("You cannot reduce budget value lower than spending" );
            return;

        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input 
                id='budget'
                required='required'
                type='number'
                value={budget}
                step="10"
                style={{width: '10em'}}
                onChange={submitEvent}>
            </input></span>
        </div>
    );
};

export default Budget;