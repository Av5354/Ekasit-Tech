import React, { useEffect, useState } from "react";

function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost/broadband-project/backend/api/get_plans.php")
      .then((res) => res.json())
      .then((data) => {
        setPlans(data.data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Plans</h2>

      <div className="row">
        {plans.map((plan) => (
          <div className="col-md-4" key={plan.id}>
            <div className="card p-3 mb-3">
              <h4>{plan.name}</h4>
              <p>Validity: {plan.validity_days} days</p>
              <p>Price: ₹{plan.price}</p>
              <button className="btn btn-primary">
                Recharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;