import React, { ReactElement } from "react";
import Link from "next/link";
import { HomeOutlined } from '@ant-design/icons';
import styles from './appLayout.module.scss';

interface LayoutProps {
  children: ReactElement
}

export const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <HomeOutlined className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="/tech">
            Technologie
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projekty
          </Link>
        </li>
        <li>
          <Link href="/aboutMe">
            Kontakt
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};
