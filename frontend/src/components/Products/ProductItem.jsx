import "./ProudProducts.css";
import { itemsproud } from "../../static/allData";
import { Link } from "react-router-dom";

function ProductItem() {
  const filteredItems = itemsproud.filter((itemproud) => itemproud.id );

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="product normal">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/product/${item.id}`}
          >
            <div className="product-header">
              <img src={item.img} alt="product1" />
            </div>
            <div className="product-details">
              <p>{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
