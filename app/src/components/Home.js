import React from 'react'

const Home = () => {
  return (
    <div>
      <form name="submitMeme" netlify>
        <p>
          <label>Name: <input type="text" name="name"/></label>
        </p>
        <p>
          <label>Email: <input type="text" name="email"/></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Home;