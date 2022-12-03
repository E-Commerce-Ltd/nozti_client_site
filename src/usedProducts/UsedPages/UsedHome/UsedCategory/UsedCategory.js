import React from 'react';
import UsedCarusel from '../UsedCarusel/UsedCarusel';
import UsedProductCategory from './UsedProductCategory/UsedProductCategory';

const UsedCategory = () => {
    return (
        <div className='border-r m-5'>
            <UsedCarusel></UsedCarusel>
          <UsedProductCategory></UsedProductCategory>
            
			</div>
		);
};

export default UsedCategory;