import React from 'react'
import './component.css'


function Update(props) {


    const changeButton = () => {
        console.log('Change colours')
    }

    return (
        <div>
            <button className='back_button' onClick={() => {props.setupdate(false)}}>Back</button>

            <span>Paint to be changed</span>
            <div className='select'>
            <select name="colours" id="colours">
                <option value="Blue">Blue</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Purple">Purple</option>
            </select>
            </div>

            <span>New paint availability</span>
            <div className='select'>
            <select name="stock" id="stock">
                <option value="Blue">Out of stock</option>
                <option value="Grey">Running low</option>
                <option value="Black">Available</option>
            </select>
            </div>

            <button onClick={() => {props.setupdate(false); changeButton()}}>Change</button>
        </div>
    );
}

export default Update;