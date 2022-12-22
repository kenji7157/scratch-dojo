import { FC, ReactElement } from 'react';
import styles from './HeaderGuide.module.scss';
import { Color, FontSize, FontWeight } from '@/src/types';

type Props = {
  color: Color;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  children: string | ReactElement;
};
export const HeaderGuide: FC<Props> = ({
  color,
  fontSize = '16',
  fontWeight = 'bold',
  children,
}) => (
  <div
    className={`${styles['header-guide']}  bg_${color} text_white font-weight-${fontWeight} font-size-${fontSize} py-1`}
  >
    {children}
  </div>
);
