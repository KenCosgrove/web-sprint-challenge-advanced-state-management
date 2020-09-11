import {ADDED_SMURF, SMURFS_SUCCESS} from '../actions/actions'

const initialState= {
    smurfs: ['initial Smurf state'],
    newSmurf: false
}

export const rootReducer = (state = initialState, action )=>{
    switch(action.type){
        case SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload.smurfs,
                newSmurf: false
            }
        case ADDED_SMURF:
            return{
                ...state,
                smurfs:[
                    ...state.smurfs,
                    action.payload.smurfs
                ],
                newSmurf: true
            }
        default:
            return state
    }
}