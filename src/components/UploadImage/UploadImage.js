import { useState } from "react";

export default function UploadImage() {
  const [file, setFile] = useState();
  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange}/>
      {file && <img src={file} alt="to upload"/>}
    </div>
  )
}