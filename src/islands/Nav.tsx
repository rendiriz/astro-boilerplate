import { Disclosure } from '@headlessui/react';
import { CgClose, CgMenu } from 'react-icons/cg';
import cn from 'classnames';

import ThemeSwitcher from '@/islands/ThemeSwitcher';

interface INavItem {
  icon?: JSX.Element;
  pathname: string;
  href: string;
  text: string;
  className?: string;
}

function NavItem(props: INavItem) {
  const isActive = props.pathname === props.href;

  return (
    <a
      href={props.href}
      className={cn(
        isActive
          ? 'text-blue-700 dark:text-blue-400'
          : 'text-gray-800 dark:text-gray-50',
        'flex space-x-2 font-medium py-4 px-4',
        props.className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {props.icon}
      <span>{props.text}</span>
    </a>
  );
}

const NavItemMobile = (props: INavItem) => {
  const isActive = props.pathname === props.href;

  return (
    <Disclosure.Button
      as="a"
      href={props.href}
      className={cn(
        isActive
          ? 'bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-400'
          : 'text-gray-800 dark:text-gray-50',
        'flex space-x-2 font-medium py-4 px-4',
        props.className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {props.icon}
      <span>{props.text}</span>
    </Disclosure.Button>
  );
};

export default function Nav(props: any) {
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative flex flex-wrap items-center justify-between py-2">
              <div className="flex items-center">
                <a
                  href="/"
                  className="text-xl text-gray-800 no-underline whitespace-nowrap py-2"
                >
                  <svg
                    id="logo-35"
                    width="50"
                    height="39"
                    viewBox="0 0 50 39"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                      className="fill-blue-700 dark:fill-gray-50"
                    />
                    <path
                      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                      className="fill-blue-900 dark:fill-gray-50"
                    />
                  </svg>
                </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-1">
                    <NavItem href="/" text="Home" pathname={props.pathname} />
                    <NavItem
                      href="/about"
                      text="About"
                      pathname={props.pathname}
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-1 sm:space-x-2 md:space-x-4 items-center">
                <div className="sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-gray-50 hover:bg-gray-50 hover:dark:bg-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <CgClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <CgMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute w-full bg-white dark:bg-gray-900 sm:hidden mt-[1px] border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col">
              <div className="space-y-1 py-6">
                <NavItemMobile href="/" text="Home" pathname={props.pathname} />
                <NavItemMobile
                  href="/about"
                  text="About"
                  pathname={props.pathname}
                />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
