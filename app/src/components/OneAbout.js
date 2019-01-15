import React from 'react'
import NoMatch from './NoMatch';

const OneAbout = (props) => {
  console.log("Oneeee: ", typeof props.match.params.id)

  if(props.match.params.id < 50) {
    return <div>Oneeeee</div>
  } else{
    return <NoMatch />
  }
}

export default OneAbout;