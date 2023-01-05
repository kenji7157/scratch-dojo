import { FC } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Button, TextField } from '@/src/components/ui-elements';
import axios from 'axios';

type Props = {};
type PresenterProps = {
  login: () => void;
} & Props;

export const PresenterHeader: FC<PresenterProps> = ({ login }) => (
  <header>
    <div className={styles.header_container}>
      {/* 画像 */}
      <Image src='/image/scratch_dojo_logo.png' alt='logo' width={200} height={40} />

      <div>
        {/* スクラッチ道場とは */}
        <Button onClick={login} color='orange' text>
          スクラッチ道場とは
        </Button>
        {/* コース一覧 */}
        <Button onClick={login} color='orange'>
          コース一覧
        </Button>
      </div>
    </div>
  </header>
);

export const Header: React.FC<Props> = () => {
  const login = async () => {
    const response = await axios.get('/api/hello');
  };
  return <PresenterHeader login={login} />;
};
