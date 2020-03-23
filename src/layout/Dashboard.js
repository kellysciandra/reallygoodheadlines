import React, { Component } from 'react';



class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* header marquee section */}
        <header className="header">
          <div className="main">
            <marquee><h1>is there any good news?</h1></marquee>
          </div>
        </header>

        {/* main page container */}
        <section className='showcase'>
        <a href='/beats'><h1 className='beats'>--- Headlines ---</h1></a>
          <div className='first'>
 
          </div>
        </section>
 
      </div>
    );
  }
}

export default Dashboard;