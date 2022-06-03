import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://pacific-falls-91567.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('Product added successfully')
                    reset();
                }
            })
    };


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center'>Add Items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                <textarea className='mb-2' placeholder='Product description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='price' type="number" {...register("price", { required: true })} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input className='btn btn-primary' value="add Item" type="submit" />
            </form>

        </div>
    );
};

export default AddItem;