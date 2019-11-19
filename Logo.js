import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
	margin-right: auto;
	margin-left: auto;
	max-width: 100%;
	padding: 15px;
`

export default class Logo extends Component {
  render() {
    return (
      <div>
    	<Img src="http://goophim.com/img/xlogo_goophim.png.pagespeed.ic.otn3uGENA2.webp" 
    	      className="img-responsive center-block" 
    	      alt="http://goophim.com" />
      </div>
    )
  }
}
