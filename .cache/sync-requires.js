const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/404.js"))),
  "component---src-pages-all-questions-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/all-questions.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/index.js"))),
  "component---src-pages-issue-economy-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/economy.js"))),
  "component---src-pages-issue-education-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/education.js"))),
  "component---src-pages-issue-energy-environment-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/energy-environment.js"))),
  "component---src-pages-issue-government-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/government.js"))),
  "component---src-pages-issue-health-care-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/health-care.js"))),
  "component---src-pages-issue-marijuana-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/marijuana.js"))),
  "component---src-pages-issue-public-lands-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/pages/issue/public-lands.js"))),
  "component---src-templates-candidate-template-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/templates/candidate-template.js"))),
  "component---src-templates-question-template-js": hot(preferDefault(require("/Users/eric/projects/pres-2020-colorado/src/templates/question-template.js")))
}

