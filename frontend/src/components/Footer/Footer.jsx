/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
} from 'mdb-react-ui-kit';

const Footer = () => {
	return (
		<>
			<div>
				<div>
					<footer
						className='text-center text-white'
						style={{
							backgroundColor: 'black',
							borderTopLeftRadius: '30px',
							borderTopRightRadius: '30px',
						}}>
						<div className='container'>
							<section className='mt-2'>
								<div className='row text-center d-flex justify-content-center pt-4'>
									<div className='col-md-2'>
										<h6
											className='text-uppercase font-weight-bold'
											style={{ marginTop: '8px' }}>
											<Link
												style={{ textDecoration: 'none' }}
												to={'/about'}>
												<span className='text-white'>About us</span>
											</Link>
										</h6>
									</div>

									<div className='col-md-2'>
										<h6
											className='text-uppercase font-weight-bold '
											style={{ marginTop: '8px' }}>
											<Link
												style={{ textDecoration: 'none' }}
												to={'/gallery'}>
												<span className='text-white'>Gallery</span>
											</Link>
										</h6>
									</div>

									<div className='col-md-2'>
										<h6
											className='text-uppercase font-weight-bold'
											style={{ marginTop: '8px' }}>
											<Link
												style={{ textDecoration: 'none' }}
												to={'/Blog'}>
												<span className='text-white'>Blog</span>
											</Link>
										</h6>
									</div>

									<div className='col-md-2'>
										<h6
											className='text-uppercase font-weight-bold'
											style={{ marginTop: '8px' }}>
											<Link
												style={{ textDecoration: 'none' }}
												to='#/'>
												<span className='text-white'>Help</span>
											</Link>
										</h6>
									</div>

									<div className='col-md-2'>
										<MDBDropdown
											dropright
											group>
											<MDBDropdownToggle
												style={{
													backgroundColor: 'black',
													border: 'none',
													borderColor: 'none',
													color: 'white',
												}}
												className='text-uppercase font-weight-bold  btn-outline-dark'>
												Contact
											</MDBDropdownToggle>
											<MDBDropdownMenu>
												<MDBDropdownItem link>0000000000</MDBDropdownItem>
												<MDBDropdownItem link>abhidan.com</MDBDropdownItem>
												<MDBDropdownItem link>
													abhidan@customercare
												</MDBDropdownItem>
											</MDBDropdownMenu>
										</MDBDropdown>
										{/* </h6> */}
									</div>
								</div>
							</section>

							<hr className='my-4' />

							<section className='mb-2'>
								<div className='row d-flex justify-content-center'>
									<div className='col-lg-8'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Sunt distinctio earum repellat quaerat voluptatibus
											placeat nam, commodi optio pariatur est quia magnam eum
											harum corrupti dicta, aliquam sequi voluptate quas.
										</p>
									</div>
								</div>
							</section>

							<section className='text-center mb-1'>
								<a
									href='https://www.facebook.com/'
									className='text-white me-4'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a
									href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
									className='text-white me-4'>
									<i className='fab fa-twitter'></i>
								</a>
								<a
									href='https://www.google.co.in/'
									className='text-white me-4'>
									<i className='fab fa-google'></i>
								</a>
								<a
									href=''
									className='text-white me-4'>
									<i className='fab fa-instagram'></i>
								</a>
								<a
									href='https://www.linkedin.com/feed/'
									className='text-white me-4'>
									<i className='fab fa-linkedin'></i>
								</a>

								<a
									href='https://github.com/ashish385/Abhidan'
									className='text-white me-4'>
									<i className='fab fa-github'></i>
								</a>
							</section>
						</div>

						<div
							className='text-center p-3'
							style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
							© 2020 Copyright:
							<a
								className='text-white'
								to='https://mdbootstrap.com/'>
								Abidhan.com
							</a>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Footer;
