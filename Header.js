import React, { Component } from 'react';
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
// const Sr = styled.span`
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     padding: 0;
//     margin: -1px;
//     overflow: hidden;
//     clip: rect(0,0,0,0);
//     border: 0;
// `
class Header extends Component {
    
    setisShow = () => {
       this.props.changeForm();
       this.props.changeForm1()
    }
    render() {
        return (
            <Head>
                <Logo1  href="http://goophim.com">
                    <Span1>
                        Goophim
                    </Span1>
                </Logo1>
                <Menu class="menu">
                    <A href="#">
                    <Sidebar  >
                        <Imgside onClick={()=>this.setisShow()} src="http://huemed-univ.edu.vn/images/menu-icon.png"></Imgside>         
                    </Sidebar>
                    </A>
                    

                </Menu>
            </Head>
        );
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
        changeForm1:() => {
          dispatch({
            type:"CHANGE_FORM1",
          })
        },
      }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Header);
