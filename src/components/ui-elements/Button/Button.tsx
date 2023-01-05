import { Color } from '@/src/types';
import { cls } from '@/src/utils/ConvertArrayToClassName';
import { FC, ReactElement } from 'react';
import styles from './Button.module.scss';

type Props = {
  children: string | ReactElement;
  onClick?: () => void;
  color: Color;
  text?: boolean;
};

export const Button: FC<Props> = ({ onClick, children, color, text }) => (
  <button
    className={cls([styles.base, styles[`bg_${color}`], { [styles.text_btn]: !!text }])}
    onClick={onClick}
  >
    {children}
  </button>
);
