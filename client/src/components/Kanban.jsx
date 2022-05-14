import React, {useState} from 'react'
import './component.css'
import Colour from './Colour'

function Kanban() {
    //available colours: : blue, grey, black, white, and purple
    const [stock, setStock] = useState({out: ['Green'], low: ['White'], available: ['Blue', 'Grey', 'Black', 'Green', 'White']})


    //Displays the paint colours in the appropriate swim lane of the Kanban chart
    //uses the Colour component
    const displayStock = (category) => {

        let display = []

        if(category === 'out'){

            for(let i=0; i<stock.out.length; i++){
                display.push(<Colour key={`o${i}`} colour={stock.out[i]} />)
            }

            return display

        }else if(category === 'low'){

            for(let i=0; i<stock.low.length; i++){
                display.push(<Colour key={`l${i}`} colour={stock.low[i]} />)
            }

            return display

        }else{

            for(let i=0; i<stock.available.length; i++){
                display.push(<Colour key={`a${i}`} colour={stock.available[i]} />)
            }

            return display
        }

    }//End of displayStock function

    //returns the Kanban component
    return (
        <div className='kanban_container'>

            {/* Displays the entire kanban chart */}
            <div className='kanban_chart'>
                <section>Out of stock</section>
                <section>Running low</section>
                <section>Available</section>

                <section className='content'>{displayStock('out')}</section>
                <section className='content'>{displayStock('low')}</section>
                <section className='content'>{displayStock('available')}</section>
            </div>

            
        </div>
    );
}//End of Kanban component

export default Kanban;