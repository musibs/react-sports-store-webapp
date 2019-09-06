import React, {Component} from 'react';

export class ValidationError extends Component{
    render(){
        if(this.props.errors){
            return this.props.errors.map(e => 
                <h6 className="text-danger" key={e}>
                    {e}
                </h6>
            )
        }
        return null;
    }
}