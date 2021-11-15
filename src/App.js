
import { Link, Routes, Route } from 'react-router-dom'
import './App.css';
import ProductLista from './component/ProductLista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Eva Shop</h1>
      <nav>      <Link to='/' className="menuSection">Home</Link>
          <Link to='/product' className="menuSection">Product</Link>
          <Link to='/cart' className="menuSection">Cart</Link></nav>
      </header>
      <main>
      
      <Routes>
          <Route path="/product"  element={<ProductLista/>}></Route>
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
