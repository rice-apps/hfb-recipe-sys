import React from 'react';
import HFBHeader from "../components/shared/HFBHeader"

const Layout = (props: {children: React.ReactNode}) => {
  return <div>
      <HFBHeader/>
      {props.children}
      {/* footer */}
  </div>;
};

export default Layout;
