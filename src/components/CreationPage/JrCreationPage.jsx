import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import emailjs from '@emailjs/browser'


function JrCreationPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    emailjs.init({
        publicKey: 'kh8qhjYSE2KhcvUoT'
      })
    const {id} = useParams();
    useEffect(() => {
      dispatch({
          type: "CONFIRM_JR_PAYMENT",
          payload: id
      })
  }, [id]);
  const templateParams = {
    to_email: 'hello@songbee.com',
    to_name: 'Songbee Admin',
    message: "A customer has purchased a new Learning Pack Subscription! Log into the Admin Portal to view details."
  }
  emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams)
    history.push('/user');
    return (
        <h2>Loading...</h2>
      )
}

export default JrCreationPage;
