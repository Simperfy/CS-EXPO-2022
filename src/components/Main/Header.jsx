import React, { useState } from 'react';

export default function Header() {
	const links = [
		{name: 'Home', segment: '/', active: true},
		{name: 'Projects', segment: '/projects', active: false},
		{name: 'Partners', segment: '/partners', active: false},
		{name: 'Gallery', segment: '/gallery', active: false},
		{name: 'About Us', segment: '/about', active: false}
	];

	const [isDropdownActive, setIsDropdownActive] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownActive((prev) => !prev);
	}

	return (
		<div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
				<div className="container flex flex-wrap justify-between md:justify-start items-center mx-auto">
					<a href="/" className="flex pr-4">
						<span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">CS EXPO 2022</span>
					</a>
					<button onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
					<div className={`${!isDropdownActive && 'hidden'} w-full md:block md:w-auto`}>
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							{links.map((link, id) => (
								<li key={link.name + id}>
									<a href={link.segment} className={`${link.active && 'md:text-blue-700'} block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white`}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}