import React from 'react';
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={time: new Date()};
    }
    
    componentDidMount() {
        this.SetTimer = setInterval(
            () => this.runTime(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.SetTimer);
    }
    
    runTime() {
        this.setState({
          time: new Date()
        });
      }

    render() {
        return (
        <div id="hroot">
            <div id="hleft"><img src="logo512.png" height="30" width="30"/></div>
            <div id="hcenter"><input type="text" id="search_t" /> <button id="search_b">Search</button></div>
            <div id="hright">Time is now: {this.state.time.toLocaleTimeString()}</div>
        </div>
        );
    }
}
export default Header;