import { createSlice } from "@reduxjs/toolkit";
import { onboardFakeData } from "../data/data";

const onboardSlice = createSlice({
    name: "onboard",
    initialState: onboardFakeData,
    reducers: {
        addOnboard: (state, action) => {
           state.push(action.payload);
        },
        updateOnboard: (state, action) => {
            const {id, name, size, gender, weight, age} = action.payload;
            const uu = state.find(onboard => onboard.id == id);
            if (uu) {
                uu.name = name;
                uu.size = size;
                uu.gender = gender;
                uu.weight = weight;
                uu.age = age;
            }
        },
        // deleteOnboard: (state, action) => {
        //     const {id} = action.payload;
        //     const uu = state.find(devis => devis.id == id);
        //     if (uu) {
        //         return state.filter(f => f.id !== id);
        //     }
        // }
    }
})

export const {addOnboard, updateOnboard} = onboardSlice.actions
export default onboardSlice.reducer;