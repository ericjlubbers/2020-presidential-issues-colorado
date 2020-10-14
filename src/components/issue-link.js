import React from "react"
import { Link } from "gatsby"



const IssuePageLink = ({ id, name, children }) => (
    <Link className={"nodec"} to={`/issue/${id}#start`} >{name}{children}</Link>
  )


export default IssuePageLink