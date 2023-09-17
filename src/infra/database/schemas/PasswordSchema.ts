export const PasswordSchema = {
  name: 'Password',
  properties: {
    _id: 'string',
    password: 'string',
    application: 'string',
    emailOrPhone: 'string',
    created_at: 'date',
  },
  primaryKey: '_id',
};

export interface IPasswordSchema {
  _id: string;
  password: string;
  application: string;
  emailOrPhone: string;
  created_at: Date;
}
