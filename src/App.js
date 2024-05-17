import React,{ Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';





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
      <button onClick= {this.nextYear}>+++</button>
    <h1> My name is {name}, surname - {surname}, {link}, age-{this.state.years}</h1>
    <a href={link}>My profile</a>
  </div>
  )
 
}
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
           {props.children}
        </div>
    )
}

function App() {
  return (
    <Wrapper>
                <DynamicGreating color={'primary'}>
                    <h2>This weel was hard</h2>
                    <h2>Hello world!</h2>
                </DynamicGreating>
                

        <WhoAmI name='John' surname="Smith" link="facebook.com"/>
        <WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
    </Wrapper>
  );
}

export default App;

