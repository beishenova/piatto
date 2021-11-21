import styled from "styled-components";

export const Box = styled.div`
    padding: 10px 60px;
    background: rgba(220, 195, 253, 0.67);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-betweet;
    max-width: 1000px;
    hieght: 300px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
    margin-top: -25px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    margin-top: -20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: rgba(226, 135, 249, 1);
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;
