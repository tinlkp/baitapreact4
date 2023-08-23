import React, { Component } from 'react'


import "./testcss.css"
import { connect } from 'react-redux'

class BangTinh extends Component {
    filterContent = () => {
        return this.props.danhSachVe.filter((element) => element.dangChon === true)
    }

    renderContent = () => {
        return this.filterContent().map((element) => {
            return <tr key={element.soGhe} className="color">
                <td>{element.soGhe}</td>
                <td>{element.gia}</td>
                <td>
                    <span onClick={() => this.props.dispatch({
                        type: "CHON_GHE",
                        payload: element,
                    })
                    }
                        className="colorRed">X</span>
                </td>
            </tr>
        })

    }
    tinhTongTien = () => {
        return this.filterContent().forEach((element) => {
            return element
        })

    }

    render() {

        return (

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="clw">Số Ghế</th>
                        <th className="clw">Giá</th>
                        <th className="clw">Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderContent()}
                    {/* <tr className="color">
                        <td>A1</td>
                        <td>150.000</td>
                        <td>
                            <span className="colorRed">X</span>
                        </td>
                    </tr>
                    <tr className="color">
                        <td>A2</td>
                        <td>150.000</td>
                        <td>
                            <span className="colorRed">X</span>
                        </td>
                    </tr> */}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="clw">Tổng tiền</td>
                        <td className="color">{this.tinhTongTien()} </td>;
                        <td></td>
                    </tr>
                </tfoot>
            </table>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachVe: state.datVeReducers.danhSachVe.flatMap((element) => {
            return element.danhSachGhe
        }),

    }
}

export default connect(mapStateToProps)(BangTinh)
