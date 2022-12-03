import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div className='daisy_ui'>
				<div className='navbar bg-base-100'>
					<div className='navbar-start'>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost btn-circle'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h7'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								<li>
									<a>Homepage</a>
								</li>
								<Link to='/dashboard' className='flex md:hidden'>
									<button className='px-8 py-3 border-b-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900'>
										Dashboard
									</button>
								</Link>
								<li className='flex md:hidden'>
									<Link
										to='/used'
										className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
									>
										Used Products
									</Link>
								</li>
								<li className='flex md:hidden'>
									<Link
										to='/brand'
										className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400'
									>
										Brand New
									</Link>
								</li>
								<li>
									<a>About</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='navbar-center'>
						<Link to='/home'>
							<a className='btn btn-ghost normal-case text-xl'>nozti.com</a>
						</Link>
					</div>
					<div className='navbar-end'>
						<div className='form-control hidden md:block'>
							<div className='input-group mx-5'>
								<input
									type='text'
									placeholder='Search…'
									className='input input-bordered'
								/>
								<button className='btn btn-square'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
										/>
									</svg>
								</button>
							</div>
						</div>
						<button className='btn btn-ghost btn-circle mx-5'>
							<div className='avatar online'>
								<div className='w-12 rounded-full'>
									<img src='https://placeimg.com/192/192/people' />
								</div>
							</div>
						</button>
						<Link
							to='/login'
							className='btn border-0 bg-green-400 hover:bg-green-500'
						>
							Login
						</Link>
					</div>
				</div>
			</div>
			<div className='divider'></div>
			<div className='mambai hidden md:block'>
				<header className='p-4 dark:bg-gray-800 dark:text-gray-100'>
					<div className='container flex justify-between h-16 mx-auto'>
						<div className='flex'>
							<img src='logo.png' alt='' />
							<ul className='items-stretch hidden space-x-3 lg:flex'>
								<li className='flex'>
									<Link
										to='/used'
										className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
									>
										Used Products
									</Link>
								</li>
								<li className='flex'>
									<Link
										to='/brand'
										className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400'
									>
										Brand New
									</Link>
								</li>
							</ul>
						</div>
						<div className='items-center flex-shrink-0 hidden lg:flex'>
							<Link to='/dashboard'>
								<button className='px-8 py-3 border-b-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900'>
									Dashboard
								</button>
							</Link>
						</div>
						<button className='p-4 lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='w-6 h-6 dark:text-gray-100'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</button>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Navbar;
