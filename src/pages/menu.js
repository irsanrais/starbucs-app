import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  let onGetData = async () => {
    try {
      let responseProducts = await axios.get(`http://localhost:5000/products`);
      let responseCategory = await axios.get(`http://localhost:5000/category`);
      setData(responseProducts.data);
      setCategory(responseCategory.data);
    } catch (error) {}
  };

  let mapProducts = () => {
    return data.length === 0 ? (
      <div>Products not Found</div>
    ) : (
      data.map((value, index) => {
        return (
          <div className="flex items-center mt-3">
            <div>
              <Link to={`/detail/${value.id}`}>
                <img src={value.image} style={{ width: "100px", height: "100px" }} className="rounded-full" />
              </Link>
            </div>
            <div className="pl-3">
              <h1 className="text-xl font-bold">{value.name}</h1>
            </div>
          </div>
        );
      })
    );
  };

  let onFiltering = async (index) => {
    try {
      let responProducts = await axios.get(`http://localhost:5000/products?category=${index}`);
      setData(responProducts.data);
    } catch (error) {}
  };

  let mapCategory = () => {
    return category.map((value, index) => {
      return (
        <div onClick={() => onFiltering(index)} className="my-fs-18 mt-3 ml-2 cursor-pointer">
          {value}
        </div>
      );
    });
  };

  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div className="flex px-20 pt-20">
      <div className="basis-1/6">
        <div>
          <h1 className="text-xl font-bold">Category</h1>
        </div>
        {mapCategory()}
      </div>
      <div className="basis-5/6">
        <div>
          <h1 className="text-xl font-bold">Menu</h1>
        </div>
        <div className="mt-10 border-bottom pb-3">
          <h1 className="text-xl font-bold">Drink</h1>
        </div>
        {/* Lists Products */}
        <div className="grid grid-cols-2 mt-3">{mapProducts()}</div>
      </div>
    </div>
  );
}
