import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

const Div = styled.div`
    background-color: #cceeff;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    height: 300px;
    width: 170px;   
    margin: 20px;
    padding-left: 20px;
    float: left;
`
const Img = styled.img`
    margin-left: -20px;
    margin-top: -20px;
    width: 170px;
    height: 230px;
`

const A = styled.a`
    color: #3c8dbc;
    font-size: 13px;
    line-height: 14px;
    margin: 0;
    padding-left: 8px;
    float: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`
export default class Box extends Component {
  render() {
    return (
      <div>
        <Div class="box a">
                        <div className="photo">
                            <a href="">
                                <Img src={this.props.image}/>
                            </a>
                        </div> 
                        <div className="info">
                            <div className="row">
                                <div className="details col-md-6">
                                    <h2>
                                        <A href="">
                                            {this.props.name}
                                        </A>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        </Div>
      </div>
    )
  }
}
