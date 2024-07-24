import React from 'react'
import spinner from '../Assets/gif/spinner.gif'

const Spinner = () => {
  return (
    <div className='container-fluid' style={{height: '18em', display: 'flex', justifyContent: 'center'}}>
      <img src={spinner} alt="Loading..." style={{width: 'auto', height: '5em', display: 'block', margin: 'auto'}}/>
    </div>
)
}

export default Spinner;