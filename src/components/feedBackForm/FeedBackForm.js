import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Button, Container, ListGroupItem} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


function FeedBackForm(){

  
     const [names , setNames] = useState([]);
     const [newNames , setNewNames] = useState("");
     const [comments , setComments] = useState([]);
     const [newComments , setNewComments] = useState("");
     const [isButtonEnabled, setButtonEnabled] = useState(false);
    
     const win = window.localStorage;
     const textName = useRef()


     const addNewCommentHandler =() => {
         setNames([...names , {id : names.length + 1 , name : newNames} ]);
         setComments([...comments , {comment : newComments} ]);
         setNewNames("");
         setNewComments("");
      }

      useEffect(() => {
         // for(let i=0 ; i<names.length ; i++){
         //    if(names[i].name){
         //       setButtonEnabled(false)
               // console.log("name exist")
         //     }else{
         //       setButtonEnabled(true)
         //       console.log("name is not exist")
         //   }
         // }

             if(textName.current.value){
               setButtonEnabled(true)
             }  else{
               setButtonEnabled(false)
             }

      } , [names])

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
       }, [names])

       
      return(
        <>
           <Container>
              <h2 className='w-75 text-center m-auto m-5 p-5 text-primary'>
                Feel free to share your comments with us, as your feedback is valuable in helping us improve!
              </h2>
              <Form className='text-center'>
                 <Form.Group>
                    <Form.Control 
                        ref={textName}
                        className='w-25 mb-2 m-auto text-center'
                        placeholder="Name" 
                        type="text"
                        id="nameId"
                        value={newNames}
                        onChange={(e) => setNewNames(e.target.value)}
                    />
                 </Form.Group>
                 <Form.Group>
                    <Form.Control 
                        className='mb-4 m-auto text-center'
                        style={{height: "200px" , width:"500px"}}
                        placeholder="Write your comment" 
                        as="textarea"
                        id="commentId"
                        value={newComments}
                        onChange={(e) => setNewComments(e.target.value)}
                    />
                 </Form.Group>
              </Form>

              <Button 
                type='button'
                className='mb-5 d-block m-auto'
                disabled={false}
                onClick={addNewCommentHandler}
            >Submit</Button>

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

           </Container>
        </>
      )
}



export default FeedBackForm