import React from "react"
import { Link } from "gatsby"


const CandidateMug = ({ id, status, alt }) => (
    
    <Link to={`/candidate/${id}#start`}><img class="is-rounded " src={`https://coloradosun.com/wp-content/uploads/sites/15/2020/10/${id}-${status}.jpg`} alt={alt}/></Link>
  )


export default CandidateMug