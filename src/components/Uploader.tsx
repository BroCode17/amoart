'use client'
import React, { useState } from "react";
import Image from "next/image";

const Uploader = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState()
//   const [selectedFile, setSelectedFile] = useState();

  const handlerOnSubmit = (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();
    if(previewSource){
        //call uploader
        
        uploader(previewSource)
    }
  };

  const uploader = async (base64ImageUrl: Blob) => {
        console.log(base64ImageUrl)
        //call to backend
        try {
            await fetch('http://localhost:5050/api/v1/layout/banner', {
                method: 'POST',
                body: JSON.stringify({data: base64ImageUrl}),
                headers: {
                    'Content-type':'application/json'
                }
            })
        } catch (error) {
            console.log(error)
        }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    previewFile(e.target.files[0])
    //setFileInputState(e.target.files[0].name)
  };

  const previewFile =( item: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(item);
    reader.onload = () => {
        setPreviewSource(reader.result as any)
    }
  }
  return (
    <div className="border border-red-500 w-full bg-white">
      <form action="POST" onSubmit={handlerOnSubmit}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className=""
        />

        <button type="submit" className="bg-green-500 text-white text-2xl">Upload</button>
      </form>
      {previewSource && 
        <Image src={previewSource || ''} width={300} height={300} alt="show" />
      }
    </div>
  );
};

export default Uploader;
