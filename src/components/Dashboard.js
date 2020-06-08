import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export class Dashboard extends Component {
    componentDidMount(){
        var el = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(el, {}); 
    }

    render() {
        return (
            <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4 offset-s2"><a className="active" href="#test1">Unanswered questions</a></li>
                <li className="tab col s4"><a href="#test3">Answered Questions</a></li>
              </ul>
            </div>
            <div id="test1" className="col s6 offset-s3">
              <ul className="collection">
                <li className="collection-item avatar">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2sxmachyeeHttkep40stxuJzCChYVkEhYfF0BI6rWzh1FQyQZ&usqp=CAU" alt="" className="circle" />
                  <span className="title">Jane Doe ask</span>
                  <p className="truncate">
                      Ask would you rather<br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaLdxf3ayHfsQc8FSsGdT7N4U-AaEvS0kSYfFZC-pj_VprT9u-&usqp=CAU" alt="" className="circle" />
                  <span className="title">Jane Doe ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRS_kGSZDoakaIg6tpOvkLS_8mNBWHEjP9D_KoJ2q-jwfAEG8EZ&usqp=CAU" alt="" className="circle" />
                  <span className="title">Samuel Tam ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
                <li className="collection-item avatar">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeOhSDDzexsJRS0E0EjLK9uoi2sLPiVMoRGQNoFjDe_5I7Km23&usqp=CAU" alt="" className="circle" />
                  <span className="title">Petter ask</span>
                  <p className="truncate">
                      Ask would you rather <br></br>
                      the aliens that make first contact be robotic or organic.
                  </p>
                  <a href="#!" className="secondary-content"><i className="material-icons">View Poll</i></a>
                </li>
              </ul>	    	
    
    
            </div>
            <div id="test3" className="col s6 offset-s3">Test 2</div>
          </div>
        )
    }
}

export default Dashboard
