import React,{Component} from 'react';
import './style.css'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/2fm6x.jpg",
            allMemeImgs: []
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes}=response.data
            this.setState({
                allMemeImgs:memes
            })
        })
    }


handleChange(event){
    const {name,value} = event.target
    this.setState({
        [name] : value
    })

}

handleSubmit(event){
    event.preventDefault()
    const randNum=Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg=this.state.allMemeImgs[randNum].url
    this.setState({
        randomImg : randMemeImg
    })
}



render(){
    return(
        <body>

       <div class="container"> 

        <form className="meme-form" align="center" onSubmit={this.handleSubmit}>
         <br/>
         <div class="col-sm-12">        
         <input type="text" name="topText" value={this.state.topText} placeholder="Top Text" onChange={this.handleChange} />
         <input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom Text" onChange={this.handleChange} />
        
        <button>Generator</button>
        </div>
            </form>
            </div>

            <div style={{marginTop:'2%'}}></div>
            <div className="main">
            
                <img src={this.state.randomImg} alt="randomImg" class="img-responsive" className="img" width="500" height="500" />
                
                <div style={{marginTop:'-120%'}}>
                <h2 className="topText" style={{color:'white'}} align="center">{this.state.topText}</h2>
                </div>
                <div style={{marginTop:'80%',position:'relative'}}>
                <h2 className="bottomText" style={{color:'white'}} align="center">{this.state.bottomText}</h2>
            </div>

                

           

          </div>
        </body>    
    )
}

}

export default MemeGenerator;