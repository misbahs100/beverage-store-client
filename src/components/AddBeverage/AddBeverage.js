import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';


const AddBeverage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        
        const beverageData = {
            name: data.name,
            imageURL: imageURL
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
        <div>
            <h2>This is add.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register} placeholder="Bevereage Name"/>
                <br/>
                <input name="exampleRequired" type="file" ref={register} onChange={handleImageUpload}/>
                <br/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
};

export default AddBeverage;