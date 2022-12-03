import React from 'react';
import BrandAdvertise from './BrandAdvertise/BrandAdvertise';
import BrandCategory from './BrandCategory/BrandCategory';

const BrandHome = () => {
    return (
			<div className='grid grid-cols-10 min-h-screen'>
				<div className='col-span-8'>
					<BrandCategory></BrandCategory>
				</div>
				<div className='col-span-2'>
					<BrandAdvertise></BrandAdvertise>
				</div>
			</div>
		);
};

export default BrandHome;