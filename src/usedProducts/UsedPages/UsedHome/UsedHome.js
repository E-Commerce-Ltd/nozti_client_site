import React from 'react';
import UsedAdvertisement from './UsedAdvertisement/UsedAdvertisement';
import UsedCategory from './UsedCategory/UsedCategory';

const UsedHome = () => {
    return (
			<div className='grid md:grid-cols-10'>
				<div className='md:col-span-8'>
					<UsedCategory></UsedCategory>
            </div>
            <div className='md:col-span-2'><UsedAdvertisement></UsedAdvertisement></div>
			</div>
		);
};

export default UsedHome;