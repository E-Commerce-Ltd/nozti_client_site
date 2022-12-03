import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BrandNavbar from '../brandNewProducts/BrandShare/BrandNavbar/BrandNavbar';

const Dashboard = () => {
    return (
			<div>
				<BrandNavbar></BrandNavbar>
				<div className='drawer drawer-mobile'>
					<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
					<div className='drawer-content'>
						<Outlet></Outlet>
						
					</div>
					<div className='drawer-side border'>
						<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
						<ul className='menu p-4 w-80 bg-base-100 text-base-content'>
							<Link to='/home' className='flex lg:hidden mb-10'>
								<img
									src='logo.png'
									className='mr-3 h-6 sm:h-9 rounded-lg'
									alt='PremiCar Logo'
								/>
								<span className='self-center text-xl font-semibold  '>
									Nozti.com
								</span>
							</Link>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-green-600  border-gray-300 border-l-green-600'>
								<Link to='/dashboard/profile'>My Profile</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-blue-600  border-gray-300 border-l-blue-600'>
								<Link to='/dashboard/admin/dailysell'>Daily Sells</Link>
						</li>
						
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-blue-600  border-gray-300 border-l-blue-600'>
								<Link to='/dashboard/admin/businessanalytics'>
									Revenue Graph
								</Link>
						</li>
						
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-orange-600 border-gray-300 border-l-orange-600'>
								<Link to='/dashboard/admin/feedbackstore'>Feedback Store</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-purple-600 border-gray-300 border-l-purple-600'>
								<Link to='/dashboard/admin/gerantywarenty'>
									Geranty Warenty
								</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-blue-600 border-gray-300 border-l-blue-600 '>
								<Link to='/dashboard/admin/allbuyers'>All Buyers</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-orange-600 border-gray-300 border-l-orange-600'>
								<Link to='/dashboard/admin/allsellers'>All Sellers</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-blue-600 border-gray-300 border-l-blue-600'>
								<Link to='/dashboard/buyer/mywishlist'>My Wish List</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-purple-600 border-gray-300 border-l-purple-600'>
								<Link to='/dashboard/buyer/myorders'>My Orders</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-pink-600 border-gray-300 border-l-pink-600'>
								<Link to='/dashboard/seller/addnewproduct'>Add a New Product</Link>
							</li>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-pink-600 border-gray-300 border-l-pink-600'>
								<Link to='/dashboard/seller/addusedproduct'>Add a Used Product</Link>
							</li>

							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border hover:animate-pulse hover:bg-pink-600 border-gray-300 border-l-pink-600'>
								<Link to='/dashboard/seller/myproducts'>My Products</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
};

export default Dashboard;