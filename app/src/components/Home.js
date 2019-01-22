import React from 'react'

const Home = () => {
  return (
    <div>
      <form name="submitMeme" netlify-honeypot="bot-field" method="POST" data-netlify="true">
        <p style={{ display: "none" }}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
          <label>Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Email: <input type="text" name="email"/></label>
        </p>
        {/* <div data-netlify-recaptcha="true"></div> */}
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Home;