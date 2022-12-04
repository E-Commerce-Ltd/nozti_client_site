import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook, BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
    return (
			<div>
				<h1>Social Media Login</h1>
				<button className='btn btn-outline border-0 w-full my-4 shadow-2xl'><span className='mr-5'><FcGoogle></FcGoogle></span> Google</button>
				<button className='btn btn-outline border-0 w-full my-4 shadow-2xl'><span className='mr-5'><BsTwitter></BsTwitter></span> Twitter</button>
				<button className='btn btn-outline border-0 w-full my-4 shadow-2xl'><span className='mr-5'><BsFacebook></BsFacebook></span> Facebook</button>
				<button className='btn btn-outline border-0 w-full my-4 shadow-2xl'><span className='mr-5'><BsGithub></BsGithub></span> Github </button>
			</div>
		);
};

export default SocialLogin;