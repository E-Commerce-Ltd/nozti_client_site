import React from 'react';
import { Link } from 'react-router-dom';

const BrandNavbar = () => {
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
									
										<label
											htmlFor='my-drawer-2'
											className='btn btn-primary drawer-button md:hidden'
										>
											Open drawer
										</label>
									<li>
										<a>Homepage</a>
									</li>
									<li>
										<a>Portfolio</a>
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
						</div>
					</div>
				</div>
			</div>
		);
};

export default BrandNavbar;