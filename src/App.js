import { Component } from 'react';
import './App.css';
import styled from 'styled-components';



 export const Button = styled.button `
        display: block;
        padding:5 px 15px;
        background-color:gold;
        border:1px solid rgba(0,0, .2);
        box-shadow: 5px 5px 10px-rgba(0,0, .2);
`
 

class WhoAmI extends Component {
  constructor(props) {
  super(props);
    this.state={
      years:27
    }
  }

  nextYear=()=>{
console.log('+++')
this.setState({
  years:this.state.years+1
})
  }


  render () {
  const {name, surname,link}=this.props
  return (
    <div>
      <Button onClick= {this.nextYear}>+++</Button>
    <h1> My name is {name}, surname - {surname}, {link}, age-{this.state.years}</h1>
    <a href={link}>My profile</a>
  </div>
  )

}
}
const Wrapper =styled.div `
        width:600px;
        margin: 80px auto 0 auto;
         `
  



// const DynamicGreating = (props) => {
//     return (
//         <div className={'mb-3 p-3 border border-' + props.color}>
//            {props.children}
//         </div>
//     )
// }

function App() {
  return (
                
          <Wrapper>
               <WhoAmI name='John' surname="Smith" link="facebook.com"/>
              <WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
              <WhoAmI name='Piter' surname="Shepard" link="vk.com"/>

          </Wrapper>

  );
}

export default App;

