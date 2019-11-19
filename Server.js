import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

const Div = styled.div`
    padding: 10px;
    background-color: #f2f2f2;
`

const P = styled.p`
    margin: 0 0 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const A = styled.a`
    background-color: #00b33c;
    border-color: #008d4c;
    color: #fff;
    display: inline-block;
    padding: 6px 12px;
    margin: 2px;

`

class Server extends Component {

    render() {
        return (       
            <Div className="box-body">
                <P>Tìm kiếm trên server khác</P>
                <div className="margin">  
                    <A className="btn btn-success" href={"/tim-kiem/phimmoi"+"/"+this.props.textSearch} >Phim mới</A>   
                    <A className="btn btn-success" href={"/tim-kiem/HDO"+"/"+this.props.textSearch}>HDO.TV</A> 
                    <A className="btn btn-success" href="">BiluTV</A>    
                    <A className="btn btn-success" href={"/tim-kiem/phimbathu"+"/"+this.props.textSearch}>Phim bất hủ</A>    
                    <A className="btn btn-success" href="">Phim 14</A>    
                    <A className="btn btn-success" href="">XPhim</A>    
                    <A className="btn btn-success" href="">Filmfast</A>       
                </div>
            </Div>
        )
    }
}
const mapStateToProps=(state, owProps) => {
    return {
      textSearch : state.textSearch
    }
  }
  
  export default connect(mapStateToProps, )(Server);