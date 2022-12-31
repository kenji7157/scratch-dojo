import { FC, ReactElement } from 'react';
import styles from './Button.module.scss';

// type ContainerProps = {...}
type Props = {
  onClick?: () => void;
  children: string | ReactElement;
};

export const Button: FC<Props> = ({ onClick, children }) => (
  <button className={styles.header} onClick={onClick}>
    {children}
  </button>
);
