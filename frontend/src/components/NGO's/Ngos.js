/** @format */

import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import './Ngos.css';
import Img1 from './Gallery/images/img1.jpg';
import Img2 from './Gallery/images/img2.jpg';
import Img4 from './Gallery/images/img4.jpg';
import Img5 from './Gallery/images/img5.jpg';
import Img6 from './Gallery/images/img6.jpg';
import Img7 from './Gallery/images/img7.jpg';
import Img3 from './Gallery/images/img3.jpg';
import Img8 from './Gallery/images/img8.jpg';

import './Gallery/Gallery.css';
import { Gallery } from './Gallery/Gallery';
// import { getPathContributingMatches } from '@remix-run/router/dist/utils';
const Ngos = () => {
	let data = [
		{
			id: 1,
			imgSrc: Img1,
		},
		{
			id: 2,
			imgSrc: Img2,
		},
		{
			id: 3,
			imgSrc: Img3,
		},
		{
			id: 4,
			imgSrc: Img4,
		},
		{
			id: 5,
			imgSrc: Img5,
		},

		{
			id: 6,
			imgSrc: Img6,
		},
		{
			id: 7,
			imgSrc: Img7,
		},
		{
			id: 8,
			imgSrc: Img8,
		},
    ];
    
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
	const getImg = (imgSrc) => {
	
	};

	return (
		<>
			<Gallery />
			<div className='gallery'>
				{data.map((item, index) => {
					return (
						<div
							className='pics'
							key={index}
							onClick={() => getImg(item.imgSrc)}>
							<img
								src={item.imgSrc}
								style={{ width: '100%' }}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Ngos;
