import axios from 'axios';
import { useState,useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    //load  devs
    const {username} =useParams();
  const[profile,setProfile]=useState({
    name:"",
    email:"",
    username:"",
    phone:"",
    photo:"",
    skill:"",
    fb:"",
    in:"",
    lin:"",
    tw:""
  });
  useEffect(()=>{
      axios(`http://localhost:5050/users?username=${username}`).then(res=>{
        setProfile({
            name : res.data[0].name,
            email : res.data[0].email,
            username : res.data[0].username,
            phone : res.data[0].phone,
            photo : res.data[0].photo,
            skill : res.data[0].skill,
            fb : res.data[0].fb,
            in : res.data[0].in,
            lin : res.data[0].lin,
            tw : res.data[0].tw,
        })
      }).catch(err=>{
          console.log(err)
      });
  });
    
  return (
    <>
        <section className='single-team'>
            <Container className='my-5'>
                <Row className='justify-content-center'>
                    <Col md={5}>
                       <Card className='shadow'>
                           <Card.Body>
                               <div className='profile'>
                                   <img src={profile.photo} alt=""/>
                                    <h2>{profile.name}</h2>
                                    <p>{profile.skill}</p>
                                    <div className='social-icons'>
                                        <ul>
                                            <li>
                                                <a href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg#">
                                                     <i class='bx bxl-facebook'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg#">
                                                    <i class='bx bxl-twitter'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg#">
                                                    <i class='bx bxl-linkedin'></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg#">
                                                    <i class='bx bxl-instagram'></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                               </div>
                           </Card.Body>
                           <Card.Footer>
                               <Link to={'/'}>All Devs</Link>
                           </Card.Footer>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Profile;