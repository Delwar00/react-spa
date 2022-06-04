import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
        <section className='header'>
            <Container>
                <Row>
                    <Col md={3}>
                        <Link to={'/'}>
                            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-horizontal-white-20.png" alt=""/>
                        </Link>
                    </Col>
                    <Col md={9}>
                        <div className='menu'>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/admin'}>Admin</Link></li>
                                <li><Link to={'/AddAdmin'}>Create User</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Header;