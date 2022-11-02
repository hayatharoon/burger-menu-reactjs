import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blogs = () => (
  <Layout>
    <h1>Hi from the Blog Page</h1>
    <p>Welcome to BLog Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Blogs
