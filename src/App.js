import './App.css';
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from './Store/actions';

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const products = useSelector((store => store.products));


  const handleAddProduct = () => {
    dispatch(addProduct(input));
    setInput('')
  }

  console.log('products', products)
  return (
    <div className="App">
      <div className='add-product'>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add</button>
        <div>
          {products.map(product => <div>{product}</div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
