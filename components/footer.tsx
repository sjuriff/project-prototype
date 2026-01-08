import { Contact } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-[5] bg-primary-text bg-tertiary font-roboto text-onSurface">
      <div className="mx-auto w-full max-w-screen-xl gap-20 p-4 md:flex md:flex-col md:items-center md:justify-between">
        <div className="flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-2">
            <h2 className="ml-2 text-primary font-heading text-center text-lg  lg:text-start">
              Some info
            </h2>
            <ul className="font-italic text-center font-medium text-white lg:text-start">
              <li className="">
                <p className="text-center hover:underline md:me-6">
                  About us
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-primary font-heading text-lg lg:text-start">
              Social
            </h2>
            <ul className="flex items-center justify-center font-medium text-gray-500 lg:items-start lg:justify-start">
              <li>
                <a
                  href="https://www.linkedin.com/company/anteambulo-no/posts/?feedView=all&viewAsMember=true"
                  className="md:me-6"
                >
                  <Contact className="h-6 w-6 text-white" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-center text-primary font-heading text-lg  lg:text-start">
              Contact
            </h2>
            <ul className="text-center font-medium text-white lg:text-start">
              <li className="flex items-center">
                <a href="#" className="text-center hover:underline md:me-6">
                  mail@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-center text-primary font-heading text-lg  lg:text-start">
              Address
            </h2>
            <ul className="font-medium text-white dark:text-gray-400">
              <li>
                <p className="text-center md:me-6 md:text-start">
                 Some address <br />
                  0000 Oslo, Norway
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex font-body items-center justify-center">
          <span className="text-center text-sm text-white dark:text-gray-400">
            © 2025{' '}
            <a href="#" className="hover:underline">
              beam™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}