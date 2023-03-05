import { useEffect } from "react";
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const History = () => {
  // Extract these functions from the CartContext
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
      navigate('/login')
    }
  }, [])
  const allProd = localStorage.getItem("orderHistory") ? JSON.parse(localStorage.getItem("orderHistory")) : [];
  console.log("All items = ", allProd)
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <h3>Order History</h3>
      <br />
      <div className="container">
        <div className="row">
          {
            allProd.map((prod, idx) => {
              return (
                <div className="card p-3 m-3" style={{ width: "32rem" }}>
                  <div className="container">
                    <h4 className="text-left">Order : {idx + 1}</h4>
                    <p className="text-left">Order Date : {prod.date}</p>
                    <p className="text-left">Order Value : {prod.total}</p>
                    <p className="text-left">No of items : {prod.itemCount}</p>
                    <p className="text-left"><u>Products - </u> </p>
                    <br />
                    <div className="row">
                      {prod.items.map((item) => {
                        return (
                          <div className="card m-1" style={{ width: "8rem" }}>
                            <img src={item.image} alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">{item.name}</h5>
                              <p class="card-text">Price : {item.price}</p>
                              <p class="card-text">Quantity : {item.quantity}</p>
                            </div>
                          </div>
                        )

                      })}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>)
}
export default History