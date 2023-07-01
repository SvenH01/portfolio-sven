import {ReactNode, useState} from "react";


const Navbar = (): ReactNode => {
    const [showMobileNav, setShowMobileNav] = useState(false)


    const ComputerNavBar = () => (
        <div className="w-full hidden sm:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex p-0 border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0 ">
                <li>
                    <a href="#"
                       className="block rounded bg-transparent p-0 text-blue-500"
                       aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                       className="hover:bg-transparent border-0 p-0 hover:text-blue-500">CV</a>
                </li>
                <li>
                    <a href="#"
                       className="hover:bg-transparent md:border-0 p-0 hover:text-blue-500">Learning goals</a>
                </li>
                <li>
                    <a href="#"
                       className="hover:bg-transparent border-0 p-0 hover:text-blue-500">Contact</a>
                </li>
            </ul>
        </div>
    )
    const MobileNavBar = () => {
        return (
            <div className="w-full sm:hidden block md:w-auto absolute left-0 top-[60px] bg-white" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <a href="#"
                           className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                           aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">CV</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Learning goals</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        )}

    return (
    <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">svenhoving.com</span>
            </div>
            <button
                onClick={ () => {setShowMobileNav(prevState => ( !prevState))}}
                type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"></path>
                </svg>
            </button>
            { showMobileNav ? <MobileNavBar/> : null}
            <ComputerNavBar/>
        </div>
    </nav>
)
}

export default Navbar

