import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Products from "../components/Products"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

// https://www.youtube.com/watch?v=smHhNzM5Uo4
// 2:30

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Products heading="Akvariebelysningar" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
