import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselContainer.css'



const CarouselContainer = ({ data }) => {
	return (
        <div className='carouselbox'>

		<Carousel style={{ minHeight: '.5vh' }}>
			{data.map((item) => {
                return (
                    <Carousel.Item key={item.id} style={{ maxHeight: '90vh' }}>
						<img
							className='d-block w-100'
							style={{
                                height: '30vh',
								width: '90%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
							src={item.webImage.url}
							alt={item.title}
                            />
						<Carousel.Caption>
							<p>{item.longTitle}</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
        </div>
	);
};

export default CarouselContainer;
