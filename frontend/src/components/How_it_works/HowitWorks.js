/** @format */

import React, { useState } from 'react';
import './HowitWorks.css';
// import Carousel from 'react-bootstrap/Carousel';
// import 'react-multi-carousel/lib/styles.css';
import slider1 from '../images/slider1.svg';
import slider2 from '../images/slider2.svg';
import slider3 from '../images/slider3.svg';
import slider4 from '../images/slider4.svg';
import slider5 from '../images/slider5.svg';
import slider6 from '../images/slider6.svg';
import slider8 from '../images/slider8.svg';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
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
			<div className='container'>
				<div className='section-title_heading'>
					<div className='section-headingWrapper'>How it Works</div>
				</div>
				{/* <div className='how-it-works'>
				<div className='conatiner'>
					<div className='section-title_heading'>
						<div className='section-headingWrapper'>
							<h2>How it Works?</h2>
						</div>
					</div>
				</div>
				<div className='how-it-works_tabsWrapper'>
					<h3 className='how-it-works_tab0'>For Donors</h3>
					<h3 className='how-it-works_tab1'>For NGO's</h3>
				</div>
				<div className='how-it-works_tabContent'>
					<div className='react-multi-carousel-list'>
						<ul
							className='react-multi-carousel-track'
							style={{transition: 'transform 400ms ease-in-out 0s' }}></ul>
					</div>
				</div>
			</div> */}
				<div className='buttons'>
					<button onClick={donorHandler}>
						<h2>For Donors</h2>
					</button>
					<button onClick={ngoHandler}>
						<h2>For NGO's</h2>
					</button>
				</div>

				{donors ? (
					<div className='donor'>
						
							<div className='card'>
								<img
									src={slider1}
									alt='slider1'
								/>
								<h1 className='card-header'>CHOOSE A CAUSE</h1>
								<h3 className='card-header-details'>
									Browse different campaigns and select a cause.
								</h3>
							</div>
							<i
								style={{ color: 'red' }}
								class='fa-sharp fa-solid fa-circle-arrow-right'></i>
							<div className='card'>
								<img
									src={slider2}
									alt='slider2'
								/>
								<h1 className='card-header'>SELECT PRODUCTS</h1>
								<h3 className='card-header-details'>
									Select products and quantity you wish to donate.
								</h3>
							</div>
							<i
								style={{ color: 'red' }}
								class='fa-sharp fa-solid fa-circle-arrow-right '></i>
							<div className='card'>
								<img
									src={slider3}
									alt='slider3'
								/>
								<h1 className='card-header'>ORDER PROCESSING</h1>

								<h3 className='card-header-details'>
									Checkout and pay for your contributions.
								</h3>
							</div>
							<i
								style={{ color: 'red' }}
								class='fa-sharp fa-solid fa-circle-arrow-right'></i>
							<div className='card'>
								<img
									src={slider4}
									alt='slider4'
								/>
								<h1 className='card-header'>DELIVERY REPORT</h1>
								<h3 className='card-header-details'>
									Donatekart delivers the products and the organisation updates
									about product utilization.
								</h3>
							</div>
						
					</div>
				) : (
					<div className='ngo'>
						<div className='card'>
							<img
								src={slider5}
								alt='slider5'
							/>
							<h1 className='card-header'>FILL THE FORM</h1>
							<h3 className='card-header-details'>
								Fill Request A Campaign form and send us your requirement
							</h3>
						</div>
						<i
							style={{ color: 'red' }}
							class='fa-sharp fa-solid fa-circle-arrow-right'></i>
						<div className='card'>
							<img
								src={slider6}
								alt='slider6'
							/>
							<h1 className='card-header'>GET IN TOUCH</h1>
							<h3 className='card-header-details'>
								Our campaign manager will reach out based on the enquiry
							</h3>
						</div>
						<i
							style={{ color: 'red' }}
							class='fa-sharp fa-solid fa-circle-arrow-right'></i>
						<div className='card'>
							<img
								src={slider6}
								alt='slider7'
							/>
							<h1 className='card-header'>CAMPAIGN IS LIVE</h1>
							<h3 className='card-header-details'>
								Campaign goes live on Donatekart with content,images and
								product.
							</h3>
						</div>
						<i
							style={{ color: 'red' }}
							class='fa-sharp fa-solid fa-circle-arrow-right'></i>
						<div className='card'>
							<img
								src={slider8}
								alt='slider8'
							/>
							<h1 className='card-header'>CAMPAIGN UPDATES</h1>
							<h3 className='card-header-details'>
								Donors are to be updated using photos/videos of the distribution
								drive of products to the needy
							</h3>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HowitWorks;
