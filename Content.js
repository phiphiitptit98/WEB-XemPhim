import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';


const Div2 = styled.div`
    position: relative;
    // right: 250px;
    // top: 200px;
    //left: 0;
`
const Box = styled.div`
    //border-top: 0;
    position: relative;
    right:-270px;
    //left:250px;
    border-radius: 3px;
    background: #fff;
    // border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 80%;
    //box-shadow: 0 1px 1px rgba(0,0,0,.1);
`
// const Body = styled.div`
//     border-top-left-radius: 0;
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 3px;
//     border-bottom-left-radius: 3px;
//     padding-left: 10px;
// `
const Div = styled.div`
    width: 14%;
    float : left;
    margin-left : 30px;
`
const Article = styled.article `
    border: 1px solid #e1e1e1;
    background: #fff;
    margin-bottom: 12px;
`
const Photo = styled.div`
    overflow: hidden;
`
const A = styled.a`
    color: #337ab7;
    text-decoration: none;
`
const Img = styled.img`
    margin: 0 auto;
    width: 190px;
    height: 230px;
`
const Info = styled.div`
    padding: 5px;
    margin-top: 1px;
`
const Row1 = styled.div`
    margin-right: -15px;
    margin-left: -15px;
`
const Div1 = styled.div`
    width: 100%;
    margin-bottom: 5px;
    height: 35px;
`
const H2 = styled.h2`
    font-size: 13px;
    line-height: 14px;
    padding-bottom: 5px;
    padding-left: 8px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            server:'HDO'
        }
    }
    nametoSeo = (str) => {
           // Chuyển hết sang chữ thường
            str = str.toLowerCase();     
         
            // xóa dấu
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
         
            // Xóa ký tự đặc biệt
            str = str.replace(/([^0-9a-z-\s])/g, '');
         
            // Xóa khoảng trắng thay bằng ký tự -
            str = str.replace(/(\s+)/g, '-');
         
            // xóa phần dự - ở đầu
            str = str.replace(/^-+/g, '');
         
            // xóa phần dư - ở cuối
            str = str.replace(/-+$/g, '');
         
            // return
            return str;
    }
    render() {
       
        return (
            <Div2>
                <Box>
                    
                        <Div>
                            <Article>
                                <Photo>
                                    <A href="#">
                                        <Img src={this.props.image}></Img>
                                    </A>
                                </Photo>
                                <Info>
                                    <Row1>
                                        <Div1>
                                            <H2>
                                                <A >
                                                <Link to={"/xemphim/"+this.props.server+"/"+this.nametoSeo(this.props.name)+"."+this.props.id}>
                                               
        
                                                {this.props.server}+{this.props.name}
                                                
                                                </Link>
                                                </A>
                                            </H2>
                                        </Div1>
                                    </Row1>
                                </Info>
                            </Article>
                        </Div>
                   
                </Box>
            </Div2>
            
        );
    }
}


const mapStateToProps=(state, owProps) => {
    return {
      testthoi : state.test,
      server : state.server
    }
  }
const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        searchText:(tempValue) => 
            dispatch({
                type : "GET_TEXT",
                tempValue
            })
        
    }
  }
  export default connect(mapStateToProps ,mapDispatchToProps )(Content);