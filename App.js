import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'
import {connect} from 'react-redux';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Minimenu from './Minimenu';
import Miniheader from './Miniheader';
import Trangchu from './Trangchu';
import Ketqua from './Ketqua';
import axios from 'axios'
import Phimmoi from './Phimmoi'
import Phimbathu from './Phimbathu';
import Hdotv from './Hdotv';
import Phimbathusv from './Phimbathusv'
import Hdotvsv from './Hdotvsv'
import Phimmoisv from './Phimoisv'
import XemPhim from './XemPhim'
import XemPhimmoi from './XemPhimmoi'
import KetquaPm from './KetquaPm'

class App extends Component {
  render() {
    return (
      
       <Router>
        <div className="App">
            <Route exact path="/haidang" component={Trangchu} />
            <Route  path="/ketqua" component={Ketqua} />
            {/* <Route  path="/ketquapm" component={KetquaPm} /> */}
            <Route  path="/phimmoi" component={Phimmoisv} />
            <Route  path="/tim-kiem/phimmoi/:slug" component={Phimmoi} />
            <Route  path="/HDO" component={Hdotvsv} />
            <Route  path="/tim-kiem/HDO/:slug" component={Hdotv} />
            <Route  path="/phimbathu" component={Phimbathusv} />
            <Route  path="/tim-kiem/phimbathu/:slug" component={Phimbathu} />
            <Route  path="/xemphim/HDO/:slug.:id" component={XemPhim} />
            
            <Route  path="/xemphim/phimmoi/:slug.:id" component={XemPhimmoi} />
            {/* <Route  path="/xemphim/phimbathu/:name:.id" component={XemPhim} /> */}
        </div>
      </Router> 
      
     
    );
  }
}


const mapStateToProps=(state, owProps) => {
  return {
    isShow : state.isShow1,
    textSearch : state.textSearch
  }
}

export default connect(mapStateToProps, )(App);
