
import { AiOutlineClose,  } from "../assets/Icons/index";
import menuItems from "../utils/menuItem";
import icon from "../assets/images/logo.png";
import { HashLink as Link } from "react-router-hash-link";
const MobileMenu = ({ toggleMenu, hideMenu }) => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
      <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-2">
              <span>
                <img
                  className="block w-auto h-12 transition-all duration-200 cursor-pointer md:hidden"
                  src={icon}
                  alt="Your Company"
                />
              </span>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <span className="sr-only">Close menu</span>
                <AiOutlineClose className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-4">
              {menuItems?.map((item) => (
                <Link
                  key={item.id}
                  smooth
                  to={item.to}
                  onClick={hideMenu}
                  className="inline-flex items-center text-sm font-semibold tracking-widest transition-all duration-200 hover:text-green-700"
                >
                  {item.name}
                  {item.to === "/about" }
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-2 space-y-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
