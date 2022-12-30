import React, { useState } from "react";
const Postwrite = () => {
  // const imgHost = "e4f307d5596e8c017fbe4d6f52a23453";
  const [post, setPost] = useState({});
  const [file, setfile] = useState(null);
  console.log(file);
  const handleChnagePost = (e) => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
    // fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imgHost}`, {
    //   method: "POST",
    //   body: formData,
    // })
      // .then((res) => res.json())
      // .then((data) => {
      //   // alert("images upload succesfull");
      //   console.log(data);
      // });
    // fetch("localhos:5000/post", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res())
    //   .then((data) => {
    //     alert("post submit successfull");
    //   });
  };
  //    handle file change
  // const handleFileChange = (e) => {
  //   setfile(e.target.files[0]);
  // };
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmite = e => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', e.target.image.files[0]);

    fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Your API key goes here'
      },
      body: data
    })
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.data.url);
      });
  }
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div className="avatar">
        <div className="w-12 h-12 items-center rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people"  alt=""/>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChnagePost}
          name="post"
          id=""
          cols="100"
          rows="100"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs bg-white"
        />
        <form onSubmit={handleSubmite}>
      <input type="file" name="image" />
      <button type="submit">Upload</button>
      {imageUrl && <img src={imageUrl} alt="uploaded image"  />}
    </form>
       
        <button className="btn-primary text-2xl p-4 mx-10">POST</button>
      </form>
    </div>
  );
};

export default Postwrite;



