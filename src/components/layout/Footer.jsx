import React from 'react';
import { Link } from 'react-router-dom';

import '../../Detail.css';
const Footer = () => (
	<div className='footerclass'>
		<footer
			className='page-footer font-small stylish-color-dark pt-4 bg-dark text-white'
			id='footer'
		>
			<div className='container text-center text-md-left'>
				<div className='row'>
					<div className='col-md-6  '>
						<h5 className='font-weight-bold text-uppercase mt-3 mb-4 '>
							Social Schedular
						</h5>
						<p>
							A project to automatically send invite to all of
							your social media like LinkedIn, Facebook, email,
							WhatsApp, Instagram as soon as he finishes filling
							the form.
						</p>
					</div>
					<div className='col-md-6 '>
						<ul className='list-unstyled list-inline text-center py-2'>
							<li className='list-inline-item btn btn-danger btn-rounded'>
								<Link to='/register' className='color-wt'>
									Contact Us!
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr />

			<ul className='list-unstyled list-inline text-center'>
				<li className='list-inline-item'>
					<a className='btn-floating btn-fb mx-1'>
						<i className='fa fa-facebook-f fa-3x'></i>
					</a>
				</li>
				<li className='list-inline-item'>
					<a className='btn-floating btn-tw mx-1'>
						<i className='fa fa-twitter fa-3x'></i>
					</a>
				</li>
				<li className='list-inline-item'>
					<a
						className='fb-ic'
						href='https://github.com/anushbhatia/Social-Scheduler'
					>
						<i className='fa fa-github fa-3x'></i>
					</a>
				</li>
			</ul>

			<div className='footer-copyright text-center py-3'>
				© 2020 Copyright:
				<a href='#'>Social-Schedular</a>
			</div>
		</footer>
	</div>
);

export default Footer;
