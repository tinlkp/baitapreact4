import { act } from "react-dom/test-utils";
import data from "../../components/data/data.json"


const DEFAULT_STATE = {
    danhSachVe: data,
}

export const datVeReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "CHON_GHE": {
            const data = JSON.parse(JSON.stringify(state.danhSachVe));
            const index = data[action.payload.soHang].danhSachGhe.findIndex(
                (element) => element.soGhe === action.payload.soGhe
            );

            data[action.payload.soHang].danhSachGhe[index].dangChon = !data[action.payload.soHang].danhSachGhe[index].dangChon;


            state.danhSachVe = data;
            break;
        }
       
    }


    return { ...state };
};