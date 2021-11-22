import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Address</Heading>
                        <FooterLink href="#">Табышалиева 29</FooterLink>
                    </Column>

                    <Column>
                        <Heading>Social Media</Heading>

                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        {/* 
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Сontact us</Heading>
                        <FooterLink href="#">+996704100502</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
