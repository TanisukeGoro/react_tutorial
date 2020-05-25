// App.jsx
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Booklist from './components/Booklist'
import axios from 'axios'
import styled from 'styled-components';

// 入力値に`books`を追加して出力するシンプルな関数を定義
const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const Header = styled.div`
  padding: 10px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 1.5em;
`

const Tab = styled.div`
	 box-shadow: 0 -1px 0 #eee inset;
	 /* border-radius: 6px 6px 0 0; */
   border: .5px solid #e0e0e0;
	 cursor: pointer;
	 display: block;
	 text-decoration: none;
	 color: #333;
	 flex-grow: 3;
   text-align: center;
   background-color: ${props => props.to === props.path ? '#fff' : '#f2f2f2'};
	 user-select: none;
	 text-align: center;
	 transition: 0.3s background-color ease, 0.3s box-shadow ease;
	 height: 50px;
	 box-sizing: border-box;
	 padding: 15px;

   &:hover{
    background-color: #f9f9f9;
    box-shadow: 0 1px 0 #f4f4f4 inset;
  }
  
`
const LinkContainer = styled.div`
  display:flex;
`

const LinkTxt = styled(Link)`
  color: #000000;
  text-decoration: none;
  width: 100%;
`

const languages = ['React', 'Vue', 'Angular']

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {pathname : window.location.pathname };
  }
  render(){
    return(
    <BrowserRouter>
    <div>
      <Header><h1>Javascript FW Book List</h1></Header>
      <LinkContainer>
        <LinkTxt to='/' onClick={() => this.setState({pathname:'/'})}>
          <Tab to='/' path={this.state.pathname}>React</Tab>
        </LinkTxt>
        <LinkTxt to='/vue' onClick={() => this.setState({pathname:'/vue'})}>
          <Tab to='/vue' path={this.state.pathname}>Vue</Tab>
        </LinkTxt>
        <LinkTxt to='/angular' onClick={() => this.setState({pathname:'/angular'})}>
          <Tab to='/angular' path={this.state.pathname} >Angular</Tab>
        </LinkTxt>
      </LinkContainer>
      <Route exact path='/' render={ props => <Booklist  language={languages[0]} getData={keyword => getDataFromAPI(keyword)} /> } />     
      <Route path='/vue' render={props => <Booklist language={languages[1]} getData={keyword => getDataFromAPI(keyword)}/>} />  
      <Route path='/angular' render={props => <Booklist language={languages[2]} getData={keyword => getDataFromAPI(keyword)}/>} />  
    </div>
    </BrowserRouter>
    )
  }
}
export default App;
