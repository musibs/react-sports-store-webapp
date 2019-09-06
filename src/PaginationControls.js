import React, {Component} from 'react';
import {PaginationButtons} from './PaginationButtons';

export class PaginationControls extends Component{

    constructor(props){
        super(props);
        this.pageSizes = this.props.sizes || [5,10,25,100];
        this.sortKeys = this.props.keys || ["name", "Price"];
    }

    handlePageSizeChange = (eventValue) => {
        this.props.setPageSize(eventValue.target.value);
    }

    handleSortPropertyChange = (eventValue) => {
        this.props.setSortProperty(eventValue.target.value);
    }

    render(){
        return <div className="m-2">
                <div className="text-center m-1">
                    <PaginationButtons 
                        currentPage={this.props.currentPage}
                        pageCount={this.props.pageCount}
                        navigate={this.props.navigateToPage} />
                </div>
                <div className="form-inline justify-content-center">
                    <select 
                        className="form-control"
                        onChange={this.handlePageSizeChange}
                        value={this.props.pageSize || this.pageSizes[0]}>
                    {
                        this.pageSizes.map(size => 
                        <option value={size} key={size}>{size} per page</option>)
                    }
                    </select>
                    <select 
                        className="form-control"
                        onChange={this.handleSortPropertyChange}
                        value={this.props.sortKey || this.sortKeys[0]}>
                    {
                        this.sortKeys.map(key =>
                            <option value={key.toLowerCase()} key={key}>Sort by {key}</option> 
                        )
                    }
                    </select>
                </div>
        </div>
    }
}