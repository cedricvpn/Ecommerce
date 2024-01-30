import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const NewProduct = () => {
  return (
    <div className=" p-5">
      <form className="m-auto w-full max-w-lg flex flex-col p-3 bg-white border rounded">
        <label htmlFor="name">Name</label>
        <input type={"text"} name="name" className="bg-slate-300 my-2 p-1"/>
 
        <label htmlFor="Category">Category</label>
        <select className="bg-slate-300 my-2" id="category">
          <option>Computers</option>
          <option>Phones</option>
          <option>toolkit</option>
        </select>
    
        <label htmlFor="image">Image</label>
        <div id="image" className="h-40 w-full bg-slate-300 flex items-center justify-center">
         <span className="text-5xl"><BsCloudUpload /></span> 
        </div>

        <label htmlFor="Price" className="my-1">Price</label>
        <input type={"text"} className="bg-slate-300 my-2 p-1"/>

        <label htmlFor="description">Description</label>
        <textarea rows={3} className="bg-slate-300 my-2 p-1 resize-none"/>

        <button className="w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 text-white text-xl font-bold text-center py-1 rounded-full mt-4">Save</button>
      </form>
    </div>
  );
};

export default NewProduct;
