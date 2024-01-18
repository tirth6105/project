import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, get } from "../Redux/Action";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  let [title, setTitle] = useState();
  let [img, setImg] = useState();
  let dispatch = useDispatch();
  let selector = useSelector((store) => store.product);
  console.log(selector);

  const handleproduct = async (e) => {
    e.preventDefault();

    let newproduct = {
      title: title,
      img: img,
    };

   
      dispatch(addproduct(newproduct));
   
  };

  useEffect(() => {
    dispatch(get());
  }, []);

  // console.log(selector.Products);

  return (
    <div>
      <form onSubmit={handleproduct}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input type="submit" />
      </form>
      <hr />

      {selector.Products.map((ele) => {
        return (
          <>
            <Link to={`/SinglePage/${ele.id}`}>
              <div className="col-4 row">
                <p>{ele.title}</p>
                <img style={{ width: "350px" }} src={ele.img} />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Product;
