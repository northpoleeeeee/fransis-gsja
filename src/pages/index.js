import Carousel from 'react-bootstrap/Carousel';

export default function Home() {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/gereja1.jpg" alt="gereja1" style={{ width: '100px', height: '450px'}}
        />
        <Carousel.Caption>
          <h5>1</h5>
          <p>Jemaat GSJA Mertiguna Sintang.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/gereja2.jpg" alt="gereja2" style={{ width: '100px', height: '450px'}}
        />
        <Carousel.Caption>
          <h5>2</h5>
          <p>Pendeta Beserta Keluarga.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Images/Ibadah1.jpg" alt="ibadah1" style={{ width: '100px', height: '450px'}}
        />
        <Carousel.Caption>
          <h5>3</h5>
          <p> Gedung Gereja GSJA Mertiguna Sintang</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


