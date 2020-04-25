import React from 'react'

import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
const Listitem = (props) => {
    const item = props.todo.map(item => {
        return <div className='list' key={item.key}>
            <p>
            <input type="text" value={item.text} onChange={(event) => { props.update(event.target.value, item.key) }} />
            <span><FontAwesomeIcon className="faicons" icon="trash" onClick={() => { props.remove(item.key) }}/></span>
            </p>
            
        </div>
    });

    return(
        <FlipMove  duration={300} easing="ease-in-out">
            {item}
        </FlipMove>
    )
     
}

export default Listitem;