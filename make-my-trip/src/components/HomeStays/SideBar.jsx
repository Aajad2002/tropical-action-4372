import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParems, setSearchParem] = useSearchParams();
  // const dispatch = useDispatch();
  // const location = useLocation();
  const initiallocationForSort = searchParems.getAll("locationForSort");
  const [locationForSort, setLocationForSort] = useState(
    initiallocationForSort || []
  );
  const initialOrder = searchParems.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const handleChange = (e) => {
    let newlocationForSort = [...locationForSort];
    const value = e.target.value;
    if (newlocationForSort.includes(value)) {
      newlocationForSort = newlocationForSort.filter((el) => el !== value);
    } else {
      newlocationForSort.push(value);
    }
    setLocationForSort(newlocationForSort);
  };
  const handleSort = (e) => {
    setOrder(e.target.value);
    //console.log(e.target.value)
  };
  useEffect(() => {
    let params = {
      locationForSort,
    };
    order && (params.order = order);
    setSearchParem(params);
  }, [locationForSort, order]);
  // const {homeStays} = useSelector((store)=>store.homeStaysReducer)

  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "25px", padding: "10px" }}>
        Select Filters
      </h1>

      <div>
        <h2 style={{ fontWeight: "bold", fontSize: "20px", padding: "10px" }}>
          Suggested For You
        </h2>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input
            type="checkbox"
            value="NorthGoa"
            onChange={handleChange}
            checked={locationForSort.includes("NorthGoa")}
          />
          <label>North Goa</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input
            type="checkbox"
            value="SouthGoa"
            onChange={handleChange}
            checked={locationForSort.includes("SouthGoa")}
          />
          <label>South Goa</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input
            type="checkbox"
            value="Villa"
            onChange={handleChange}
            checked={locationForSort.includes("Villa")}
          />
          <label>Villa (433)</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input
            type="checkbox"
            value="BeachProperty"
            onChange={handleChange}
            checked={locationForSort.includes("BeachProperty")}
          />
          <label>Beach Property (33)</label>
        </div>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "40px 0px 10px 10px",
          }}>
          Sort By Price
        </h1>
        <div onChange={handleSort}>
          <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
            <input
              type="radio"
              name="order"
              value="asc"
              defaultChecked={order === "asc"}
            />
            <label>Ascending</label>
          </div>
          <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
            <input
              type="radio"
              name="order"
              value="desc"
              defaultChecked={order === "desc"}
            />
            <label>Descending</label>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "40px 0px 10px 10px",
          }}>
          Price per night
        </h1>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 0 - ₹ 2000</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 2000 - ₹ 5000</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 5000 - ₹ 7500</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 7500 - ₹ 10000</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 7500 - ₹ 10000</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label>₹ 15000 - ₹ 30000</label>
        </div>
        <div style={{ padding: "5px 0px 5px 10px", color: "#707070" }}>
          <input type="checkbox" value="" />
          <label> ₹ 30000+</label>
        </div>
      </div>
    </div>
  );
};
