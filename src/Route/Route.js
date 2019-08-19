import React, { Component } from 'react';
import { Route,BrowserRouter as Router ,Redirect ,Switch} from 'react-router-dom';
import Container from '../Container';
import Details from '../Details'
class RouteList extends Component {
    render(){
        return(
            <Router>
                <Switch>
                 <Route exact path="/home" render={(props) => <Container {...props}/>} />
                 <Route exact path="/details" component={Details} />
                 <Route exact path="/" component={()=><Redirect to='/home' />} />
                 <Route component={()=><Redirect to='/home' />} />
                 </Switch>
           </Router>
        )
    }
}
export default RouteList;