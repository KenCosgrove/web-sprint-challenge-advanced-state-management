import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchSmurfs} from '../store/actions/actions'

import Smurf from './Smurf'

function SmurfsList(props){

    useEffect(()=>{
        props.fetchSmurfs()
    },[])


    return(
        <div>
             <h1>SMURFS VILLAGE!</h1>
             {
                 props.smurfs.map( smurf =>{
                     return <Smurf key={smurf.id}  smurf={smurf}/>
                 })
             }
        </div>
    )
}

function mapStateToProps(state){
    return{
        smurfs: state.smurfs,
        newSmurf: state.newSmurf
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);