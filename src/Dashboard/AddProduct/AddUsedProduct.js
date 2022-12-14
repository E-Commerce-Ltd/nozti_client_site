import React from 'react';
import { useForm } from 'react-hook-form';

const AddUsedProduct = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const imgHosting = process.env.REACT_APP_Imgbb_key;
    console.log(imgHosting);
    // console.log('789c623c4e2f4b2bc031b3eb311683da');
    
    const handleUsedProductSubmit = (data) => {

    }
    return (
			<div className='bg-base-200'>
				<br />
				<h1 className='mb-5 text-2xl'>Add Your Used Product</h1>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
						<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<form
								onSubmit={handleSubmit(handleUsedProductSubmit)}
								className='card-body'
							>
								<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Product Title</span>
										</label>
										<input
											type='text'
											{...register('title', {
												required: 'Title is Required',
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.title && (
											<p className='text-red-500'>{errors.title?.message}</p>
										)}
									</div>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Categories</span>
										</label>
										<select
											{...register('category', {
												required: true,
											})}
											className='select input-bordered w-full max-w-xs'
										>
											<option>Food</option>
											<option>Furniture</option>
											<option>Mobile</option>
											<option>Bike</option>
											<option>Car</option>
										</select>
										{errors.category && (
											<p className='text-red-500'>{errors.category.message}</p>
										)}
									</div>
								</div>

								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Seller Location</span>
									</label>
									<input
										type='text'
										{...register('location', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.location && (
										<p className='text-red-500'>{errors.location.message}</p>
									)}
								</div>

								<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Resale Price : $</span>
										</label>
										<input
											type='number'
											{...register('resalePrice', {
												required: true,
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.resalePrice && (
											<p className='text-red-500'>
												{errors.resalePrice.message}
											</p>
										)}
									</div>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Original Price : $</span>
										</label>
										<input
											type='number'
											{...register('originalPrice', {
												required: true,
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.originalPrice && (
											<p className='text-red-500'>
												{errors.originalPrice.message}
											</p>
										)}
									</div>
								</div>
								<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Years of use</span>
										</label>
										<input
											type='number'
											{...register('yearsOfUse', {
												required: true,
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.yearsOfUse && (
											<p className='text-red-500'>
												{errors.yearsOfUse.message}
											</p>
										)}
									</div>
									<div className='form-control w-full max-w-xs'>
										<label className='label'>
											<span className='label-text'>Year of purchase</span>
										</label>
										<input
											type='number'
											{...register('yearOfPurchase', {
												required: true,
											})}
											className='input input-bordered w-full max-w-xs'
										/>
										{errors.yearOfPurchase && (
											<p className='text-red-500'>
												{errors.yearOfPurchase.message}
											</p>
										)}
									</div>
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Description</span>
									</label>
									<input
										type='text'
										{...register('description', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.description && (
										<p className='text-red-500'>{errors.description.message}</p>
									)}
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Photo</span>
									</label>
									<input
										type='file'
										{...register('img', {
											required: 'Photo is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.img && (
										<p className='text-red-500'>{errors.img.message}</p>
									)}
								</div>
								<input
									className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
									value='Add product'
									type='submit'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
};

export default AddUsedProduct;