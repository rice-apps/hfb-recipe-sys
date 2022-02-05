import React from 'react';
import HFBHeader from "../components/shared/HFBHeader"

const Layout = ({children}) => {
  return <div>
      <HFBHeader/>
      {children}
      {/* footer */}
  </div>;
};

export default Layout;
