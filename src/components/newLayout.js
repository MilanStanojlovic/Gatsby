import React from 'react';
import Footer from './footer';


const NewLayout = (props) => {
  return (
    <div>

      {props.children}
      <Footer />
    </div>
  )
}

export default NewLayout;