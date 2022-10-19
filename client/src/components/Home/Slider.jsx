import '../../styles/Home/Slider.css'
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src="images/becoming-doctor.jpg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption className='c-caption'>
          <h3>Welcome to UENR Hospital</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
            <button className='read'>Read More</button>
            <button className='book'>Book Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src="images/doctors.jpg?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption className='c-caption'>
        <h3>Welcome to UENR Hospital</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
            <button className='read'>Read More</button>
            <button className='book'>Book Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src="images/istockphoto-1366374033-170667a.jpg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption className='c-caption'>
        <h3>Welcome to UENR Hospital</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
            <button className='read'>Read More</button>
            <button className='book'>Book Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;