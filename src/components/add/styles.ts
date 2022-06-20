import styled from "styled-components/native";

const borderRadius = "5px";
export const TextArea = styled.TextInput`
  max-height: 150px;
  border-radius: 5px;
  padding: 7px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin: 10px;
`;

export const Input = styled.TextInput`
  height: 50px;
  padding: 7px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin: 10px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  border-radius: 5px;
  height: 50px;
  border-radius: 5px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.COLORS.INFO};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  margin: 0 10px;
  color: ${({ theme }) => theme.COLORS.TEXT_TERCIARY};
  font-size: 18px;
  margin: 0 10px;
`;
export const Fieldset = styled.Text`
  font-size: 18px;
  margin: 0 10px;
  color: ${({ theme }) => theme.COLORS.DESTAQUE};
  font-size: 24px;
  margin: 10px;
`;
export const View = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: 100%;
`;
