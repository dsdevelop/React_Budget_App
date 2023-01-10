import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                {/* Add the code here to add the components          */}
                <h1>Company's Budget Allocation</h1>
                <div class="row">
                    <div class="col-sm">
                        <Budget></Budget>
                    </div>
                    <div class="col-sm">
                        <Remaining></Remaining>
                    </div>
                    <div class="col-sm">
                        <ExpenseTotal></ExpenseTotal>
                    </div>
                </div>
                <h2>Allocation</h2>
                <ExpenseList></ExpenseList>
                <h2>Change Allocation</h2>
                <AllocationForm></AllocationForm>

            </div>
        </AppProvider>
    );
};
export default App;
