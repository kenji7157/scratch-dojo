import { FC } from 'react';
import styles from './TopWelcomeBoard.module.scss';

export const TopWelcomeBoard: FC<{}> = () => (
  <div className={styles.header}>
    Welcome to Ticketnote
    
    Ticketnoteであなたの「大切な学習」を記録しましょう
    {/* ボタン */}
    今すぐ始める
    {/* テキストリンク */}
    Ticketnoteとは？
  </div>
);
