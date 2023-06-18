import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="w-full flex justify-between px-4 items-center uppercase shadow-sm">
        <Link href={'/'} className="block p-4">
            Josh Dixon Photography
        </Link>

        <ul className="flex flex-row space-x-4">
            <li>
                <Link href={'/portfolio'} className="block p-4">
                    Portfolio
                </Link>
            </li>
            <li>
                <Link href={'/about'} className="block p-4">
                    About
                </Link>
            </li>
            <li>
                <Link href={'/blog'} className="block p-4">
                    Blog
                </Link>
            </li>
        </ul>
    </nav>
  )
}
