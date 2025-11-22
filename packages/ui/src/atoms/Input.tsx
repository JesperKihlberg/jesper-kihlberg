import {Input as MInput, type InputProps as MInputProps, createPolymorphicComponent} from '@mantine/core';
import {forwardRef} from "react";

type InputProps = Omit<MInputProps, 'classNames'>

const Input = createPolymorphicComponent<'input', InputProps>(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <MInput
      {...props}
      ref={ref}
      classNames={{
        input: "focus:ring focus:ring-brand-500"
      }}
    />
  ))
);

export default Input;
