import React from 'react';
import Table from 'react-bootstrap/Table';

class MyTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {contacts: []};
      }

render(){
return (
<Table striped bordered hover size="sm"> 
  <thead>
    <tr>
      <th>Id</th>
      <th>Gender</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Birthdate</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.contacts.map(contact=>{
          return (
            <tr key={contact.id}>           
                <td>{contact.id}</td>
                <td>{contact.gender}</td>
                <td>{contact.lastname}</td>
                <td>{contact.firstname}</td>
                <td>{contact.birthdate}</td>       
            </tr>
          )

          })
      }
  </tbody>
</Table>

)

}

componentDidMount(){
    console.log('Call Service Rest');
    var url = 'https://employee-salary.herokuapp.com//EmployeeController/employees';
    //url = 'http://localhost:8080/EmployeeController/employees';
    fetch(url).then(res =>{
    
     res.clone().json().then(
         data=>{
            
            this.setState({ contacts: data });
            console.log(this.state);
         }
     );
    
    });
}

}

export default MyTable;