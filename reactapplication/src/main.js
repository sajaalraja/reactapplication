import React, { Component } from 'react'
import HornedBeast from  "./HornedBeast";

class Main extends Component {

    render() {
        
        return (
            <div>
                <HornedBeast   title="UniWhal"
                imageurl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                description="A unicorn and a narwhal nuzzling their horns"
                
                
                
                />
                <HornedBeast         
                
                title="Rhino Family"
                imageurl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                description="Mother (or father) rhino with two babies"
                
                
                
                />
                
            </div>
        )
    }
}

export default Main;

