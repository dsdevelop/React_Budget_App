import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";

const Currency = () => {
	const {dispatch} = useContext(AppContext);

	const submitEvent = (event) =>{
		dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value
            });
	};

	return(
			<div className='row btn btn-success col-sm'>
				
				<select className='btn  btn-lg btn-success col-sm selectpicker' id="inputGroupSelect01" placeholder="name@example.com" onChange={submitEvent}>
					<option value="$" title="Currency( $ Dollar )" >$ Dollar</option>
					<option value="£" title="Currency( £ Pound )">£ Pound</option>
					<option value="€" title="Currency( € Euro )">€ Euro</option>
					<option value="₹" title="Currency( ₹ Ruppee )">₹ Ruppee</option>
					
				</select>
				
			</div>


		);

};

export default Currency;