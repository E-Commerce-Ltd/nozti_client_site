import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewProduct = () => {
		const {register,handleSubmit,formState: { errors },} = useForm();
    return (
			<div className='bg-base-200'>
				<br />
				<h1 className='mb-5 text-2xl'>Add Your New Product</h1>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
						<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<form className='card-body'>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='text-bold text-bold'>Product Title :</span>
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
										<span className='text-bold text-bold'>
											Product Category :
										</span>
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

								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='text-bold text-bold'>Your Brand : </span>
									</label>
									<input
										type='test'
										{...register('brand', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.brand && (
										<p className='text-red-500'>{errors.brand.message}</p>
									)}
								</div>

								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='text-bold text-bold'>Price :</span>
									</label>
									<input
										type='number'
										{...register('price', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.price && (
										<p className='text-red-500'>{errors.price.message}</p>
									)}
								</div>

								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='text-bold text-bold'>Description :</span>
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
										<span className='text-bold text-bold'>Product Image :</span>
									</label>
									<input
										type='file'
										{...register('productImg', {
											required: 'Product image is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.productImg && (
										<p className='text-red-500'>{errors.productImg.message}</p>
									)}
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='text-bold text-bold'>
											Product Certificate :
										</span>
									</label>
									<input
										type='file'
										{...register('productCertificate')}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.productCertificate && (
										<p className='text-red-500'>
											{errors.productCertificate.message}
										</p>
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

export default AddNewProduct;