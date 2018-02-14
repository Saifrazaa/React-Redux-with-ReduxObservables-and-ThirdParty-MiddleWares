import React ,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addtodo} from '../actions';
class Main extends Component{
    showtodos(){
        return this.props.todos.map((todo)=>{
            return (
                <tr><td>Todos</td><td key={todo.id}>{todo.todo}</td></tr>
            )
        })
    }
    render(){
        return (
            <div>
                <center style={{marginTop:"30px"}}>
                <h1 className='alert alert-warning'>Welcome To Todo App By Using Redux And ReactJS</h1>
                    <input  type='text' id="add" className='form-control'  style={{width:"400px",marginTop:"30px"}} placeholder="Add Todo" />
                    <button style={{marginTop:"30px"}} className='btn btn-danger' onClick={this.props.addtodo}>ADD TODO</button>
                <div>
                <table className="table table-hover table-bordered table-striped" style={{marginTop:"40px"}}>
                    <tr><th>Todos</th><th>Details</th></tr>
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
        todos:state.showtodos
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({addtodo:addtodo},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Main);