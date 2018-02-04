import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import  * as actions from '../actions';

const DashBoard = ()=><h2>DashBoard</h2>
const SurveyNew = ()=><h2>surveyNew</h2>
const Landing = ()=><h2>Landing</h2>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
   

    

    render(){
      
    return(
        <div>
           <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/" exact component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route path="/surveys/new" component={SurveyNew} />
                
                
            </div>
           </BrowserRouter>
        </div>
    );
}
};




export default connect(null,actions)(App);