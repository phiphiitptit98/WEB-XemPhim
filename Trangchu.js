import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Minimenu from './Minimenu';
import Miniheader from './Miniheader';
import Logo from './Logo'
import Search from './Search'
import Bottom from './Bottom'
import Content from './Content'
import Server from './Server'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'
import axios from 'axios'


class Trangchu extends Component {
  addData = () => {
    console.log("Aaa")
    
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
    showMenu = () => {
      if(this.props.isShow==true){
        return(
        <Menu/>
      )
      }
      else{
        return(<Minimenu/>)
      }
    }
    showHeader = () =>{
      if(this.props.isShow==true){
        return(
        <Header/>
      )
      }
      else{
        return(<Miniheader/>)
      }
    }
    
    render() {
      
      return (
        <div className="wrapper">
        {this.showHeader()}
        {this.showMenu()}
        <div className="content-wrapper">
        <Search checkConnectProps={(dl)=>this.getTextSearch(dl)}/>
        <Server/>
        

        </div>
        <footer>
            <Bottom />
        </footer>
    </div>
      );
    }
  }
  
  const mapStateToProps=(state, owProps) => {
    return {
      isShow : state.isShow,
      data : state.ketqua
    }
  }
  export default connect(mapStateToProps, )(Trangchu);
  