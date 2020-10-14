import React from "react"
import { Link } from "gatsby"



const QuestionPageLink = ({ id, name, children }) => (
    <Link className={"nodec"} to={`/question/${id}#start`}>{name}{children}</Link>
  )


export default QuestionPageLink