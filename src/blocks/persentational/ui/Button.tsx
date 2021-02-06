import React, { FunctionComponent } from 'react';

export interface ButtonProps {
    children: React.ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
    return <button>{children}</button>
};

export default Button;
