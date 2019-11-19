import React, { Component } from 'react'
import styled from 'styled-components';

const Aside = styled.aside`
    background-color: #222d32;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 50px;
    min-height: 100%;
    width: 15%;
    z-index: 810;
`
const Section = styled.section`
    padding-bottom: 10px;
`
const Ulmenu = styled.ul`
    white-space: nowrap;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    data-widget="tree";
`
const Ul = styled.ul`
    margin: 0 1px;
    background: #2c3b41;
    padding-left: 5px;
    text-align : left;
`
const Li = styled.li`
    list-style:none;
    position: relative;
    margin: 0;
    padding: 0;
`
const LiHeader = styled.li`
    color: #4b646f;
    background: #1a2226;
    overflow: hidden;
    text-overflow: clip;
    padding: 10px 25px 10px 15px;
    font-size: 12px;
    white-space: nowrap;
    list-style:none;
`
const Li1 = styled.li`
    position: relative;
    margin: 0;
    padding: 0;
    list-style:none;
`
const Span1 = styled.span`
    color : white;
`
const Span = styled.span`
   
`
const Img = styled.img`
    witdh :20px;
    height:20px;
    margin-right:5px;
`
const A =styled.a`
    color: #b8c7ce;
    border-left: 3px solid transparent;
    position: relative;
    padding: 12px 5px 12px 15px;
    display: block;
    text-align:left;
    &:hover{
        color : white;
        background : #1a2226;
        text-decoration: none;
    }
`
const A2 = styled.a`
    // color : #4b646f;
    padding: 5px 5px 5px 15px;
    display: block;
    font-size: 14px;
    color: #8aa4af;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        color:white
    }
`
const A1 =styled.a`
    border-left-color: #3c8dbc; 
    text-decoration: none;
    background: #1e282c;
    border-left: 3px solid transparent;
    padding: 12px 5px 12px 15px;
    display: block;
    position: relative;
    text-align:left;
    &:hover{
        text-decoration: none;
    }
`
export default class Menu extends Component {
  render() {
    return (
        <Aside>
            <Section>
                <Ulmenu>
                    <LiHeader>Menu</LiHeader>
                    <Li1>
                        <A1 href="">
                            <Img src="http://www.myiconfinder.com/uploads/iconsets/256-256-d908de4ed90c0a06d45e84e6fb8cd4f6.png">
                            
                            </Img>
                            <Span1>Xem phim</Span1>
                            <Img src="https://cdn2.iconfinder.com/data/icons/media-and-communication/164/3-512.png"></Img>
                        </A1>
                        <Ul>
                                <Li>
                                    <A2 href="/phimmoi">
                                        
                                        Phim Mới
                                    </A2>
                                       
                                </Li>
                                <Li>
                                    <A2 href="/HDO">
                                        HDO.TV 
                                    </A2>    
                                </Li>
                                <Li>
                                    <A2 href="">
                                        BiluTV 
                                    </A2>    
                                </Li>
                                <Li>
                                    <A2 href="/phimbathu">
                                        Phim bất hủ 
                                    </A2>    
                                </Li>
                                <Li>
                                    <A2 href="">
                                        Phim14
                                    </A2>    
                                </Li>
                        </Ul>
                    </Li1>
                    <Li>
                        <A href="">
                        <Img src="https://cdn2.iconfinder.com/data/icons/media-and-communication/164/3-512.png"></Img>
                            <Span>Xem TV</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="">
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9-e5TRRkvMFGQeGyhk47K9J0eaX1J9yfc5Q7JQaLrtxsXidyBw"></Img>
                            <Span>Get Link</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="">
                            <Img src="https://www.freeiconspng.com/uploads/search-icon-png-22.png"></Img>
                            <Span>Tìm kiếm Link Fshare</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="">
                            <Img src="https://cdn1.iconfinder.com/data/icons/web-page-and-iternet/90/Web_page_and_internet_icons-14-512.png"></Img>
                            <Span>Get Link Fshare</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="">
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVd9Rd_j9Qh0bxp7qGZ9Q9oKEiTObHS7-OcsJIJpTurizqPeD"></Img>
                            <Span>Extension Chrome</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="">
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlNYTyNa4bWpmYpBGeDuapjfCYhOn91Q9zWsWx7ec5U6bSmOs"></Img>
                            <Span>App Android</Span>
                        </A>
                    </Li>
                    <Li>
                        <A href="/tv">
                            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS4mqZBF3O2sWpolxwzwPuibC3nkZhlf0ywdzQVHRRBSPqKJjAQ"></Img>
                            <Span>Tham gia phát triển</Span>
                        </A>
                    </Li>
                </Ulmenu>
            </Section>
        </Aside>
      
    )
  }
}
