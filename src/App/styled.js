import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 700px;
  margin: 10px;
  padding: 20px;
  box-shadow: 4px 4px 30px ${({ theme }) => theme.color.indigo};
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`;
