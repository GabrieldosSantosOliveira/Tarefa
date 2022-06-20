import styled from "styled-components/native";

export const View = styled.View`
  background-color: ${({ theme }) => theme.COLORS.INFO};
  height: 80px;
  justify-content: center;
`;
export const Text = styled.Text`
  font-size: 22px;
  margin: 0 15px;
`;
