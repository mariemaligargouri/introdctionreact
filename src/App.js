import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Form, Button} from "react-bootstrap"

function App() {
  return (
    <div className="container">
      <h1 style = {{ color:"blue", width:"100%",backgroundColor:"gray" , textAlign:"center"}}>welcome to our world </h1>
      <img style ={{ width:"50%", marginLeft:"300px"}} src="https://www.thehrdigest.com/wp-content/uploads/2019/12/New-employee-welcome-email-message-1.jpg" alt="img" />
      <h1 style={{ color: "blue", fontSize:"30px"}}>login</h1>
      <Form className="col-md-7">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
