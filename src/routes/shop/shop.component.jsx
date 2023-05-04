import { useContext } from 'react';
import { ProductsContext } from '../../context/products.content';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>{name}</div> // Return...
      ))}
    </div>
  );
};

export default Shop;
