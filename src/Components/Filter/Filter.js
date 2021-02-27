import React from 'react';
import {useForm} from "react-hook-form";


const Filter = ({ filter }) => {
    const {register, handleSubmit} = useForm();

    return(
        <form onChange={ handleSubmit(filter) }>
            <h4>Filter:</h4>
            <select
                name="filterStatus"
                id="filterStatus"
                ref={register}
                className='custom-select'

            >
                <option value="all">all</option>
                <option value="ran out">ran out</option>
                <option value="have">have</option>

            </select>
        </form>
    )
}

export default Filter;
