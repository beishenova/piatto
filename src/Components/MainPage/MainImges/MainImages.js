import { Grid } from "@material-ui/core";
import React from "react";

const MainImages = () => {
    return (
        <>
            <Grid>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <div className="container">
                        <img
                            style={{
                                width: "500px",
                                height: "500px",
                                marginTop: "70px",
                            }}
                            src="https://media.istockphoto.com/vectors/donut-isolated-on-a-white-background-cute-colorful-and-glossy-donuts-vector-id1138438220?k=20&m=1138438220&s=612x612&w=0&h=b56x3agLh7L_mwwWQkoqCOf-zTybcP2S9PFTp75e4mg="
                            alt=""
                        />
                    </div>
                    <div>
                        <h1 style={{ color: "rgba(226, 135, 249, 1)" }}>
                            Доставим вам еду
                        </h1>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default MainImages;
