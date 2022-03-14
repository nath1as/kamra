import styled from "styled-components";
import logo from "./logo.jpg";

const Img = styled.img`
width: 90%;
`


const Symbol = () => {

  return (
      <Img src={logo} />
  );
};

export default Symbol;
