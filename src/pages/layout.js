import React, { Component } from 'react';

import Footer from '../components/layout/footer'
import Nav from '../components/layout/nav'

class Layout extends Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={ location } />

        <div className="container" style={ containerStyle }>
          <div className="row">
            <div className="col-lg-12">
              <h1>Killer News.Net</h1>

              { this.props.children }

            </div>
          </div>
          <Footer />
        </div>
      </div>

    );
  }
}

export default Layout;
