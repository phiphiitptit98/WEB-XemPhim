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
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import ReactJWPlayer from 'react-jw-player';
import { Player, ControlBar } from 'video-react';
import "./video-react.css";
import AutoScale from 'react-auto-scale';

const ContentWrapper=styled.div`
    margin-left: 230px;
    min-height: 100%;
    transition: transform .3s ;
    background-color: #ecf0f5;
    z-index: 800;
`
const Section = styled.section`
    position: relative;
    padding: 15px 15px 0 15px;
    background-color: white;

`
const Row = styled.div`
    margin-right: -15px;
    margin-left: -15px;
`
const Centered=styled.div`
    float: none!important;
    margin: 0 auto!important;
    width: 66.66666667%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
const H1=styled.h1`
    display: block;
    float:left;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 19px;
    margin-right: 0px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0px;
    font-weight: 500;
    line-height: 1.1;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: inherit;
`
const PlayFilm=styled.div`
    // width:100%;
    padding-bottom: 56.25%;
    // height: auto!important;
    font-size: 16px;
    position: relative;
    display: block;
    // min-height: 0;
    // overflow: hidden;
    // box-sizing: border-box;
    font-family: Arial,Helvetica,sans-serif;
    background-color: #000;
`
const Media=styled.div`
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`
const Title=styled.div`
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    font-size: .875em;
    height: 8em;
    pointer-events: none;
    padding: 0;
    margin: 0;
    float: none;
    font-family: Arial,Helvetica,sans-serif;
    line-height: 1em;
    list-style: none;
    text-align: left;
    text-transform: none;
    vertical-align: baseline;
    border: 0;
    direction: ltr;
    font-variant: inherit;
    font-stretch: inherit;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
`
const DivBottom=styled.div`
    margin-bottom: 10px;
`
const P=styled.p`
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
`
const Code=styled.code`
    padding: 2px 4px;
    float:left;
    font-size: 12.6px;
    font-weight: 400;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Menlo,Monaco,Consolas,"Courier New",monospace;
    display: block;

`
const A=styled.a`
    color: #3c8dbc;
    text-decoration: none;
    cursor: pointer;
`
const BtnLink=styled.div`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    float: left;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`
const GetLink=styled.button`
    float:left;
    color: #fff;
    background-color: #3c8dbc;
    border-color: #367fa9;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid transparent;
    display: inline-block;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 6px;
    padding-left: 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    overflow: visible;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    align-items: flex-start;
`
const ALink=styled.a`
    float:left;
    margin-left: 2px;
    background-color: #3c8dbc;
    border-color: #367fa9;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 1px solid transparent;
    color: #fff;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
`
const LikeShare=styled.div`
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
`

const BtnDefault=styled.button`
    float:left;
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    border-radius: 3px;
    border: 1px solid transparent;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
`
const Img=styled.image`
    margin: 0 auto;
`

class Xem1 extends Component {
    render() {
        return (
            <div>
                <ContentWrapper>
                <Section>
                    <Row>
                        <Centered>
                            <div > 
                            <H1>{this.props.name}</H1>
                            <AutoScale maxWidth={750} maxHeight={400} maxScale={3}>
                               
                                <Player ref="player" playsInline
                                fluid={false}
                                width={750}
                                heigt={300} 
                                >
                                <source src="http://media.w3.org/2010/05/bunny/movie.mp4"/>
                                    <ControlBar autoHide={false} />
                                </Player>
                            </AutoScale>

                            </div>   

                            <DivBottom></DivBottom>  
                            <P>
                                    <Code>
                                        Nếu phim load quá chậm, hãy tải extension 
                                        <A href="https://chrome.google.com/webstore/detail/goophim/ohaibofimepnedfifhhkcclnnkeeaakf?utm_source=chrome-ntp-icon">Goophim</A>
                                        để load phim nhanh hơn nhé
                                    </Code>
                            </P>
                            <Row>
                                <BtnLink>
                                <P>
                                    <GetLink data-toggle="collapse" data-target="#hide-link" aria-expanded="false" aria-controls="hide-link">Get Link</GetLink>
                                    <ALink href="http://hdo.tv/phim-giai-thoat-mandy-16141.html">Xem o trong goc</ALink>
                                </P>
                                </BtnLink>
                            </Row>
                            <Row>
                        <BtnLink>
                            <P>
                                <BtnDefault>Server 1</BtnDefault>
                            </P>
                        </BtnLink>
                    </Row> 
                        </Centered>
                       
                    </Row>
                    
                </Section>
            </ContentWrapper>
            </div>
        );
    }
}

export default Xem1;