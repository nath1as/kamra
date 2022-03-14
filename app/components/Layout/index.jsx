import { Outlet } from "remix";
import styled from "styled-components";
import Symbol from "./Symbol";
import background from "./background.jpg";
//import top_bar from "./top_bar.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: ${({background}) => `url(${background})`};
    background-size: 100vh;
`;
const Music = styled.div`
  position: absolute;
  font-size: 35px;
  top: 60px;
  left: 40%;
  font-family: CinzelDecorative Bold;
`
const Merch = styled.div`
  position: absolute;
  font-size: 35px;
  top: 300px;
  left: 450px;
  right: 0;
  font-family: CinzelDecorative Bold;
  transform: rotate(-60deg);
`
const About = styled.div`
  position: absolute;
  font-size: 35px;
  top: 430px;
  left: 150px;
  font-family: CinzelDecorative Bold;
  transform: rotate(60deg);
`
const Nav = styled.div`
  position: relative;
  font-size: 30px;
  top: 0;
  left: 0;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  max-width: 60vw;
  height: 100vh;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Left = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 25vw;
  position: relative;
`;
const Right = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100vh;
  width: 25vw;
`;

export const unstable_shouldReload = () => false;

const Layout = () => {


  return (
    <Wrapper background={background}>
      <Center>
        <Nav>
        <Music>music</Music>
        <Merch>merch</Merch>
        <About>about</About>
          <Symbol />
        </Nav>
        <Bottom>
          <Outlet />
        </Bottom>
      </Center>
    </Wrapper>
  );
};

export default Layout;
