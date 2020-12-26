import React, { ReactElement } from "react";
import Link from "next/link";
import { HomeOutlined } from '@ant-design/icons';

interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col pt-5 w-1/4 transition-width duration-500 hover:w-3/4">
      <div className="flex flex-row">
        <Link href="/">
          <HomeOutlined className="custColorText uppercase tracking-wide  cursor-pointer px-2 mb-1 text-3xl hover:text-yellow-300" />
        </Link>
        <Link href="/tech">
          <a className="custColorText uppercase tracking-wide cursor-pointer px-2 text-3xl hover:text-yellow-300">
            Technologie
          </a>
        </Link>
        <Link href="/projects">
          <a className="custColorText uppercase tracking-wide cursor-pointer px-2 text-3xl hover:text-yellow-300">
            Projekty
          </a>
        </Link>
        <Link href="/aboutMe">
          <a className="custColorText uppercase tracking-wide cursor-pointer px-2 text-3xl hover:text-yellow-300">
            Kontakt
          </a>
        </Link>
      </div>
      <hr className="border-solid border-3 border-yellow-300 rounded-full w-full"></hr>
      <div>{children}</div>
    </div>
  );
};
