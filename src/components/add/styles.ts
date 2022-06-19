import styled from "styled-components/native";

export const TextArea = styled.TextInput`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 7px;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 100px;
  padding: 7px;
  font-size: 18px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Button = styled.Button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;
