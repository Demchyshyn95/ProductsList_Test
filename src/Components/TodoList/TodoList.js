import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Item from "../Item/Item";
import Filter from "../Filter/Filter";
import s from './todolist.module.css'
import Form from "../Form/Form";


const TodoList = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');
    const [newFilter, setFilter] = useState(null);

    const {register, handleSubmit} = useForm();

    const onSave = (item) => {debugger
        setNewProduct('');
        const isProduct = products.find(el => el.product === item.product);
        if (isProduct) {
            return;
        }
        const newArray = [...products, item]
        newArray.sort((a, b) => a - b);
        setProducts(newArray);
        localStorage.setItem(item.product, JSON.stringify(item));

    }

    const remove = (product) => {
        localStorage.removeItem(product);
        const newProducts = [...products].filter(el => el.product !== product);
        setProducts(newProducts);
    }
    const onchange = (e) => {
        const text = e.target.value
        setNewProduct(text);
    }

    const editStatus = (product, oldStatus) => {
        localStorage.removeItem(product);
        const otherStatus = oldStatus === 'have' ? 'ran out' : 'have';

        const newProducts = [...products].map(el => {
            if (el.product === product) {
                el.status = otherStatus;
                localStorage.setItem(product, JSON.stringify(el));
                return el;
            }
            return el;
        })
            .sort((a, b) => a.status < b.status ? 1 : -1)
        setProducts(newProducts);
    }

    const getProducts = () => {
        const values = Object.values(localStorage);
        const newArray = []
        values.forEach(el => newArray.push(JSON.parse(el)));
        setProducts(
            newArray
        )
    }
    const filter = ({filterStatus}) => {
        if (filterStatus === 'all') {
            setFilter(null)
            return;
        }
        const filterProducts = [...products].filter(el => el.status === filterStatus)
        setFilter(filterProducts);
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className={s.main}>
           <div className={s.asd}>
            <Form newProduct={newProduct} onchange={onchange} onSave={onSave}/>
               <div className={s.filter}>
                   <Filter filter={filter}/>
               </div>
           </div>

            <div className={s.content}>
                {
                    newFilter ?
                        <div>
                            {newFilter && newFilter.map((el, i) => <Item item={el} remove={remove}
                                                                         editStatus={editStatus}
                                                                         key={i}/>)}
                        </div>
                        :
                        <div>
                            {products && products.map((el, i) => <Item item={el} remove={remove} editStatus={editStatus}
                                                                       key={i}/>)}
                        </div>
                }
            </div>
        </div>
    )
}
export default TodoList;
