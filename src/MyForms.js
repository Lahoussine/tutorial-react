import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import axios from 'axios';
class MyForms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'EVA',
      lastname: 'CONNOR',
      email: 'john.connor@gmail.com',
      emailConfirmation: 'john.connor@gmail.com',
      number: '32',
      street: 'des lilas',
      zipcode: '59220',
      city: 'Denain',
      state: 'Nord',
      country: 'France',
      password: 'myPassword',
      confirmedPassword: 'myPassword'

    };
    this.xhr = new XMLHttpRequest(); 
    console.log(axios);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserPwd = this.handleUserPwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bcrypt = require('bcryptjs');
    this.salt = this.bcrypt.genSaltSync(10);
    console.log('------- salt --------');
    console.log(this.salt);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  handleUserPwd(e) {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const hashedPwd = this.bcrypt.hashSync(value,this.salt);
    this.setState({ [name]: value });
    console.log(hashedPwd);
  }
  handleSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    console.log(JSON.stringify(this.state));
    console.log(this.xhr);
    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    axios.post('http://localhost:9000/kafka/publishReact',JSON.stringify(this.state),axiosConfig).then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
   /* this.xhr.open('POST', 'http://localhost:9000/kafka/publishReact');
    this.xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    this.xhr.send(JSON.stringify(this.state));*/
=======
   // console.log(JSON.stringify(this.state));
    let endpoint = 'http://localhost:9000/kafka/publish';
    fetch(endpoint,{
    method:'POST',
    //mode: 'no-cors' ,
    headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "Accept":"*/*",
        //"Access-Control-Allow-Origin": "*",
        //'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{console.log('SUCCESS')},(error)=>{console.log('ERROR' ,error)});
>>>>>>> 12df012647fc7965227ea0d5ae4dee1e46c4ae89
  }
  render() {
    return <Form onSubmit={this.handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" placeholder="Name" value={this.state.name} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
        <Col>
          <Form.Label>LastName</Form.Label>
          <Form.Control name="lastname" placeholder="LastName" value={this.state.lastname} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Col>
        <Col>
          <Form.Label>Confirmation of Email address</Form.Label>
          <Form.Control type="email" name="emailConfirmation" placeholder="Confirm your email address" value={this.state.emailConfirmation} onChange={(event) => this.handleUserInput(event)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>

        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Number</Form.Label>
          <Form.Text>number</Form.Text>
          <Form.Control name="number" placeholder="Number" value={this.state.number} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
        <Col>
          <Form.Label>Street</Form.Label>
          <Form.Text>Street</Form.Text>
          <Form.Control name="street" placeholder="Street" value={this.state.street} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
        <Col>
          <Form.Label>ZipCode</Form.Label>
          <Form.Text>Zipcode</Form.Text>
          <Form.Control name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>City</Form.Label>
          <Form.Text>Please inform your city</Form.Text>
          <Form.Control name="city" placeholder="City" value={this.state.city} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
        <Col>
          <Form.Label>State/Province/Region</Form.Label>
          <Form.Text>Please inform your state</Form.Text>
          <Form.Control name="state" placeholder="State" value={this.state.state} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
        <Col>
          <Form.Label>Country</Form.Label>
          <Form.Text>Please inform your country</Form.Text>
          <Form.Control name="country" placeholder="Country" value={this.state.country} onChange={(event) => this.handleUserInput(event)}></Form.Control>
        </Col>
      </Form.Row>

      <Form.Row>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.handleUserPwd(event)} />

        <Form.Label>Confirmation Password</Form.Label>
        <Form.Control name="confirmedPassword" type="password" placeholder="Confirm your Password" value={this.state.confirmedPassword} onChange={(event) => this.handleUserPwd(event)} />
      </Form.Row>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Submit
</Button>
    </Form>

  }

}

export default MyForms;