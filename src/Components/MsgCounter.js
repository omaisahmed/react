import React,{Component} from 'react';


 class MsgCounter extends Component{
      constructor(){
        super()
        this.state={
            unreadMessages : ["a","b","c"]
        }
      }

      render(){
        return(
            this.state.unreadMessages.length > 0 &&
    <h1>You have {this.state.unreadMessages.length} Unread Messages</h1>
        )
    }
}
      export default MsgCounter;