import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { isNestedNavItemsWithChildren, isNestedNavItemsWithoutChildren, navbarItems, nestedNavBarItems1 } from "../constants/navbar";
import Link from "next/link";
import CartIcon from '../../public/images/garden-cart.svg'

const NavBar: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <section className="flex justify-end min-w-full w-full bg-brand-gray h-10 items-center md:px-40 px-10">
          {navbarItems.map((item, idx) => (
            <Link legacyBehavior  href={item.route} key={`${item.route}-${idx}`}>
              <a className="text-brand-green hover:text-brand-green link-underline mx-2">{item.label}</a>
            </Link>
          ))}
        </section>
        <div className='mx-20 flex min-w-full w-full items-center justify-items-center py-4 text-lg cursor-pointer'>
          <Image src={'/images/brand_logo.png'} alt='' width={240} height={240} />
          <section className='mx-10 gap-10 flex flex-row'>
            {nestedNavBarItems1 && nestedNavBarItems1.map((item, idx) => {
              if(isNestedNavItemsWithoutChildren(item)) {
                return (
                  <Link legacyBehavior href={item.parent.route} key={`${item.parent.route}-${idx}`}>
                    <a className="text-black hover:text-brand-green link-underline mx-2">{item.parent.label}</a>
                  </Link>
                )
              }
              if(isNestedNavItemsWithChildren(item)) {
                return (
                  <li key={`${item.parentLabel}-${idx}`} className="group relative dropdown list-none">
                    <a className="text-black hover:text-brand-green h-2 link-underline mx-2">{item.parentLabel}</a>
                    <div className="group-hover:block dropdown-menu absolute hidden h-auto w-72">
                      <ul className="top-0 w-90 bg-white shadow ">
                        {item.parent.map((childrenItem, idx) => {
                          return (
                            <li className="bg-brand-green hover:bg-white h-10 flex items-center" key={`${childrenItem.route}-${idx}`}>
                              <Link legacyBehavior href={childrenItem.route} >
                                <a className="text-black hover:text-brand-green mx-2">{childrenItem.label}</a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                )
              }
            })}
            <Link href={'/cart'}>
              <Image src={CartIcon} height={20} width={20} alt='' />
            </Link>
          </section>
        </div>
      </header>
      {children}
    </>
  )
}

export default NavBar