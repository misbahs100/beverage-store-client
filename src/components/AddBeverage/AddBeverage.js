import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import './AddBeverage.css';
import SideNav from '../SideNav/SideNav';


const AddBeverage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        
        const beverageData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        }
        console.log(beverageData)
        fetch('http://localhost:5055/addBeverage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beverageData)
        })
        .then(res => {
            console.log('server side response', res);
            alert('Beverage Added Successfully.')
        })
        
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2dad6d7bf6cef1ec0ba10a9e39066744');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            console.log(res.data.data.display_url)
            setImageURL(res.data.data.display_url);
        })
        .catch(err => {
            console.log(err);
        })

       
    }

    return (
        <div className="d-flex addBeverage">
            <SideNav></SideNav>
            
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add Beverage here.</h1>
                <div className="form-container">
                   <div className="namePrice">
                   <div>
                   <label htmlFor="">Beverage Name</label><br/>
                    <input name="name" ref={register} placeholder="Enter Name"/>
                   </div>
                    
                    <div className="price">
                    <label htmlFor="">Add Price</label><br/>
                    <input name="price" ref={register} placeholder="Enter Price"/>
                    </div>
                   </div>
                    <br/>
                    <div className="mt-2">
                    <label htmlFor="">Add Photo</label><br/>
                    <input name="file" type="file" ref={register} onChange={handleImageUpload}/>
                    </div>
                    <br/>
                    
                </div>
                {/* <input className="" type="submit" value="Save"/> */}
                <button className="btn btn-success mt-2" type="submit">Save</button>
            </form>
        </div>
            
        
    );
};

export default AddBeverage;