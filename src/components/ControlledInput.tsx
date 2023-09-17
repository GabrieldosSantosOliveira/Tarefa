import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

import { Input, InputProps } from './Input';

export function ControlledInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: UseControllerProps<TFieldValues, TName> & InputProps) {
  return (
    <Controller
      disabled={disabled}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <Input
          onBlur={() => {
            field.onBlur();
          }}
          onChangeText={(text) => {
            field.onChange(text);
          }}
          value={field.value}
          {...props}
        />
      )}
    />
  );
}
