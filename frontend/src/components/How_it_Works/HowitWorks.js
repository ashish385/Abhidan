/** @format */

import React, { useState } from 'react';
import './HowitWorks.css';

import slider1 from './images/slider1.svg';
import slider2 from './images/slider2.svg';
import slider3 from './images/slider3.svg';
import slider4 from './images/slider4.svg';
import slider5 from './images/slider5.svg';
import slider6 from './images/slider6.svg';
import slider8 from './images/slider8.svg';

const HowitWorks = () => {
	const [donors, setDonors] = useState(true);

	const ngoHandler = () => {
		setDonors(!donors);
	};
	const donorHandler = () => {
		setDonors(true);
	};

	return (
		<div className='how-it-works'>
			<div className='subcontainer'>
				<div className='container subcontainer-title_heading'>
					<div className='subcontainer-section-headingWrapper'>
						How it Works
					</div>
				</div>

				<div className='subcontainer-buttons'>
					<h2 onClick={donorHandler}>For Donors</h2>
					<h2 onClick={ngoHandler}>For NGO's</h2>
				</div>

				{donors ? (
					<div className='subcontainer-donor'>
						<div className='row'>
							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider1}
										alt='slider1'
									/>
									<h1 className='container subcontainer-card-header'>
										CHOOSE A CAUSE
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Browse different campaigns and select a cause.
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div>
							</div>
							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider2}
										alt='slider2'
									/>
									<h1 className='container subcontainer-card-header'>
										SELECT PRODUCTS
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Select products and quantity you wish to donate.
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div>
							</div>
							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider3}
										alt='slider3'
									/>
									<h1 className='container subcontainer-card-header'>
										ORDER PROCESSING
									</h1>

									<h3 className='container subcontainer-card-header-details'>
										Checkout and pay for your contributions.
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div>
							</div>
							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								{' '}
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider4}
										alt='slider4'
									/>
									<h1 className='container subcontainer-card-header'>
										DELIVERY REPORT
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Donatekart delivers the products and the organisation
										updates about product utilization.
									</h3>
								</div>
								
							</div>
						</div>
					</div>
				) : (
					<div className='subcontainer-ngo'>
						<div className='row'>
							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider5}
										alt='slider5'
									/>
									<h1 className='container d-flex justify-content-center subcontainer-card-header'>
										FILL THE FORM
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Fill Request A Campaign form and send us your requirement
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div>
							</div>

							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider6}
										alt='slider6'
									/>
									<h1 className='container d-flex justify-content-center  subcontainer-card-header'>
										GET IN TOUCH
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Our campaign manager will reach out based on the enquiry
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div></div>

							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider6}
										alt='slider7'
									/>
									<h1 className='container  d-flex justify-content-center subcontainer-card-header'>
										CAMPAIGN IS LIVE
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Campaign goes live on Donatekart with content, images and
										product.
									</h3>
								</div>
								<div className='arr_svg'>
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
							</div>
							</div>

							<div className='col-md-3 col-sm-6 d-flex justify-content-center'>
								<div className='subcontainer-card'>
									<img
										className='subcontainer-img'
										src={slider8}
										alt='slider8'
									/>
									<h1 className='container subcontainer-card-header'>
										CAMPAIGN UPDATES
									</h1>
									<h3 className='container subcontainer-card-header-details'>
										Donors are to be updated using photos videos of the
										distribution drive of products to the needy
									</h3>
								</div>
								
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HowitWorks;
