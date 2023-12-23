import "./TrendingSlider.css"
import { itemstrending } from "../../static/allData";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = itemstrending.filter((itemtrending) => itemtrending.id );
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/product/${item.id}`}
          >
            <div className="item-header">
              <img src={item.img} alt="product" />
            </div>
            <div className="item-description">
              <p>{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
