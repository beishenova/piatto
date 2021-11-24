import { Button, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";

import "./AddProduct.css";
import { useNavigate } from "react-router";
import { useProducts } from "../../contexts/ProductsContext";

const AddMeal = () => {
    const { addProduct } = useProducts();
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        area: "",
        image: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const values = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(values);
    };

    const addMeal = async () => {
        if (
            !form.title ||
            !form.price ||
            !form.category ||
            !form.area ||
            !form.image
        ) {
            alert("fill all blanks");
            return;
        }
        await addProduct(form);
        // navigate("/");
    };
    //   console.log(form);
    return (
        <>
            <h1>Add new meal</h1>
            <Grid container className="main">
                <Grid item md={5}>
                    <Paper elevation={5} className="paper">
                        <form className="inp">
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                            />
                            <textarea
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Image"
                                name="image"
                                onChange={handleChange}
                                value={form.image}
                            />
                            <input
                                type="text"
                                placeholder="Price"
                                name="price"
                                onChange={handleChange}
                                value={form.price}
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                name="category"
                                onChange={handleChange}
                                value={form.category}
                            />
                            <input
                                type="text"
                                placeholder="Area"
                                name="author"
                                onChange={handleChange}
                                value={form.area}
                            />
                        </form>
                        <Button
                            onClick={addMeal}
                            variant="contained"
                            color="secondary"
                            className="btn-add"
                        >
                            Add a new meal
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default AddMeal;
