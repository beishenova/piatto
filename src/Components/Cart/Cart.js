import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/MealsContext';
import { calcTotalPrice } from '../../utils/calc';

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
                                <th>Count</th>
                                <th>Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.meals.map((item) => (
                                <tr>
                                    <td>
                                        <img src={item.meal.image} alt="" style={{ width: '50px' }} />
                                    </td>
                                    <td>{item.meal.title}</td>
                                    <td>{item.meal.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.count}
                                            onChange={(e) => handleCountChange(e.target, item.meal.id)}
                                        />
                                    </td>
                                    <td>{item.subPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4>Total: {calcTotalPrice(cart.meals)}</h4>
                    <button>Оплатить</button>
                </>
            ) : (
                <h1>Cart is empty</h1>
            )}
        </div>
    );
};

export default Cart;
