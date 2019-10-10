import React, { Component } from 'react';
import SuporteForm from './SuporteForm';
import ReviewMailForm from './ReviewMailForm';

class Suporte extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <ReviewMailForm
            onCancel={ () => this.setState({showFormReview: false})}
            />;
        }

        return (
            <SuporteForm
            onMailSubmit={ () => this.setState({showFormReview: true})}
            />
        );
    }

    render() {
        return (
            <div> 
                {this.renderContent()}
            </div>
        );
    }
}

export default Suporte;