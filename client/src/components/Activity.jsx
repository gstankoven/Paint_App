import React from 'react'
import './component.css'

function Activity(props) {

    let info = props.info

    const displayActivity = () => {
        let list = [...info]
        let activities = []

        for(let i=list.length-1; i>=0; i--){
            activities.push(
            <div key={'d'+String(i)} style={{overflow: 'hidden'}}>
                <span key={'c'+String(i)} style={{width: '12%', margin: 'auto', verticalAlign: 'top', display: 'inline-block', borderTop: '1px solid black',
                    borderLeft: '1px solid black', borderBottom: '1px solid black', fontSize: '16px'}}>{list[i].colour}</span>
                    
                <span key={'s'+String(i)} style={{width: '15%', margin: 'auto', verticalAlign: 'top', display: 'inline-block', borderTop: '1px solid black', 
                    borderLeft: '1px solid black', borderBottom: '1px solid black', fontSize: '16px'}}>{list[i].status}</span>

                <span key={'t'+String(i)} style={{width: '25%', margin: 'auto', verticalAlign: 'top', display: 'inline-block', borderTop: '1px solid black', 
                    borderLeft: '1px solid black', borderBottom: '1px solid black', fontSize: '16px'}}>{list[i].time}</span>

                <span key={'co'+String(i)} style={{width: '45%', margin: 'auto', verticalAlign: 'top', display: 'inline-block', borderTop: '1px solid black', 
                    borderLeft: '1px solid black', borderBottom: '1px solid black', borderRight: '1px solid black',
                    overflow: 'hidden', fontSize: '16px'}}>{list[i].comment}</span>
            </div>
            )
        }
        return activities
    }

    return (
        <div style={{width: '80%', margin: 'auto', marginBottom: '40px'}}>
            
            <h2>Recent Activity</h2>
            <div style={{width: '100%', overflow: 'auto'}}>
            <div style={{width: 'max(100%, 900px)'}}>
                <span style={{width: '12%', margin: '0', display: 'inline-block', borderLeft: '1px solid black', borderTop: '1px solid black', 
                    fontSize: '16px', fontWeight: 'bold'}}>Colour</span>

                <span style={{width: '15%', margin: '0', display: 'inline-block', borderLeft: '1px solid black', borderTop: '1px solid black', 
                    fontSize: '16px', fontWeight: 'bold'}}>Status</span>

                <span style={{width: '25%', margin: '0', display: 'inline-block', borderLeft: '1px solid black', borderTop: '1px solid black', 
                    fontSize: '16px', fontWeight: 'bold'}}>Time</span>

                <span style={{width: '45%', margin: '0', display: 'inline-block', borderLeft: '1px solid black', borderTop: '1px solid black', 
                    borderRight: '1px solid black', fontSize: '16px', fontWeight: 'bold'}}>Comment</span>
                {displayActivity()}
            </div>
            </div>
        </div>
    );
}

export default Activity;