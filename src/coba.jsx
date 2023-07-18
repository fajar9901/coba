import Carousel from 'react-bootstrap/Carousel';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './App.css';
import Card from 'react-bootstrap/Card';
import Gambar2 from './gambar2.png';
import Xiaomi from './xiaomi.jpg';
import Samsung from './samsung.png';
import Apple from './apple.jpg';


function Coba() {
  return (
    <>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>


    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
              <Card.Img variant="top" src={Apple} alt="logo"  />
              <Card.Body>
                <Card.Title> Apple </Card.Title>
                <Card.Text>
                Apple didirikan pada 1 April 1976 oleh Steve Jobs, Steve Wozniak, dan Ronald Wayne. Perusahaan ini awalnya bernama Apple Computer, Inc. Mereka meluncurkan komputer pribadi pertama mereka, Apple I, pada tahun 1976. Pada tahun 1977, Apple meluncurkan Apple II, yang menjadi sukses komersial dan membantu memperluas basis pengguna Apple..
                </Card.Text>
                <Button href="https://www.apple.com/id/" variant="primary">Go somewhere</Button>
              </Card.Body>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
              <Card.Img variant="top" src={Xiaomi} alt="logo"  />
              <Card.Body>
                <Card.Title>Xiaomi</Card.Title>
                <Card.Text>
                Xiaomi didirikan pada tahun 2010 oleh Lei Jun dan beberapa mitra di Beijing, China. Visi utama perusahaan adalah untuk menciptakan perangkat cerdas berkualitas tinggi dengan harga terjangkau untuk semua orang. Xiaomi awalnya fokus pada pengembangan perangkat lunak, dengan meluncurkan sistem operasi berbasis Android yang disebut MIUI.
                </Card.Text>
                <Button href="https://react.dev/" variant="primary">Go somewhere</Button>
              </Card.Body>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Card.Img variant="top" src={Samsung} alt="logo"  />
            <Card.Body>
              <Card.Title>Samsung</Card.Title>
              <Card.Text>
              Samsung didirikan pada tahun 1938 oleh Lee Byung-chul sebagai perusahaan perdagangan di Kota Daegu, Korea Selatan. Pada awalnya, Samsung berfokus pada ekspor barang seperti ikan kering, buah, dan sayuran. Namun, perusahaan ini kemudian berekspansi ke industri tekstil, makanan, dan peralatan rumah tangga.
              </Card.Text>
              <Button href="https://www.samsung.com/id/" variant="primary">Go somewhere</Button>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
      {/* <p>{getnewhalaman}</p>
      <button onClick={ () => changenewhalaman()}>Ubah halaman</button>  */}
    

    </>
  );
}

export default Coba;