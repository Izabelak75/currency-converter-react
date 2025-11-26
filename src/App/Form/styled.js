import styled from "styled-components";

export const LabelText = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;
`;
export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.color.silver};
  padding: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
`;
export const Button = styled.button`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  width: 100%;
  margin: 0 auto;
  display: block;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.color.purple};
  padding: 12px;
  background-color: ${({ theme }) => theme.color.beige};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
export const Header = styled.h1`
  color: ${({ theme }) => theme.color.indigo};
  text-align: center;
  padding-top: 15px;
`;
export const Info = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
`;
