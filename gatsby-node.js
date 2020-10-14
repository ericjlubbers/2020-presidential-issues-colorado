const path = require(`path`)
const axios = require("axios")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    allGoogleSpreadsheetAnswers {
        edges {
          node {
            background
            categorySlug
            category
            questionSlug
            longAnswer
            questionText
            shortAnswer
            candidateId
            candidateInfo
            campaignStatus
            candidateName
          }
        }
      }
  }
`).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const items = result.data.allGoogleSpreadsheetAnswers.edges

    let candidates = []

    items.forEach(item => {
      if (item.node.candidateId.length > -1) {
        candidates = candidates.concat(item.node.candidateId)
      }
    })

    candidates = _.uniq(candidates)

    candidates.forEach(candidateId => {
      const candidatePath = `/candidate/${_.kebabCase(candidateId)}/`

      createPage({
        path: candidatePath,
        component: path.resolve(`src/templates/candidate-template.js`),
        context: {
          candidateId,
        },
      })
    })

    let questions = []

    items.forEach(item => {
      if (item.node.questionSlug.length > -1) {
        questions = questions.concat(item.node.questionSlug)
      }
    })

    questions = _.uniq(questions)

    questions.forEach(questionSlug => {
      const questionPath = `/question/${_.kebabCase(questionSlug)}/`

      createPage({
        path: questionPath,
        component: path.resolve(`src/templates/question-template.js`),
        context: {
          questionSlug,
        },
      })
    })

    let categories = []

    items.forEach(item => {
      if (item.node.categorySlug.length > -1) {
        categories = categories.concat(item.node.categorySlug)
      }
    })

    categories = _.uniq(categories)

    categories.forEach(categorySlug => {
      const categoryPath = `/issue/${_.kebabCase(categorySlug)}/`

      // createPage({
      //   path: categoryPath,
      //   component: path.resolve(`src/templates/issue-template.js`),
      //   context: {
      //      categorySlug,
      //   },
      // })
    })
  })
}