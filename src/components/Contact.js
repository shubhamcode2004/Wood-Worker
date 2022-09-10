import React from 'react'

function Contact() {
  return (
    <>
      <div className='bg-dark my-3'><br />
        <h2 className='text-center'><strong>Contact / Address</strong></h2><br />
        <form action='tel:+91 7498731202'>
          <div className="submit">
            <button type="submit"><b className="submit"><strong>Call Now</strong></b></button>
          </div>
          <h2 className='text-center'><strong>7498731202</strong></h2>
        </form>
        <form action='https://www.google.com/maps/dir//Shubham+Sliding+Window/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b9fad59b8271:0xe4c3e8a042b9979f!2m2!1d73.7805528!2d18.6044446' target='_blank'>
          <div className="submit">
            <button type="submit"><b className="submit"><strong>Get Direction</strong></b></button>
          </div>
          <h3 className='text-center'><strong>Gajanan Nagar, Mahrashtra Nagari, Near Jeevan Jyoti Hospital, Kalewadi Phata, Rahatani, Pimpri, Pune-411017</strong></h3>
        </form><br /><br />
      </div></>
  )
}

export default Contact
