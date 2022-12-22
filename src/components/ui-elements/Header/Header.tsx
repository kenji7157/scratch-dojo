import { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Button, TextField } from '@/src/components/ui-elements';

export const Header: FC<{}> = () => (
  <header className={styles.header}>
    {/* 画像 */}
    <Image src='/image/logo_green.png' alt='logo' width={200} height={40} />
    {/* テキストフィールド */}
    <TextField></TextField>
    {/* ログインボタン */}
    <Button>ログイン</Button>
  </header>
);
