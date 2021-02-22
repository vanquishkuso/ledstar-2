import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Products from "../components/Products"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"

// https://www.youtube.com/watch?v=smHhNzM5Uo4
// 1:55

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products heading="Akvariebelysningar" />
    <Testimonials />
  </Layout>
)

export default IndexPage
