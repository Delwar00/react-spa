
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {

  //load all devs
  const[deves,setDevs]=useState([]);
  useEffect(()=>{
      axios('http://localhost:5050/users').then(res=>{
        setDevs(res.data);
      }).catch(err=>{
          console.log(err)
      });
  },[deves]);

  return (
    <>
        <section className='team'>
            <Container className='my-5'>
                <Row>
                    {
                        deves.map(data=>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <Card.Img className="team-img" src={data.photo} />
                                        <h3>{data.name}</h3>
                                        <p>{data.skill}</p>
                                        <Link className="btn btn-primary" to={ '/profile/'+data.username }>View Profile</Link>
                                    </Card.Body>
                                </Card>
                            </Col> 
                        )
                    }
                    
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Team;