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
import axios from 'axios'

const getProductData = () => 
            axios.get('http://localhost:3000/phimbathu')
            .then((res)=> res.data)
class Phimbathu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      id:'',
      name:'',
      seo:'',
      image:'',
      url:'',
      data1:[]
      
    }
  }
  componentWillMount = () => {
    if(this.state.data===null){
      getProductData().then((res)=>{
        this.setState({
          data : res
        })
        var Phimbathu = []
      
      this.state.data.forEach((item) => {
        console.log(item.seo)
      if(item.seo.indexOf(this.props.match.params.slug) !== -1){

        Phimbathu.push(item)
        this.setState({
          data1 : Phimbathu
        });
      }
    });
        console.log(this.state.data1)
      })
    }
  }
  showData = () => {
    return this.state.data1.map((value,key) => (
      <Content key={key} id={value.id} name={value.name} seo={value.seo} image={value.image} url={value.url}/>
    ))
  }
    showMenu = () => {
      if(this.props.isShow===true){
        return(
        <Menu/>
      )
      }
      else{
        return(<Minimenu/>)
      }
    }
    showHeader = () =>{
      if(this.props.isShow===true){
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
            <div className="App">
                <Search/>
                <Server />
                
                {this.showData()}
            </div>
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
      isShow : state.isShow1,
      textSearch : state.textSearch
    }
  }
  
  export default connect(mapStateToProps, )(Phimbathu);
  
