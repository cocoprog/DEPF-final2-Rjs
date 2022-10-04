const ItemCount = ({setCount, count}) => {

const stock = 5

// test profe

// const onAdd = () => {
//     setCount(count + 1);
// };
// const onRemove = () => {
//     if (count === 0){
//         return;
//     }

//     setCount(count - 1);
// };

const onAdd = () => {
    count < stock ? setCount(count + 1) : alert (`se alcanzo el maximo de stock disponible`);
};
const onRemove = () => {
    count > 0 ? setCount (count -1) : alert (`no se pueden introducir valores negativos`)
};



    return(
        <div>
            <button onClick={onAdd}>
                +
            </button>
            <span>{count}</span>
            <button onClick={onRemove}>
                -
            </button>
        </div>
    )
}

export default ItemCount;

