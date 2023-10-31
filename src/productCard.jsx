import {useState} from "react";

 
function ProductCard({productImage,productName}){
    const [show, setShow]=useState(true);
     const handleAdd =()=>{
      setShow(!show)
     }
     const handleRemove =()=>{
      setShow(!show)
     }
    return (
      <div className="card-component">
        <img src={productImage} alt="no data"/>
        <h3>{productName}</h3>
        {show===true ?
        <button onClick={handleAdd}>Add</button>:
        <button onClick={handleRemove}>Remove</button>
        }
      </div>
    )
  }
  export default ProductCard;