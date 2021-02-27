import React from 'react';
import './item.css'


const Item = ({item: {product, priority, status},editStatus, remove}) => {

    return (
        <div className='item'>
            <p> Product: {product}</p><p> Priority: {priority}</p>
            <div>
                <label>Ran out:</label>
                <input type="checkbox" name="status" value='ran out' onChange={()=> editStatus(product,status)} checked={status === 'ran out'}/><br/>
                <label>Have:</label>
                <input type="checkbox" name="status" value='have' onChange={()=> editStatus(product,status)} checked={status === 'have'}/>
            </div>
            <button className='btn-danger m-4' onClick={() => remove(product)}>Remove</button>
        </div>
    )
}
export default Item;
