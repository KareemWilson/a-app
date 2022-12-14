import * as React from "react"
import Layout from "../components/layout/layout"
import HeroSection from "../sections/hero/herosection"


const IndexPage = () => (
  <Layout>
    <HeroSection />
  </Layout>
)

export const Head = () => <title>Accelerator app</title>

export default IndexPage
