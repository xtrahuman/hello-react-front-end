import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction, getMessageSuccessAction } from '../redux/greeting/greet';
const HelloWorld = () => {

  const state = useSelector((state) => state.greetReducer.messages);
  const dispatch = useDispatch();


  const performAction = () => {
    dispatch(getMessagesAction());

    fetch('api/version1/greetings')
    .then((response) => response.json())
    .then((data) => dispatch(getMessageSuccessAction(data)))
    .catch((error) => console.log(error));
  }

    return (
      <div>
         <div>
           Greeting: <button onClick={() => performAction()}>Get Messages</button>
         </div>
          <p> {state.greet}</p>
      </div>
    );
}

export default HelloWorld