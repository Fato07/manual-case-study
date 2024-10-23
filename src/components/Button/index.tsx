/**
 * Button Component
 * 
 * A reusable button component that handles click events and supports custom styling.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click event handler function
 * @param {React.ReactNode} props.children - Content to be rendered inside the button
 * @param {string} [props.className] - Optional CSS class name for additional styling
 * 
 * @example
 * // Basic usage
 * <Button onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * 
 * @example
 * // With custom className
 * <Button 
 *   onClick={() => console.log('clicked')} 
 *   className="custom-class"
 * >
 *   Custom Button
 * </Button>
 */
import React, { FC } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
