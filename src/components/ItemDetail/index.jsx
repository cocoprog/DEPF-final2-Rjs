import Item from "../Item";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({lista}) =>{
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        console.log(count);
    };

    return (
    <div>
        {
            lista.map((product)=> (
                <Item key={product.id} title={product.title} price={product.price} image={product.image} description={product.description}/>
                ))
            }        
            {/* <Counters /> */}
            <ItemCount setCount={setCount} count={count}/>
            <Link to={'/cart'} onClick={handleClick}>
                Ir al carrito
            </Link>
    </div>
    );
};

export default ItemDetail;