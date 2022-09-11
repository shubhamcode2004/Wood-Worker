import React from 'react'

function FeedBack() {
  return (
    <>
      <div className='bg-dark my-3'><br />
        <h2 className='text-center'><strong>Support / Feedback</strong></h2><br />
        <form action="https://formsubmit.co/privatestartup2004@gmail.com" method="POST" target='_blank'>
          <div className="area text-center">
            <label htmlFor="fullName" className="form-label"></label>
            <input type="text" placeholder="Full Name" id="fullName" name="Full&nbsp;Name" required />
          </div>
          <div className="area">
            <label htmlFor="emailInfo" className="form-label"></label>
            <input type="email" placeholder="E-Mail" id="emailInfo" name="E-Mail" required />
          </div>
          <div className="area">
            <label htmlFor="phoneNumber" className="form-label"></label>
            <input type="text" placeholder="Phone No" id="phoneNumber" name="Phone&nbsp;No" required />
          </div>
          <div className="area">
            <label htmlFor="comments" className="form-label"></label>
            <textarea id="comments" rows="5" placeholder="Question / Message" name="Question&nbsp;/&nbsp;Message"
              required></textarea>
          </div>
          <div className="submit">
            <button type="submit"><b className="submit">Submit</b></button>
          </div><br />
        </form>
      </div>
      <div className='media'><br />
        <h2 className='head text-center'>Social Media</h2>
        <div className="body01">
          <ul className="social-icons">
            <li>
              <a href="https://api.whatsapp.com/send?phone=917498731202&text=" target="_blank"
                aria-label="Whatsapp" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100072287925930" target="_blank"
                aria-label="Facebook" rel="noreferrer"><i className="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/devil_since1985/" target="_blank" aria-label="Instagram"
                rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default FeedBack
