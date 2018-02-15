import React,{Component} from "react";
import {connect} from "react-redux";
import UpdateProfile from "./updateprofile";
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
class App extends Component{
    render(){
        return (
            <Router>
            <div>
                <center className="container" style={{marginTop:"30px"}}>

                    <h1>My Current Profile Details Are</h1>
                    <table className="table table-bordered table-hover table-striped">
                        <tr><th>Credential Name </th><th>Details</th></tr>
                        <tr><td>Username:</td><td>{this.props.user.username}</td></tr>
                        <tr><td>Age:</td><td>{this.props.user.age}</td></tr>
                        <tr><td>Result:</td><td>{this.props.math.result}</td></tr>
                     </table>
                     <Link to="/update" className="btn btn-primary">Update Profile</Link>
                     <Switch>
                        <Route exact path="/update" component={UpdateProfile} />
                    </Switch>
                </center>
                
            </div>
            </Router>
        )
    }
}
function mapStateToProps(state){
    console.log(state);
    
    return {
        user:state.user,
        math:state.math
    }
}
export default connect(mapStateToProps)(App);