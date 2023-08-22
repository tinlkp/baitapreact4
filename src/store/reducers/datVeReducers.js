import data from "../../components/data/data.json"


const DEFAULT_STATE = {
    danhSachVe: data,
};

export const datVeReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "value": {
            break;
        }
    }
    return { ...state };
};