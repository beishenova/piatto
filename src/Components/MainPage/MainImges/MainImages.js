import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import donut from "./—Pngtree—donut cartoon_4707760.png";

const MainImages = () => {
    const [deg, setDeg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (deg === 360) setDeg(0);
            setDeg((deg) => deg + 1);
        }, 10);

        return () => clearInterval(interval);
    }, [deg]);

    return (
        <>
            <Grid>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div className="container">
                        <img
                            style={{
                                width: "600px",
                                height: "600px",
                                objectFit: "contain",
                                transform: `rotate(${deg}deg)`,
                            }}
                            src={donut}
                            alt=""
                        />
                    </div>
                    <div style={{ height: "1000px", width: "100%" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <h1
                                style={{
                                    color: "rgba(226, 135, 249, 1)",
                                    marginTop: "250px",
                                    fontSize: "80px",
                                }}
                            >
                                Доставим вам еду
                            </h1>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default MainImages;
