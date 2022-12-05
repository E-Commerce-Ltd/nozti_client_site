import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
			<div className='flex justify-center'>
				<form>
                <div className='body shadow-2xl p-5 rounded-lg '>
                    <p>Signup Now</p>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								{...register('name', {
									required: 'Name Address is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>
							{errors.name && (
								<p className='text-red-600'>{errors.name?.message}</p>
							)}
						</div>
						<div className='form-control w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='Email'
								{...register('email', {
									required: 'Email Address is required',
								})}
								className='input input-bordered w-full max-w-xs'
							/>
							{errors.email && (
								<p className='text-red-600'>{errors.email?.message}</p>
							)}
						</div>

						<div className='form-control mb-3 w-full max-w-xs'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								{...register('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Password must be 6 characters or longer',
									},
								})}
								className='input input-bordered w-full max-w-xs'
							/>

							{errors.password && (
								<p className='text-red-600'>{errors.password?.message}</p>
							)}
						</div>

						<input
							className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full'
							value='Sign up'
							type='submit'
						/>

						<div>
							<div className='flex my-3'>
								<p>Already have an account ?</p> <Link to='/login' className='mx-2 text-blue-400 hover:text-blue-600'>Login</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
};

export default Signup;