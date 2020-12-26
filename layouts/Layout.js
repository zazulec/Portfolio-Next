import React from "react";
import Link from 'next/link'

export const Layout = ({children}) => {
    return(
        <div className="flex flex-col pt-5 w-1/4 transition-width duration-500 hover:w-3/4">
            <div className="flex flex-row">
                <Link href="/"><a className="custBlue cursor-pointer px-2 text-3xl">Główna</a></Link>
                <Link href="/tech"><a className="custBlue cursor-pointer px-2 text-3xl">Technologie</a></Link>
                <Link href="/projects"><a className="custBlue cursor-pointer px-2 text-3xl">Projekty</a></Link>
            </div>
            <hr className="border-solid border-4 border-yellow-300 rounded-full w-full"></hr>
            <div>{children}</div>
        </div>
    )
}
