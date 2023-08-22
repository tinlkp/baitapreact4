import React, { Component } from 'react'
import { connect } from 'react-redux'
import ViTri from './ViTri';
import HeaderHang from './HeaderHang';

class Ve extends Component {
    renderVe = () => {
        return this.props.element.danhSachGhe.map((element) => {
            if (this.props.element.hang === "") {
                return <HeaderHang key={element.soGhe} element={element} />
            } else {
                return <ViTri key={element.soGhe} element={element} />
            }

        })
    }

    render() {
        console.log(this.props.element.hang)
        return (
            <tr>
                <td className='color' >{this.props.element.hang}</td>

                {this.renderVe()}
            </tr>


        )
    }
}

export default connect()(Ve);
