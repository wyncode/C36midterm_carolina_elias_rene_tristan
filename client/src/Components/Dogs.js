import React from 'react';
import Cards from './Cards';
import Sidebar from './Sidebar';
import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';

const Dogs = () => {
  return (
    <Container className="animal-page-container" fluid={true}>
      <div className="animal-page-banner">
        <h1>Dogs</h1>
      </div>

      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};



const Cards = ()=>{
    const [pets, setPets] = useState([]);
    let picture;

    useEffect(()=>{
         axios.get('/api/pets')
        .then(res => {
          let dogs = res.data.petsData.animals.filter(animals => animals.type === "Dog")
          setPets(dogs)
        })
    }, [])
    return(
        <Container>
            <Row>     
            {pets && pets.map((pets, index) => {
                if (pets.photos.length>0 && pets.photos[0].full){  
                return(
                    <Card bg="dark" text="white" style={{ width: 250, height: 700, margin: 1, padding: 1 }}>
                          <Card.Header  as="h3">{pets.name}</Card.Header>
                        <Card.Img style={{width: 220, height: 200, margin: 7, padding: 1}} src={pets.photos[0].full}/>
                        <Card.ImgOverlay></Card.ImgOverlay>

                        <Card.Body style = {{width: 200}}>
                            <Card.Title></Card.Title>
                            <Card.Subtitle as="h5">{pets.breeds.primary}</Card.Subtitle>
                            <br></br>
                            <Card.Text>{pets.description}</Card.Text>
                            <Card.Footer><small>Age: {pets.age} <br/> Size: {pets.size} <br/>  Sex: {pets.gender} </small></Card.Footer>
                        </Card.Body>
                    </Card>
                )}
                }) }
            </Row>
        </Container>    
    ) 
}










export default Cards;
