import React from 'react';
import s from "../TodoList/todolist.module.css";
import {useForm} from "react-hook-form";

const Form = ({ newProduct, onSave, onchange}) => {
    const {register, handleSubmit} = useForm();

    return(
        <div className={s.form}>
            <form>
                <input className="form-control" id='input'
                       value={newProduct}
                       name='product'
                       onChange={onchange}
                       placeholder='Enter new product'
                       ref={ register({ required: true }) }
                       />

                <label>Priority:</label>
                <select
                    name="priority"
                    id="priority"
                    ref={register}
                    className='custom-select'
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Status:</label>
                <select
                    name="status"
                    id="status"
                    ref={register}
                    className='custom-select'
                >
                    <option value="ran out">ran out</option>
                    <option value="have">have</option>

                </select>

                <button className='btn btn-success w-50 float-right' onClick={handleSubmit(onSave)}>Save</button>
            </form>
        </div>

    )
}
export default Form;
