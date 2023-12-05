//eslint-disable-next-line react/prop-types
import "./App.css";
import { Component } from "react";
import { useState } from "react";
//  function App() {
//   return (
//     <div>
//       <CounterNew/>
//     </div>
//   )
//  }
// export default App;

export default class App extends Component{
 //initalization
  state={
  counter:1,
  fetchData:{},
 };
 //mounting
 componentDidMount(){
   console.log("mounting");
   this.fetchData(this.state.counter);
 }
 //updation
 componentDidUpdate(prevProp,prevState){
  console.log("updation",prevState);
if(prevState.counter !=this.state.counter){
  this.fetchData(this.state.counter);
}
 }
 addCounter = () => {
  this.setState({ counter: this.state.counter + 1 });
};
//https://swapi.dev/api/people/
fetchData(index){
  fetch(`https://swapi.dev/api/people/${index}`)
 .then((res)=>res.json())
 .then((data)=>this.setState({ fetchData: data }));

 }
  render(){
  return(
    <>
    <Greetings/>
    <hr/><hr/>
    <Counter />
    <Counter2 />
    <Infromation name={"meena"} batch={"B51WD"}/>
    <hr/><hr/>
    <div>{this.state.fetchData.name}</div>
    <button onClick={this.addCounter}>Next</button>
    </>
  )
 }
}
class Counter extends Component{
  constructor(){
    super();
    this.state={
      count: 0,
    };
    this.increment=this.increment.bind(this);
  }
  //with binding
  increment(){
    this.setState((prevCount)=>({
      count:prevCount.count+1,
    }));
  }
  //without binding
  decrement=()=>{
    this.setState({count:this.state.count - 1});
    };
render(){
  return(
    <>
    <h1>Counter</h1>
    <h2>{this.state.count}</h2>
    <button onClick={this.increment}>INC</button>
    <button onClick={this.decrement}>DEC</button> 
    </>
  );
}
}
//eslint(react-refresh/only-export-components)
function Counter2(){
  const [count, setCount] = useState(0);
  return(
    <>
    <h1>Counter - 2</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>INC</button>
    <button onClick={() => setCount(count - 1)}>DEC</button>
    </>
  );
}

class Infromation extends Component{
  render(){
    return(
      <div>
        Hi there Im <span>{this.props.name} </span>and Im from <span>{this.props.batch}</span>
      </div>
    );
  }
}

class Greetings extends Component{
  render(){
    //normal js functions 
    const date= new Date();
    const hours=date.getHours();
    console.log(hours);
    let currentTime;
    if(hours<12){
      currentTime="morning";
    }else if(hours>=12 && hours<18){
      currentTime="Evening";
    }else{
        currentTime="Night";
      }
     

    return(
     <div>
      <h1>
        Hi Good{currentTime} All
      </h1>
      </div>
    );
  }
}
