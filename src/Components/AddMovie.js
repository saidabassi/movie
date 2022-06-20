import { React, useState } from "react";
import { Button, Form, FormLabel, Modal } from "react-bootstrap/";
// variables declaration step 1: passing props add
export const AddMovie = ({ add }) => {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//Initialisation
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Rate, setRate]= useState("")
    const [PosterUrl, setPosterUrl]= useState("")
// Update
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleRate = (e) => {
        setRate(e.target.value)
    }
    const handlePosterUrl = (e) => {
        setPosterUrl(e.target.value)
    }
    // saving data
    const handleAdd = (e) => {
        let newMovie = { Title, Description, Rate, PosterUrl }
        add(newMovie)
    }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a new movie{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel>Movie Title</FormLabel>
          <Form.Control type="text" onChange={(e)=>handleTitle(e)} value={Title} />
          <FormLabel>Description</FormLabel>
          <Form.Control type="text" onChange={(e)=>handleDescription(e)}value={Description}/>
          <FormLabel>Rate</FormLabel> 
          <Form.Control type="number" onChange={(e)=>handleRate(e)}value={Rate}/>
          <FormLabel>PosterUrl</FormLabel>
          <Form.Control type="url" onChange={(e)=>handlePosterUrl(e)}value={PosterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
