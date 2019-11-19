import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

const Head = styled.header`
    display: flex;
    background: #3c8dbc;
    height: 50px;
    width: 100%;
    position: relative;
    max-height: 100px;
    z-index: 1030;
`;
const Logo1 = styled.a`
    width: 15%;
    background : #367fa9;
    color : black;
    text-decoration: none;
`;
const Logo2 = styled.a`
    width: 3%;
    background : #367fa9;
    color : black;
`;
const Menu = styled.nav`
    width: 85%
`;
const Span1 = styled.span`
    color : white;
    font-weight : 700;
    margin-top : 15px;
    
`;
const Span2 = styled.span`
    color : white;
    font-weight : 700;
    margin-top : 15px;
    
`;
const Sidebar = styled.a`
    color : white;
    margin-left : 5px;
    float: left;
    background-color: transparent;
    background-image: none;
    
    font-family: fontAwesome;
`
const Imgside = styled.img`
    width : 15px;
    height : 20px;
    margin-top:15px;
    margin-left:10px;
`
const A = styled.a``
class Miniheader extends Component {
    setisShow = () => {
        this.props.changeForm()
     }
  render() {
    return (
      <div>
         <Head>
                <Logo2  href="http://goophim.com">
                    <Span2>Goo</Span2>
                </Logo2>
                <Menu class="menu">
                    <A href="#">
                    <Sidebar  >
                        <Imgside onClick={()=>this.setisShow()} src="http://huemed-univ.edu.vn/images/menu-icon.png"></Imgside>         
                    </Sidebar>
                    </A>
                </Menu>
            </Head>
      </div>
    )
  }
}
const mapStateToProps=(state, owProps) => {
    return {
      isShow : state.isShow
    }
  }
  const mapDispatchToProps = (dispatch, ownProps)=> {
      return {
        changeForm:() => {
          dispatch({
            type:"CHANGE_FORM",
          })
        },
      }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Miniheader);
