import React, { useState } from 'react';

import Icon from './components/Icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty"); 

const App = () => {

 const [isCross, setIsCross] = useState(false);
 const [isWin, setIsWin] = useState("");

 const reloadGame = () => {
   setIsCross(false);
   setIsWin("");
   itemArray.fill("empty" , 0 ,8);
 }

 const CheckWinner = () => {
  if (itemArray[0] === itemArray[1] && itemArray[0]=== itemArray[2] && itemArray[0]!== "empty") {
    setIsWin(`${itemArray[0]} wins`);
  }else if(itemArray[3] === itemArray[4] && itemArray[3]=== itemArray[5] && itemArray[3]!== "empty"){
    setIsWin(`${itemArray[3]} wins`);
  }else if(itemArray[6] === itemArray[7] && itemArray[6]=== itemArray[8] && itemArray[6]!== "empty"){
    setIsWin(`${itemArray[6]} wins`);
  }else if(itemArray[0] === itemArray[3] && itemArray[0]=== itemArray[6] && itemArray[0]!== "empty"){
    setIsWin(`${itemArray[0]} wins`);
  }else if(itemArray[1] === itemArray[4] && itemArray[1]=== itemArray[7] && itemArray[1]!== "empty"){
    setIsWin(`${itemArray[1]} wins`);
  }else if(itemArray[2] === itemArray[5] && itemArray[2]=== itemArray[8] && itemArray[2]!== "empty"){
    setIsWin(`${itemArray[2]} wins`);
  }else if(itemArray[0] === itemArray[4] && itemArray[0]=== itemArray[8] && itemArray[0]!== "empty"){
    setIsWin(`${itemArray[0]} wins`);
  }else if(itemArray[2] === itemArray[4] && itemArray[2]=== itemArray[6] && itemArray[2]!== "empty"){
    setIsWin(`${itemArray[2]} wins`);
  }
 }

 const ChangeItem = itemNumber => {
   if (isWin) {
     return toast (isWin, {type: 'success'});
   }

   if(itemArray[itemNumber] === 'empty'){
   itemArray[itemNumber] = isCross ? "cross"  : "circle";
   setIsCross(!isCross);
   }else{
     return toast("The boxes are already filled", {type: "error"});
   }
   CheckWinner();
 }

  return (
    <Container className="p-5">
    <ToastContainer position="bottom-center" />
    <Row>
    <Col md = {6} className= "offset-md-3">
    {isWin ? (
      <div className=" mb-4 mt-4 " >
      <h1 className="text-center text-success">
      {isWin}
      </h1>
      <Button 
      color = "success"
      block
      onClick = {reloadGame}
      >
      Reload
      </Button>
      </div>
    ) : (
      <h1 className ="text-center text-warning" >
      {isCross ? "cross" : "circle"} turns
      </h1>
    )}
    <div className="grid">
    {itemArray.map((item, index) =>(
     <Card onClick = { () => ChangeItem(index) }>
     <CardBody className = "box" >
     <Icon name={item} />
     </CardBody>
     </Card>
    ))}
    </div>
    </Col>
    </Row>
    </Container>
  );
}

export default App;
