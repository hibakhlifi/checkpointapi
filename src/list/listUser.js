import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button  , Modal} from 'react-bootstrap';
import './listUser.css';

const ListUser = () => {
    const [user , setUser ] = useState([])
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res);
            setUser(res.data)
        }
        )
    },[])

return<div style={{display: 'flex',flexDirection:'column', alignItems: 'center'}}>
<h1>Users List</h1><br/>
{user.map(us=>
 
  <div className="card" style={{width: '300px',margin :'5px' ,height:'300px', border:"solid white 3px", Color:'burlywood'}} ><h6 style={{ Color:'Blue' }} >Name: </h6> {us.name}<br/>
   <Button  style={{ Color:'Blue' }}  onClick={handleShow}>
       Click For Details
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Username: {us.username}</h6>
            <h6>Address: {us.address.city}</h6>
            <h6>Phone: {us.phone} </h6>
            <h6>Web: {us.website}</h6>
            <h6>Company : {us.company.name}</h6>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{ Color:'Blue' }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

    )}
     
  </div>;
};

export default ListUser;

