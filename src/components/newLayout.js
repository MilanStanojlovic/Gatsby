import React from 'react';
import Footer from './footer';

import layout from './newLayout.module.scss';
import Header from './header';


const NewLayout = (props) => {
  return (
    <div className={layout.container}>
      <Header siteTitle="About" />
      <div className={layout.content}>
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default NewLayout;