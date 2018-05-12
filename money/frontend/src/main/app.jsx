import '../common/template/dependencies'
import React from 'react';

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routers from './routers'

export default props => (
  

        <div className="wrapper">
            <Header />
            <Sidebar />
            <Routers />
            <Footer />
        </div>
       
       
    
)