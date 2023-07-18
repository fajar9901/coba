import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Logo from '../../logo.svg';

//import Card from '@material-ui/core/Card';

function First() {
  const [open, setOpen] = useState(false);
  const [getnewhalaman, setNavbarValue, setnewhalaman2] = useState("");

    const changenewhalaman = () => {
        setNavbarValue("about")
    }

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Logo} alt="logo"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="About" variant="primary">Go somewhere</Button>
      </Card.Body>
      {/* <p>{getnewhalaman}</p>
      <button onClick={ () => changenewhalaman()}>Ubah halaman</button>  */}
    </Card>
    <Button href="Coba" variant="primary">Go </Button>
    </>
  );
}

export default First;