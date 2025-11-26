import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 700px;
  margin: 20x;
  padding: 40px;
  box-shadow: 2x 2px 50px ${({ theme }) => theme.color.indigo};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`;
