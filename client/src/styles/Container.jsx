import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
