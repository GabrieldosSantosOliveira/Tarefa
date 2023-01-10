interface IGeneratePassword {
  hasNumbers: boolean;
  hasSymbols: boolean;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  length: number;
}
export const generatePassword = ({
  hasLowerCase,
  hasNumbers,
  hasSymbols,
  hasUpperCase,
  length,
}: IGeneratePassword) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols =
    '! " # $ % & ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~'.split(' ');
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetLowerCase = caracteres.toLowerCase().split('');
  const alphabetUpperCase = caracteres.toUpperCase().split('');
  const newArray = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowerCase ? alphabetLowerCase : []),
    ...(hasUpperCase ? alphabetUpperCase : []),
  ];

  let password = '';
  for (let i = 0; i < length; i++) {
    const min = Math.ceil(0);
    const max = Math.floor(newArray.length - 1);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    password += newArray[randomNumber];
  }
  return password;
};
