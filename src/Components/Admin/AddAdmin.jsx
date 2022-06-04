import axios from 'axios';
import { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';

const AddAdmin = () => {
   
const[input,setInput]= useState({
      name:'',
      email:'',
      phone:'',
      skill:'',
      photo:'',
      lin:'',
      in:'',
      fb:'',
      tw:''

});
const[validate,setValidate]= useState({
     msg:'All fields are required',
     type:'info',
     status:false

});

 const handeAddDevs=(e)=>{
       
      e.preventDefault();
      let pat=/@gmail.com$/;
      let patnum=/^\+88./;
      if(input.name==='' || input.email==='' || input.phone==='' || input.skill==='' || input.photo==='' || input.lin==='' || input.in==='' || input.fb==='' || input.tw===''){
            setValidate({
                  msg:'All fields are requireds!',
                  type:'danger',
                  status:true  
            });
      }
     
     else if(pat.test(input.email)===false){
      setValidate({
            msg:'Email fields are ending with @gmail.com',
            type:'danger',
            status:true  
            });
      }
      else if(patnum.test(input.phone)===false){
            setValidate({
                  msg:'phone fields are starting with +880',
                  type:'danger',
                  status:true  
                  });
            
      }
      else{
            axios.post('http://localhost:5050/users',input).then(res=>{

            }).catch(err=>{
                  console.log(err);
            });
            setValidate({
                  msg:'Data STable',
                  type:'info',
                  status:true  
            });
            setInput({
                  name:'',
                  email:'',
                  username:'',
                  phone:'',
                  skill:'',
                  photo:'',
                  lin:'',
                  in:'',
                  fb:'',
                  tw:''  
            });
      }
 }
  return (
    <>
        <section className='team'>
            <Container className='my-5'>
                <Row className='justify-content-center'> 
                    <Col md={8}>
                       <Card >
                           <Card.Header> 
                                <h2>Create Devs</h2>  
                           </Card.Header>
                           <Card.Body>
                              <Form action="" onSubmit={handeAddDevs}>
                                    {
                                          validate.status && <p className={`alert alert-${validate.type}`}>{validate.msg}</p>
                                    }
                                  <div className='my-3'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={input.name} onChange={e=>setInput({...input,name:e.target.value})}></Form.Control>
                                        <p>{input.name}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" value={input.email} onChange={e=>setInput({...input,email:e.target.value})}></Form.Control>
                                        <p>{input.email}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="text" value={input.username} onChange={e=>setInput({...input,username:e.target.value})}></Form.Control>
                                        <p>{input.username}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" value={input.phone} onChange={e=>setInput({...input,phone:e.target.value})}></Form.Control>
                                        <p>{input.phone}</p>
                                        <p>{validate.msg}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Photo</Form.Label>
                                        <Form.Control type="text" value={input.photo} onChange={e=>setInput({...input,photo:e.target.value})}></Form.Control>
                                        <p>{input.photo}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Skill</Form.Label>
                                        <Form.Control type="text" value={input.skill} onChange={e=>setInput({...input,skill:e.target.value})}></Form.Control>
                                        <p>{input.skill}</p>
                                  </div>
                                  
                                  <div className='my-3'>
                                        <Form.Label>Linkdin</Form.Label>
                                        <Form.Control type="text" value={input.lin} onChange={e=>setInput({...input,lin:e.target.value})}></Form.Control>
                                        <p>{input.lin}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Facebook</Form.Label>
                                        <Form.Control type="text" value={input.fb} onChange={e=>setInput({...input,fb:e.target.value})}></Form.Control>
                                        <p>{input.fb}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Twitter</Form.Label>
                                        <Form.Control type="text" value={input.tw} onChange={e=>setInput({...input,tw:e.target.value})}></Form.Control>
                                        <p>{input.tw}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Form.Label>Instagram</Form.Label>
                                        <Form.Control type="text" value={input.in} onChange={e=>setInput({...input,in:e.target.value})}></Form.Control>
                                        <p>{input.in}</p>
                                  </div>
                                  <div className='my-3'>
                                        <Button type="submit" className="btn btn-primary w-100">Add New Devs</Button>
                                  </div>
                              </Form>
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

export default AddAdmin;