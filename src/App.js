import './App.css';
import ProductContainer from './components/ProductContainer';
import Product from './components/Product';
import data from "./product.json"

function App() {
  console.log (data)
  return (
    <div className="App">
      <ProductContainer>{/*contenedor de productos*/}
        {data.map( product => 
          <Product 
            key={product.id}
            name={product.name}
            oldPrice={product.price}
            discount={product.discount}
            newPrice={product.price - product.price*product.discount / 100}
          />
        )}
      </ProductContainer>
    </div>
  );
}

export default App;
