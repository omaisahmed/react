import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import HeaderNavigation from './Components/HeaderNavigation';
import Body from './Components/Body';
import Checkbox from './Components/Checkbox';
import Footer from './Components/Footer';
import DateTime from './Components/DateTime';
import ContactCard from './Components/ContactCard';
import Exam from './Components/Exam';
import ExamData from './Components/ExamData';
import Conditional from './Components/Conditional';
import Form from './Components/Form';
import Counter from './Components/Counter';
import Logged from './Components/Logged';
import MsgCounter from './Components/MsgCounter';
import LoggedInOut from './Components/LoggedInOut';
import ComponentDidMount from './Components/ComponentDidMount';

//Project-Meme Generator :
import Header from './Components/Project-MemeGenerator/Header';
import MemeGenerator from './Components/Project-MemeGenerator/MemeGenerator';

//Project-Avatar :
import Avatar from './Components/Project-Avatar/Avatar.js'

//React-Router :
import Menu from './Components/React-Router/Menu';
import About from './Components/React-Router/About';
import Contact from './Components/React-Router/Contact';
import Home from './Components/React-Router/Home';
import {BrowserRouter,Route,Switch,Router,useParams} from 'react-router-dom';


//Reactstrap :
import Reactstrap from './Components/Reactstrap/Reactstrap';
//import CalculatorMain from './Components/Project-Calculator/CalculatorMain';


//Project-Calculator :
import CalculatorMain from './Components/Project-Calculator/CalculatorMain.js';




//import Products from './Components/Products';
//import ProductsData from './Components/ProductsData';



class App extends Component{
constructor(){
  super()
  this.state={


    name:"Omais",
    age:23,
    isLoading : true, 
    
    todos:[
      {
        id:1,
        title:'Hassan',
        completed:false
      },
      {
        id:2,
        title:'Ali',
        completed:false
      },
      {
        id:3,
        title:'Yaqoob',
        completed:false
      }
    ]

  }
}

componentDidMount(){
  setTimeout(() => {
    this.setState({
      isLoading:false
    })
  },1500)

  }
  



  


  render(){    
//const examComponents=ExamData.map(Exam => <Exam key={Exam.id} question={Exam.question}  answer={Exam.answer} />);

  //const ProductsComponents=ProductsData.map(item => <Products key={item.id} product={item} />);
 

  return(
  <div>
  
  <div className="calculator-body">
  <CalculatorMain />
</div>




    <h1>{this.state.todos.title}</h1>

    <h1>Name {this.state.name}</h1>
    <h1>Age {this.state.age}</h1>

  <HeaderNavigation/>,
    <Body/>,
    <Checkbox/>,
    <Footer/>,
    <DateTime/>
    <ContactCard
    imageUrl='http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg'
    phone='0301-1209317'
    email='catty@gmail.com'
    />

    <Exam
    username='Omais'
    question=' What is the capital of Pakistan?'
    answer=' Islamabad'
    />
    <br/>
    <Exam
    username='Ali'
    question=' Who is the president of pakistan?'
    answer=' Arif Alvi'
    />
    <br/>

<Conditional isLoading={this.state.isLoading} />
<br/><br/>
<Form />
<br/><br/>
<Counter/>
<br/><br/>
<Logged/> 
<br/><br/>
<MsgCounter/> 
<br/><br/>
<LoggedInOut/>
<br/><br/>
<ComponentDidMount />


<br/><br/><br/><br/><br/><br/>

<Header/>
<MemeGenerator/> 

<br/><br/><br/><br/><br/><br/>

<Avatar />

<br/><br/><br/><br/><br/><br/>
<BrowserRouter>

<Menu />

<Switch>
<Route path="/Home" component={Home} />
<Route path="/About"  component={About} />
<Route path="/Contact"  component={Contact} />

</Switch>

</BrowserRouter>

<br/><br/><br/><br/><br/><br/>

<Reactstrap />
  </div>
 
  
   
);
}

}

export default App;
