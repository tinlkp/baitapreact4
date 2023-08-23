import React, { Component } from 'react'
import "./testcss.css"
import DanhSachVe from './DanhSachVe'
import BangTinh from './BangTinh'



export default class BaiTapDatVe extends Component {
    render() {
        return (
            <div className=" background">
                <div className='overlay'></div>
                <div className='side'>
                    <div className="col-8" >
                        <h1 className='headLeft'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                        <h5 className='headTable'>Màn hình</h5>
                        <div className='screen'></div>
                        <DanhSachVe />
                    </div>
                    <div className="col-4">
                        <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
                        <div className='introButton'>
                            <div>
                                <button className="chair gheDuocChon"></button><span className='textBtn'>Ghế đã chọn</span>
                            </div>
                            <div>
                                <button className="chair gheDangChon"></button><span className='textBtn'>Ghế đang chọn</span>
                            </div>
                            <div>
                                <button className="chair"></button><span className='textBtn'>Ghế chưa đặt</span>
                            </div>
                        </div>
                        <BangTinh />



                    </div>
                </div>

            </div >



        )
    }
}
