import React from 'react'
import {Link} from 'react-router-dom'

function Smurf({smurf}){

    return(
        <div>
                <Link to={`/smurf/${smurf.id}?name=${smurf.name}`}>{smurf.name}</Link>
             <p>{smurf.age}</p>
             <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;