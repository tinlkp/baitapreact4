import { act } from "react-dom/test-utils";
import data from "../../components/data/data.json"


const DEFAULT_STATE = {
    danhSachVe: data,
    danhSach: [],
}

export const datVeReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "CHON_GHE": {
            const data = JSON.parse(JSON.stringify(state.danhSachVe));
            const indexRow = data.findIndex(
                (element) => element.hang === action.payload.row);

            const index = data[indexRow].danhSachGhe.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            );

            data[indexRow].danhSachGhe[index].dangChon = !data[indexRow].danhSachGhe[index].dangChon;
            const index1 = state.danhSach.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            )
            if (index1 !== -1) {

            } else {
                state.danhSach.push(data[indexRow].danhSachGhe[index]);
            }

            state.danhSachVe = data;

            break;
        }
        case "XOA_GHE": {
            const data1 = JSON.parse(JSON.stringify(state.danhSach));
          
            const index1 = data1.findIndex((element) => {
                return element.soGhe === action.payload.soGhe;
            })
            data1.splice(index1, 1);

            const data = JSON.parse(JSON.stringify(state.danhSachVe));
            const indexRow = data.findIndex(
                (element) => element.hang === action.payload.row);

            const index = data[indexRow].danhSachGhe.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            );

            data[indexRow].danhSachGhe[index].dangChon = !data[indexRow].danhSachGhe[index].dangChon;


            state.danhSach = data1;
            state.danhSachVe = data;

            break;
        }
        case "THANH_TOAN": {
            const data = JSON.parse(JSON.stringify(state.danhSachVe));

            for (const danhSach of data) {
                for (const ghe of danhSach.danhSachGhe) {
                    if (ghe.dangChon) {
                        ghe.daDat = !ghe.daDat;
                        ghe.dangChon = !ghe.dangChon;

                    }
                }
            }

            state.danhSach = [];
            state.danhSachVe = data;




        }


    }


    return { ...state };
};