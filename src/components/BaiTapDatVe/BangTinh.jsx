import React, { Component } from 'react'


import "./testcss.css"
import { connect } from 'react-redux'
import { xoaGheAction } from '../../store/action/chonGheAction'


class BangTinh extends Component {

    
    renderContent = () => {
        return this.props.danhSach.map((element) => {
            return <tr key={element.soGhe} className="color" >
                <td>{element.soGhe}</td>
                <td>{element.gia}</td>
                <td>
                    <span onClick={() => this.props.dispatch(xoaGheAction(element))}
                        className="colorRed">X</span>
                </td>
            </tr >
        })

    }
    tinhTongTien = () => {
        let total = 0;
        for (let i = 0; i < this.props.danhSach.length; i++) {
            let giaTien = this.props.danhSach[i];
            total += giaTien.gia;
        }
        return total;
    }
    renderTongTien = () => {
        return <tr>
            <td className="clw">Tổng tiền</td>
            <td className="color">{this.tinhTongTien()} </td>
            <td>
            </td>
        </tr>
    }

    render() {
        
        return (

            < table className="table table-bordered" >
                <thead>
                    <tr>
                        <th className="clw">Số Ghế</th>
                        <th className="clw">Giá</th>
                        <th className="clw">Hủy</th>
                    </tr>
                </thead>
                <tbody>

                    {this.renderContent()}

                </tbody>
                <tfoot>
                    {this.renderTongTien()}
                </tfoot>
            </ table>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachVe: state.datVeReducers.danhSachVe,
        danhSach: state.datVeReducers.danhSach,

    }
}

export default connect(mapStateToProps)(BangTinh)
