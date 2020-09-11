import React from 'react'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'

function SmurfProfile(props){
 const params = useParams()

    return(
        <div>
            <h1>{props.smurfs[params.id].name}</h1>
            <p>{props.smurfs[params.id].age}</p>
            <p>{props.smurfs[params.id].height}</p>
        
        </div>
    )
}

const mapStateToProps =state =>{
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{})(SmurfProfile);