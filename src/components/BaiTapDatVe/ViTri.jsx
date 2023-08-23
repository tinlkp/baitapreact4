import React, { Component } from 'react'
import { connect } from 'react-redux';

class ViTri extends Component {
    render() {
        // console.log(this.props.element);
        const { soGhe, dangChon, daDat } = this.props.element;
        return (

            <td>
                <button onClick={() => this.props.dispatch({
                    type: "CHON_GHE",
                    payload: this.props.element,
                })
                }
                    className={`chair ${dangChon && "gheDangChon"} ${daDat && "gheDuocChon"}`} disabled={daDat}>{soGhe}</button>
            </td>

        )
    }
}



export default connect()(ViTri)