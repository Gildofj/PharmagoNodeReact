import React, {Component} from 'react';
import Payments from './Payments';

class Drug extends Component {
    render(){
        return(
            <div>
                <li><Payments/></li>
            </div>
        );
    }
}

export default Drug;