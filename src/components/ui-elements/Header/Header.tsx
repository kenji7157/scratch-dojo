import { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Button, TextField } from '@/src/components/ui-elements';

type Props = {};
type PresenterProps = {
  login: () => void;
} & Props;

export const PresenterHeader: FC<PresenterProps> = ({ login }) => (
  <header className={styles.header}>
    {/* 画像 */}
    <Image src='/image/logo_green.png' alt='logo' width={200} height={40} />
    {/* テキストフィールド */}
    <TextField></TextField>
    {/* ログインボタン */}
    <Button onClick={login}>ログイン</Button>
  </header>
);

export const Header: React.FC<Props> = () => {
  const login = async () => {
    console.log('ログインボタン');
    const response = await fetch('/api/hello');
    console.log('-- response --', response);
  };
  return <PresenterHeader login={login} />;
};
