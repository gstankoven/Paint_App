import React from 'react'

function Colour(props) {
    return (
        <div style={{width: '100%', height: '20%', marginLeft: '5%'}}>
            <div style={{width: 'min(7vw, 60px)', height: 'min(4vh,40px)', display: 'inline-block', top: '0', backgroundColor: `${props.colour}`, 
                border: '1px solid black', verticalAlign: 'middle', marginRight: '10px', borderRadius: '50px'}}></div>
            <p style={{display: 'inline-block', fontFamily: 'Arial', fontSize: 'min(5vw, 30px)'}}>{props.colour}</p>
        </div>
    );
}

export default Colour