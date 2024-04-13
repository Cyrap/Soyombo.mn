'use client'
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import UserDropdown from "./UserDropdown";
// import Search from '../Search/Search'
const Navbar = () => {
  const pathName = usePathname();
  const user = useUser();

  return (
    <div className="bg-[#FCA311] z-[999999] pr-20 pl-20">
      <div className="block p-2 container mx-auto flex flex-col md:flex-row justify-between items-center" style={{ backdropFilter: 'blur(5px)'}}>
        <Link href='/'>
          <h2 className="text-2xl text-white font-semibold mb-4 md:mb-0">Soyombo.mn</h2>
        </Link>
        <div>
        {/* <Search/> */}
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href='/products'>
              <p className={
                clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'text-[#2196F3]': pathName === '/products',
                  },
                )
              }>Мэдээ</p>
            </Link>
          </li>
          {!user?.user &&
            <>
              <li>
                <Link href='/login'>
                  <p className={
                    clsx(
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                      {
                        ' text-blue-500': pathName === '/login',
                      },
                    )
                  }>Login</p>
                </Link>
              </li>
              <li>
                <Link href='/signup'>
                  <p className={
                    clsx(
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                      {
                        ' text-blue-500': pathName === '/signup',
                      },
                    )
                  }>Signup</p>
                </Link>
              </li>
            </>
          }
          {user?.user &&
            <li>
              <UserDropdown/>
            </li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
