import React, {Component} from 'react'; 
import './Loading.css';   
class Loading extends Component {  
    render() { 
        return( 
          <>  
          <div className='layout-loading'>
          <div className="u-loading">
                <div className="u-loading__symbol">
          <img src="/img/logo.png" alt='loading-logo'/>
        </div>
      </div>
      </div>
          </>
        )
    }
}
export default Loading;