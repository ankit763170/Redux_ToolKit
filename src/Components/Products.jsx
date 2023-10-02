import React ,{useState,useContext, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../Store/CartSlice';
import { fetchProducts } from '../Store/ProductSlice';
import { STATUSES } from '../store/productSlice';

// function Products() {
//   const dispatch = useDispatch();

// const [Products,setproducts]=useState([])
// useEffect(()=>{
//     const fetchProducts =async()=>{
//        const res= await fetch('https://fakestoreapi.com/products')
//          const data= await  res.json()
//          console.log("data",data)
//            setproducts(data)
//     }
//     fetchProducts();
// },[])
const Products = () => {
  const dispatch = useDispatch();
  const { data: Products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
      dispatch(fetchProducts());
      // const fetchProducts = async () => {
      //     const res = await fetch('https://fakestoreapi.com/products');
      //     const data = await res.json();
      //     console.log(data);
      //     setProducts(data);
      // };
      // fetchProducts();
  }, []);

const handleAdd = (product) => {
dispatch(add(product));
};
if (status === STATUSES.LOADING) {
  return <h2>Loading....</h2>;
}

if (status === STATUSES.ERROR) {
  return <h2>Something went wrong!</h2>;
}
  return (
   
    <div className='productsWrapper'>
        {
            Products.map((product)=>(
                <div className='card' key={product.id}>
                    <img src={product.image}/>
                    <h3>{product.title}</h3>
                    <p>`${product.price}`</p>
                    <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>
                     </div>
            ))
            }
    </div>
            
  )
}

export default Products