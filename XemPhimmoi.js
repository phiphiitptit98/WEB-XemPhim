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
import Xem1 from './Xem1'
import axios from 'axios'

const getProductData = () => 
            axios.get('http://localhost:3000/phimmoi')
            .then((res)=> res.data)
            console.log("Aaa")
class XemPhimmoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      id:'',
      name:'',
      seo:'',
      image:'',
      url:'',
      data1:[],
      server : 'phimmoi'
    }
  }
  componentWillMount = () => {
      console.log(this.props)
    if(this.state.data===null){
        getProductData().then((res)=>{
          this.setState({
            data : res
          })
          var Phimbathu = []
        
        this.state.data.forEach((item) => {
          console.log(item.id)
        if(item.id==this.props.match.params.id){
  
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
      <Xem1 key={key} id={value.id} name={value.name} seo={value.seo} image={value.image} url={value.url}/>
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
                {/* <Server server={this.state.server} />
                <Search/> */}
                {this.showData()}
                {/* <Xem1/> */}
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
  const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        changeServer:() => 
            dispatch({
                type : "CHANGE_SERVER_PHIMMOI",
            })
        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps )(XemPhimmoi);
  
