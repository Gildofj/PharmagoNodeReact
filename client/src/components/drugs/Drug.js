import React, {Component} from 'react';
import Payments from '../Payments';

class Drug extends Component {
    render(){
        return(
            <div>
                <li key="Payments"><Payments/></li>
            </div>
        );
    }
}

export default Drug;