import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImageRoBase64 } from "../utility/ImageToBase64";
import {toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [error, setError] = useState("")
  const [data, setData] = useState({
    name: "",
    category : "",
    image : "",
    price : "",
    description : "" ,
  })
  const navigate = useNavigate()

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const {name,category, image,price ,description} = data

    if(name && category && image && price){
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/uploadProduct`, {name,category, image,price,description})
         if (response.status === 200) {
          setError('')
          toast.success('Données enregistrées avec succès');
          //navigate('/')
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
          setError(error.response.data.error)
        } else {
          toast.error('Une erreur est survenue lors de l\'enregistrement des données');
          setError('Une erreur est survenue lors de l\'enregistrement des données')
        }
      }
    }else{
      toast.warn('Please field all the field')
   } 
  
}

const uploadImage = async(e) =>{
  const data = await ImageRoBase64(e.target.files[0]);
  // console.log(data)

  setData((preve) => {
    return {
      ...preve,
      image: data,
    };
  });
}

  return (
    <div className=" p-5">
      <form className="m-auto w-full max-w-lg flex flex-col p-3 bg-white border rounded" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type={"text"} name="name" className="bg-slate-300 my-2 p-1" value={data.name} onChange={handleChange}/>
 
        <label htmlFor="Category">Category</label>
        <select className="bg-slate-300 my-2" id="category" name="category" value={data.category} onChange={handleChange} >
          <option value={"others"}>Select Category</option>
          <option value={"Computer"}>Computers</option>
          <option value={"Phones"}>Phones</option>
          <option value={"Toolkit"}>Toolkit</option>
        </select>
    
        <label htmlFor="image">Image
        <div  className="h-40 w-full bg-slate-300 flex items-center justify-center cursor-pointer">
        {
          data.image ? <img src={data.image} className="h-full w-full"/> : <span className="text-5xl" ><BsCloudUpload /></span> 
        }
         
         
         <input type={"file"} accept="image/*" name="image" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>

        <label htmlFor="Price" className="my-1">Price</label>
        <input type={"text"} className="bg-slate-300 my-2 p-1" name="price" value={data.price} onChange={handleChange}/>

        <label htmlFor="description">Description</label>
        <textarea rows={3} className="bg-slate-300 my-2 p-1 resize-none" name="description" value={data.description} onChange={handleChange}/>

        <button className="w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold text-center py-1 rounded-full mt-4">Save</button>
      </form>
    </div>
  );
};

export default NewProduct;
