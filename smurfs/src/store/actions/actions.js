import axios from 'axios'

export const ADDED_SMURF = 'ADDED_SMURF'

export const addSmurf = (smurf) =>{
    return dispatch=>{
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(res =>{
            dispatch({
                type: ADDED_SMURF,
                payload: {smurfs: smurf}
            })
        })
        .catch(err =>{
            console.log(err.response);
        })
    }
}

export const SMURFS_SUCCESS = 'SMURFS_SUCCESS'

export const fetchSmurfs = () =>{
    return dispatch =>{
        axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            dispatch({
                type: SMURFS_SUCCESS,
                payload: {smurfs: res.data}
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
}