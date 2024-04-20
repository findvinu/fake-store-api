import {Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import Home from './components/Home';

export const Routing = () => {
    return (
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    );
}