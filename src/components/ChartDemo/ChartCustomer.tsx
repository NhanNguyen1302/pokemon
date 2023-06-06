import React, { useEffect, useState } from "react";

interface CustomerProps {
  number?: number;
  name?: string;
  image?: string;
  paragraph?: string;
}
const ChartCustomer: React.FC<CustomerProps> = ({
  number,
  name,
  image,
  paragraph,
}) => {
  const [newDate, setNewDate] = useState("");
  useEffect(() => {
    let today = new Date("05-06-2023"),
      month = "" + (today.getMonth() + 1),
      day = "" + today.getDate(),
      year = today.getFullYear();
    if (day.length < 2) {
      day = "0" + day;
    }
    if (month.length < 2) {
      month = "0" + month;
    }
    setNewDate([day,month,year].join('-'))
  }, []);

  return (
    <div className="shadow p-3" style={{ borderRadius: 20, lineHeight: 2 }}>
      <h5>Customer Reviews</h5>
      <p>{number} Reviews</p>
      <div className="row">
        <img className="col-3 rounded-circle" src={image} alt="avatar2" />
        <div className="col-9">
          <h6>{name}</h6>
          <p>Posted {newDate}</p>
        </div>
      </div>
      <p> {paragraph} </p>
      <div className="mb-5 text-center">
        <span className="btn btn-secondary mx-1">Service</span>
        <span className="btn btn-secondary mx-1">Recommended</span>
        <span className="btn btn-secondary">Best Price</span>
      </div>
      <div className="text-center">
        <button className="btn btn-success mx-4" style={{ width: 150 }}>
          Accept
        </button>
        <button className="btn btn-danger" style={{ width: 150 }}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default ChartCustomer;
