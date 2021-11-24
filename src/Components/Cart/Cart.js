import React, { useEffect } from "react";
import { useProducts } from "../../contexts/MealsContext";
import { calcTotalPrice } from "../../utils/calc";

const Cart = () => {
    const { cart, getCart, changeMealCount } = useProducts();
    useEffect(() => {
        getCart();
    }, []);

    const handleCountChange = ({ value }, id) => {
        changeMealCount(value, id);
    };

    return (
        <div>
            {cart && cart.meals ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Area</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.meals.map((item) => (
                                <tr>
                                    <td>
                                        <img
                                            src={item.meal.image}
                                            alt=""
                                            style={{ width: "50px" }}
                                        />
                                    </td>
                                    <td>{item.meal.title}</td>
                                    <td>{item.meal.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.count}
                                            onChange={(e) =>
                                                handleCountChange(
                                                    e.target,
                                                    item.meal.id
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <h1>Cart is empty</h1>
            )}
        </div>
    );
};

export default Cart;
