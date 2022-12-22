import { FC, ReactElement } from 'react';
import styles from './Button.module.scss';

// type ContainerProps = {...}
type Props = {
  children: string | ReactElement;
};

export const Button: FC<Props> = ({ children }) => (
  <button className={styles.header}>{children}</button>
);
