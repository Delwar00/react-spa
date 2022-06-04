import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [adminTeam,SetAdminTeam]=useState([]);
    useEffect(()=>{
        axios('http://localhost:5050/users').then(res=>{
            SetAdminTeam(res.data);
        }).catch(err=>{
            console.log(err);
        });
    },[adminTeam]);
  return (
    <>
        <section className='team'>
            <Container className='my-5'>
                <Row className='justify-content-center'> 
                    <Col md={10}>
                       <Card >
                           <Card.Header className=''> 
                               <Container>
                                   <Row>
                                    <Col  md={6}>
                                        <h2>Create Devs</h2>
                                        </Col>
                                        <Col  md={6} >
                                            <Link className='btn btn-primary' style={{float:'right'}} to={'/AddAdmin'}>Add New Devs</Link>
                                        </Col>
                                   </Row>
                               </Container>
                               
                           </Card.Header>
                           <Card.Body>
                               <Table striped bordered hover size="sm"> 
                                   <thead>
                                       <tr>
                                           <th>#</th>
                                           <th>Name</th>
                                           <th>Email</th>
                                           <th>Phone</th>
                                           <th>Photo</th>
                                           <th>Action</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {
                                              
                                            adminTeam.map((data,index)=>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td><img className="admin-team-img" src={data.photo} alt=""/></td>
                                                <td>
                                                    <a className="btn btn-info btn-sm" href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg">
                                                        <i class='bx bx-show'></i>
                                                    </a> &nbsp;
                                                    <a className="btn btn-warning btn-sm" href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg">
                                                        <i class='bx bx-edit'></i>
                                                    </a> &nbsp;
                                                    <a className="btn btn-danger btn-sm" href="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg">
                                                        <i class='bx bx-trash'></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            )
                                       }
                                       
                                       
                                   </tbody>
                               </Table>
                           </Card.Body>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Admin;