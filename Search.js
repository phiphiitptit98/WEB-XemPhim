import React, { Component } from 'react'
import styled from 'styled-components'
import {push} from 'react-router-redux'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Div = styled.div`
    margin-left: 300px;
    margin-right: 300px;
    margin-top: 20px;
` 

class Search extends Component {
    constructor() {
        super();
        this.state = {
            tempValue: ''
        };
    }    
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
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
    addText = (tempValue) => {
        console.log("aa")
        // console.log(tempValue)
        if(tempValue===""){
            tempValue="*"
        }
        else{
            tempValue = tempValue
        }
        this.props.searchText(tempValue)
    }
    

    render() {
    return (
        <Div>
            <form role="Form" action="" method="POST" charset="UTF-8">
                <div class="form-group">
                    <div class="input-group">
                        <input class="form-control" 
                                type="text" name="search" 
                                placeholder="Search for what you want..." 
                                onChange={(event) => this.isChange(event)}
                                required/>
                        <span class="input-group-btn">
                        
                        <div>
                            <Link to={"/tim-kiem/"+this.props.server+"/"+this.nametoSeo(this.state.tempValue)} className="btn btn-info" onClick={()=>this.addText(this.nametoSeo(this.state.tempValue))}>Tìm</Link>
                        </div>
                        
                        </span>
                    </div>
                </div>
            </form>
        </Div>
        
    )
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
  export default connect(mapStateToProps ,mapDispatchToProps )(Search);