import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Brand from '../../../brandNewProducts/Brand';
import BrandHome from '../../../brandNewProducts/BrandPages/BrandHome/BrandHome';
import AddNewProduct from '../../../Dashboard/AddProduct/AddNewProduct';
import AddUsedProduct from '../../../Dashboard/AddProduct/AddUsedProduct';
import AllBuyers from '../../../Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../../Dashboard/AllSellers/AllSellers';
import BusinessGraph from '../../../Dashboard/BusinessGraph/BusinessGraph';
import DailySells from '../../../Dashboard/DailySells/DailySells';
import Dashboard from '../../../Dashboard/Dashboard';
import DashboardDefault from '../../../Dashboard/DashboardDefault';
import FeedbackStore from '../../../Dashboard/FeedbackStore/FeedbackStore';
import GarantyWarentyStore from '../../../Dashboard/GarantyWarentyStore/GarantyWarentyStore';
import MyOrders from '../../../Dashboard/MyOrders/MyOrders';
import MyProducts from '../../../Dashboard/MyProducts/MyProducts';
import MyWishList from '../../../Dashboard/MyWishList/MyWishList';
import Profile from '../../../Dashboard/Profile/Profile';
import Used from '../../../usedProducts/Used';
import UsedHome from '../../../usedProducts/UsedPages/UsedHome/UsedHome';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Main from '../Main/Main';

const Route = () => {
    const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{
						path: '/',
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/login',
						element: <Login></Login>,
					},
				],
			},
			{
				path: '/brand',
				element: <Brand></Brand>,
				children: [
					{
						path: '/brand',
						element: <BrandHome></BrandHome>,
					},
				],
			},
			{
				path: '/used',
				element: <Used></Used>,
				children: [
					{
						path: '/used',
						element: <UsedHome></UsedHome>,
					},
				],
			},
			{
				path: '/dashboard',
				element: <Dashboard></Dashboard>,
				children: [
					{
						path: '/dashboard',
						element: <DashboardDefault></DashboardDefault>,
					},
					{
						path: '/dashboard/profile',
						element: <Profile></Profile>,
					},
					{
						path: '/dashboard/admin/dailysell',
						element: <DailySells></DailySells>,
					},
					{
						path: '/dashboard/admin/businessanalytics',
						element: <BusinessGraph></BusinessGraph>,
					},
					{
						path: '/dashboard/admin/feedbackstore',
						element: <FeedbackStore></FeedbackStore>,
					},
					{
						path: '/dashboard/admin/gerantywarenty',
						element: <GarantyWarentyStore></GarantyWarentyStore>,
					},
					{
						path: '/dashboard/admin/allbuyers',
						element: <AllBuyers></AllBuyers>,
					},
					{
						path: '/dashboard/admin/allsellers',
						element: <AllSellers></AllSellers>,
					},
					{
						path: '/dashboard/buyer/mywishlist',
						element: <MyWishList></MyWishList>,
					},
					{
						path: '/dashboard/buyer/myorders',
						element: <MyOrders></MyOrders>,
					},
					{
						path: '/dashboard/seller/addnewproduct',
						element: <AddNewProduct></AddNewProduct>,
					},
					{
						path: '/dashboard/seller/addusedproduct',
						element: <AddUsedProduct></AddUsedProduct>
					},
					{
						path: '/dashboard/seller/myproducts',
						element: <MyProducts></MyProducts>,
					},
				],
			},
		]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;