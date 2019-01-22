import React from 'react'

const Home = () => {
  return (
    <div>
      <form name="submitMeme" method="POST" data-netlify="true">
        <p>
          <label>Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Email: <input type="text" name="email"/></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Home;