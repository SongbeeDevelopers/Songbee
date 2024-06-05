const emailjs = require('@emailjs/browser');

emailjs.init({
    publicKey: process.env.EMAILJS_API_PUBLIC_KEY
  })

module.exports = emailjs