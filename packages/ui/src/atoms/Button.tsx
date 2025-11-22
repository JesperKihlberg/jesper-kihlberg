import {Button as MButton, type ButtonProps as MButtonProps, createPolymorphicComponent} from '@mantine/core';
import {forwardRef} from "react";

type ButtonProps = Omit<MButtonProps, 'classNames'>

const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <MButton
      {...props}
      ref={ref}
    />
  ))
);

export default Button;
