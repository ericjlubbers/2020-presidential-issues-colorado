import React from "react"
import { Link } from "gatsby"



const CandidatePageLink = ({ id, name, children }) => (
    <Link to={`/candidate/${id}#start`}>{name}{children}</Link>
  )


export default CandidatePageLink