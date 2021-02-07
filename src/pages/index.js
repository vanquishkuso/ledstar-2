import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Products from "../components/Products"
import SEO from "../components/seo"

// https://www.youtube.com/watch?v=smHhNzM5Uo4
// 59:10

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products />
  </Layout>
)

export default IndexPage
