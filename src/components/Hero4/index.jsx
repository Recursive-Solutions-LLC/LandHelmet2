import Carousel from 'react-bootstrap/Carousel';

function Hero4({images}) {
  console.log()
  const  renderIMges = images.map(img =>(  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
 
  </Carousel.Item>));
  return (
    <Carousel data-bs-theme="dark">
    {renderIMges}
    </Carousel>
  );
}

export default Hero4;