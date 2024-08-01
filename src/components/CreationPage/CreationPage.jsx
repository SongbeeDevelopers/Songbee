import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import emailjs from '@emailjs/browser'

function CreationPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams();
  emailjs.init({
    publicKey: 'kh8qhjYSE2KhcvUoT'
  })
  useEffect(() => {
    dispatch({
        type: "CONFIRM_REQUEST_PAYMENT",
        payload: id
    })
  }, [id]);
  const templateParams = {
    to_email: 'hello@songbee.com',
    to_name: 'hello@songbee.com',
    message: "A customer has submitted a new song request!"
  }
  emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams)
  history.push(`/user`);
  return (
    <h2>Loading...</h2>
  )
}

export default CreationPage;
