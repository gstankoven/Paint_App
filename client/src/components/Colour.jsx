import React from 'react'

function Colour(props) {
    return (
        <div style={{width: '100%', height: '20%'}}>
            <div style={{width: '80px', height: '40px', display: 'inline-block', top: '0', backgroundColor: `${props.colour}`, 
                border: '1px solid black', verticalAlign: 'middle', marginRight: '10px'}}></div>
            <p style={{display: 'inline-block', fontFamily: 'Arial', fontSize: '30px'}}>{props.colour}</p>
        </div>
    );
}

export default Colour