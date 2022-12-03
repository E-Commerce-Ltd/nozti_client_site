import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import FeedSection from './FeedSection/FeedSection';

const Home = () => {
    return (
			<div className='grid grid-cols-10'>
				<div className='col-span-8 border-r border-gray-600'>
					<FeedSection></FeedSection>
				</div>
				<div className='col-span-2'>
					<Advertisement></Advertisement>
				</div>
			</div>
		);
};

export default Home;