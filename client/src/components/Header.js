import React,{Component} from 'react';
import { connect } from 'react-redux';
class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;

            default:
                return <li><a href="/api/logout">Logout</a></li>;
                
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a  className="left brand-logo">ReactFull</a>
                    <ul  className="right">
                        <li><a>{this.renderContent()}</a></li>
                        
                    </ul>
                    </div>
                </nav>
        
            </div>
        )
    }
}

function mapStateToProps({ auth }){
    return { auth }
}

export default connect(mapStateToProps)(Header);