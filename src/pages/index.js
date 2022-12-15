import * as React from "react"
import Layout from "../components/layout/layout"
import CommunitySection from "../sections/community/communitySection"
import HeroSection from "../sections/hero/herosection"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <CommunitySection />
  </Layout>
)

export const Head = () => <title>Accelerator app</title>

export default IndexPage
