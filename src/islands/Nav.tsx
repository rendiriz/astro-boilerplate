import { Disclosure } from '@headlessui/react';
import cn from 'classnames';

import { site } from '@/lib/site';
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
                  aria-label={site.name}
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
                    <NavItem
                      href="/blog"
                      text="Blog"
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                          fill="currentColor"
                        />
                      </svg>
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
                <NavItemMobile
                  href="/blog"
                  text="Blog"
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
