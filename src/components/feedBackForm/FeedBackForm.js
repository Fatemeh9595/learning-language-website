// import Form from 'react-bootstrap/Form';
// import { useEffect, useRef, useState } from 'react';
// import { Button, Container, ListGroupItem} from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';

import { useState , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {ListGroupItem} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


// function FeedBackForm(){

//      const [names , setNames] = useState([]);
//      const [newNames , setNewNames] = useState("");
//      const [comments , setComments] = useState([]);
//      const [newComments , setNewComments] = useState("");

//      const win = window.localStorage;

//      const addNewCommentHandler =() => {
//          setNames([...names , {id : names.length + 1 , name : newNames} ]);
//          setComments([...comments , {comment : newComments} ]);
//          setNewNames("");
//          setNewComments("");
//       }

//      useEffect(()=>{
//       if(win.getItem("names")){
//          setNames(JSON.parse(win.getItem("names")));
//         }

//         if(win.getItem("comments")){
//            setComments(JSON.parse(win.getItem("comments")))
//         }
//         }, [])

//      useEffect(()=>{
//       function saveComments(){
//          win.setItem("names" , JSON.stringify(names));
//          win.setItem("comments" , JSON.stringify(comments));
//         }
//         saveComments()
//        }, [names])

//       return(
//         <>
//            <Container>
//               <h2 className='w-75 text-center m-auto m-5 p-5 text-primary'>
//                 Feel free to share your comments with us, as your feedback is valuable in helping us improve!
//               </h2>
//               <Form className='text-center'>
//                  <Form.Group>
//                     <Form.Control
//                         className='w-25 mb-2 m-auto text-center'
//                         placeholder="Name"
//                         type="text"
//                         id="nameId"
//                         value={newNames}
//                         onChange={(e) => setNewNames(e.target.value)}
//                    />
//                  </Form.Group>
//                  <Form.Group>
//                     <Form.Control
//                         className='mb-4 m-auto text-center'
//                         style={{height: "200px" , width:"500px"}}
//                         placeholder="Write your comment"
//                         as="textarea"
//                         id="commentId"
//                         value={newComments}
//                         onChange={(e) => setNewComments(e.target.value)}
//                     />
//                  </Form.Group>
//               </Form>

//               <Button
//                 type='submit'
//                 className='mb-5 d-block m-auto'
//                 disabled={!newNames || (newNames.trim() == '')}
//                 onClick={addNewCommentHandler}
//             >Submit</Button>

//               <Form key={names.id} className='text-center'>
//                 {names.map( name => {
//                   return (
//                      <ListGroup key={name.id}>
//                        <ListGroupItem className='mb-2 m-auto' style={{width:"500px"}}>
//                           {`${name.id} - ${name.name +" : "} ${comments[name.id-1].comment}`}
//                        </ListGroupItem>
//                      </ListGroup>
//                   )
//                   })}
//               </Form>

//            </Container>
//         </>
//       )
// }

function FeedBackForm() {

  const [validated, setValidated] = useState(false);
  const [names , setNames] = useState([]);
  const [newNames , setNewNames] = useState("");
  const [comments , setComments] = useState([]);
  const [newComments , setNewComments] = useState("");
  const win = window.localStorage;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      setNames([...names , {id : names.length + 1 , name : event.currentTarget.name.value} ]);
      setComments([...comments , {comment : event.currentTarget.comment.value} ]);
    }
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };
   
        useEffect(()=>{
         if(win.getItem("names")){
            setNames(JSON.parse(win.getItem("names")));
           }
   
           if(win.getItem("comments")){
              setComments(JSON.parse(win.getItem("comments")))
           }
           }, [])
   
        useEffect(()=>{
         function saveComments(){
            win.setItem("names" , JSON.stringify(names));
            win.setItem("comments" , JSON.stringify(comments));
           }
           saveComments()
          }, [names] , [validated])

  return (
   <>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='text-center'>
      <Form.Group as={Col} md="4" controlId="validationCustomName" className='m-auto'>
          <Form.Label>Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
              name="name"
              value={newNames}
              onChange={(e) => setNewNames(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please write your Name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomComment" className='m-auto'>
          <Form.Label>Comment</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              style={{height: "200px" , width:"500px"}}
              as="textarea"
              aria-describedby="inputGroupPrepend"
              required
              name="comment"
              value={newComments}
              onChange={(e) => setNewComments(e.target.value)}                         
            />
            <Form.Control.Feedback type="invalid">
              Please write your Comment.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
      
    <Form key={names.id} className='text-center'>
         {names.map( name => {
             return (
                <ListGroup key={name.id}>
                  <ListGroupItem className='mb-2 m-auto' style={{width:"500px"}}>
                     {`${name.id} - ${name.name +" : "} ${comments[name.id-1].comment}`}
                  </ListGroupItem>
                </ListGroup>
              )
             })}
     </Form>
    </>
  );
}

export default FeedBackForm;

