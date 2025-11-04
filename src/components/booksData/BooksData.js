import { Button, ListGroup, ListGroupItem} from "react-bootstrap";
import axios from 'axios'
import { useState } from "react";



function BooksData(){
    

    const [data, setData] = useState([])
    
        let getData = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
                console.log(res.data)
                setData(res.data)
            })
        }
        let postData = () => {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
              "title": "the new book",
              "body": "here is the new book : lorem kmase  efjawd qowfinmoqwd qiwdPQF QFINKWEFC KSDNCFIAENC  wefnoeif oenfimsdv sdvjnirnv srjgnvgirmvdòsdrib drinidsbv reing"
                })
                .then((res) => {
                    console.log(res.data)
                })
        }
      
    

    return(
    <>
         <h1>books data</h1><br />
         <Button onClick={postData} className="me-4">Post Data</Button>
         <Button onClick={getData}>Get Data</Button>
         <div>
           {data.map( data => {
              return (
                <ListGroup key={data.id}>
                    <ListGroupItem className='mb-2 m-auto' style={{width:"500px"}}>
                       {JSON.stringify(data)} 
                    </ListGroupItem>
                </ListGroup>
             ) 
            })}
         </div>
    </>
    )
}




export default BooksData