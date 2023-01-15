import React from 'react'
const contactInfo = {
  Phone: '+216 50 657 576',
  Email: 'rahmahenchi@gmail.com',
  Address: 'Route aéroport km 6, Av. la liberté 3078 Sfax Tunisie'
}
function Contact() {
  return (
    <div>
      <div className='contact-item'>
        <i class="bi bi-telephone-fill"></i>
        <p>{contactInfo.Phone}</p>
      </div>
      <div className='contact-item'>
        <i class="bi bi-envelope"></i>
        <p>{contactInfo.Email}</p>
      </div>
      <div className='contact-item'>
        <i class="bi bi-geo-alt-fill"></i>
        <p>{contactInfo.Address}</p>
      </div>
    </div>
  )
}

export default Contact