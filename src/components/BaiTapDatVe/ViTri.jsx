import React, { Component } from 'react'

export default class ViTri extends Component {
    render() {
        // console.log(this.props.element);
        const { soGhe } = this.props.element;
        return (
            
            <td>
                <button className="chair">{soGhe}</button>
            </td>

        )
    }
}
