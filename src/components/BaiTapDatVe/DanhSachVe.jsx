import React, { Component } from 'react';
import Ve from './Ve';
import { connect } from 'react-redux';




class DanhSachVe extends Component {
    renderContent = () => {
        return this.props.danhSachVe.map((element) => {
            return <Ve key={element.hang} element={element} />
        });
    };
    render() {
        return (

            <table className="tableLeft">
                <thead>
                    <tr className='color'>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        {this.renderContent()}
                    
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachVe: state.datVeReducers.danhSachVe,
    };
};
export default connect(mapStateToProps)(DanhSachVe);
