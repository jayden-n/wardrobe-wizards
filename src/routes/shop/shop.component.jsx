import SHOP_DATA from '../../shop-data.json';

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>{name}</div>  // Return...
      ))}
    </div>
  );
};

export default Shop;
