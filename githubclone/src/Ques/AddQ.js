import React from 'react';
import axios from 'axios';

class AddQ extends React.Component{
    constructor(props){
        super(props);
        
        //when we create non-lifecyle method, so it bound to the component instance,
        //bind(this),so it's create the new function every time
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeDesc=this.onChangeDesc.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            title:'',
            description:'',
        };
    };
    onSubmit(e){
        //prevent default means we prevent browser not reload the browser automatically,stope reloading.
       e.preventDefault();
        const user={
            title:this.state.title,
            description:this.state.description,
        };
       axios.post('http://localhost:3000/user/add-issue',user)
       .then(res=>{
           console.log(res.data);
               })
       .catch(err=>err);

       this.setState({
           title:"",
           description:""
       });

       this.props.history.push('/');
    }
    onChangeTitle(e){
         this.setState({
             title:e.target.value,
         })
    }
    onChangeDesc(e){
          this.setState({
              description:e.target.value,
          });
    };
    render(){
        return(

            <div className="addQ container">
            
            <form onSubmit={this.onSubmit}>
            <div class="">
            <input  type="text" 
            required
            class="btn search1 addq"         
             placeholder="Search" 
             value={this.state.title}
             onChange={this.onChangeTitle}/>
            </div>
            <div>
            <textarea type="text" 
            required
            class="btn addq1" 
            placeholder="Ask a question or start a conversation...."
            value={this.state.description}
            onChange={this.onChangeDesc}
            />
            </div>
            <button class="btnQ" type="submit">Start a discussion</button>
            </form>
            </div>
        )
    }
}
export default AddQ;