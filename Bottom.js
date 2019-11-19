import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    padding: 15px 15px 20px 20px;
    position: absolute;
     right: 0;
    bottom: 0;
    left: 0;
    
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 0;
    background-color: #ffffb3;
    
`

const Div = styled.div`
    float: right;
    margin-left: 230px;
`

export default class Bottom extends Component {

  render() {
    return (
        <Footer className="main-footer">
            <Div className="pull-right hidden-xs"></Div>
            <strong>
                Copyright © 2018 
                <a href="">Goophim</a>
                .
            </strong>
             All right reserved.
        </Footer>
    )
  }
}