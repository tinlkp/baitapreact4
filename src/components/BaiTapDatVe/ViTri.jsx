import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chonGheAction } from '../../store/action/chonGheAction';

class ViTri extends Component {
    render() {
        // console.log(this.props.element);
        const { soGhe, dangChon, daDat } = this.props.element;
        return (

            <td>
                <button onClick={() => this.props.dispatch(chonGheAction(this.props.element))
                }
                    className={`chair ${dangChon && "gheDangChon"} ${daDat && "gheDuocChon"}`} disabled={daDat}>{soGhe}</button>
            </td>

        )
    }
}



export default connect()(ViTri)