import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
			<div className='grid grid-cols-1 md:grid-cols-6 mx-10'>
				<div className='Social-Medial-Login col-span-1'>
					<SocialLogin></SocialLogin>
				</div>
				<div className='hero min-h-screen bg-base-200 col-span-5'>
					<div className='hero-content'>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-52'>
							<div className='card-body'>
								<h1>Login Now</h1>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<input
										type='text'
										placeholder='email'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Password</span>
									</label>
									<input
										type='text'
										placeholder='password'
										className='input input-bordered'
									/>
									<label className='label'>
										<a href='#' className='label-text-alt link link-hover'>
											Forgot password?
										</a>
									</label>
								</div>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>Login</button>
								</div>
								<p>Not account Yet? </p> <Link to='/signup'>Signup Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Login;