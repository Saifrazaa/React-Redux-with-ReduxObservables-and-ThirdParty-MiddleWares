import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
class UpdateProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            username:props.user.username,
            age     :props.user.age
        }
    }
    usernamechange(event){
        this.setState({username:event.target.value});
       console.log(this.state.username);
       
     }
    agechange(event){
        this.setState({age:event.target.value});
        console.log(this.state.age);
        
    }

    render(){
        return (
            <div>
                <h1 style={{marginTop:"30px"}}>Update your Profile </h1>
                <input type='text' className="form-control" style={{marginTop:"30px",width:"400px"}} onChange={this.usernamechange.bind(this)} value={this.state.username} />
                <span className="text text-success">Currently is :{this.state.username}</span>
                <input type='text' className="form-control" style={{marginTop:"30px",width:"400px"}} onChange={this.agechange.bind(this)} value={this.state.age}/>
                <span className="text text-danger">Currently is :{this.state.age}</span>
           
                <br />
                <button style={{marginTop:"30px"}} onClick={this.props.update} className="btn btn-danger">Update</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user:state.user,
        math:state.math
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        update:update
    },dispatch)
}
export default connect(mapStateToProps)(UpdateProfile);