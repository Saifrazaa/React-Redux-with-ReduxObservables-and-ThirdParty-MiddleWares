import React ,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addtodo} from "../actions";
class Main extends Component{
    constructor(){
        super();
        this.state={
            todovalue:''
        }
    }
    updatestate(event)
    {
        this.setState({todovalue:event.target.value});
    }
    showtodos(){
        return this.props.todos.map((todo)=>{
            return (
                <tr><td>Todos</td><td>{todo.todo}</td><td className='btn btn-danger'>Delete</td><td></td></tr>
            )
        })
    }
    render(){
        return (
            <div>
                <center style={{marginTop:"30px"}}>
                <h1 className='alert alert-warning'>Welcome To Todo App By Using Redux And ReactJS</h1>
                    <input  type='text' id="add" className='form-control' value={this.state.todovalue} onChange={this.updatestate.bind(this)}  style={{width:"400px",marginTop:"30px"}} placeholder="Add Todo" />
                    <button style={{marginTop:"30px"}} className='btn btn-danger' onClick={this.props.addtodo.bind(this,this.state.todovalue)}>ADD TODO</button>
                    <h3 style={{marginTop:"30px"}} className='text text-success'>{this.state.todovalue}</h3>
                <div>
                <table className="table table-hover table-bordered table-striped" style={{marginTop:"40px"}}>
                    <tr><th>Todos</th><th>Details</th><th>Action</th></tr>
                        {this.showtodos()}
                </table>
                </div>
                </center>
            </div>
        )
    }
}
function mapStateToProps(state){
  console.log(state);
  
    return {
        todos:state.addtodo
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addtodo:addtodo},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Main);