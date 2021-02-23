import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 className="title">Single Page Application</h1>
                    <ul className="header">
                        <li><Navlink to="/">Home</Navlink></li>
                        <li><Navlink to="about">About</Navlink></li>
                        <li><Navlink to="contact">Contact</Navlink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="about" Component={About}/>
                    <Route exact path="contact" Component={Contact}/>                    
                </div>
            </HashRouter>
        );
    }
}

export default Main

