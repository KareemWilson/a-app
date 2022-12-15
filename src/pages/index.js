import * as React from "react"
import Layout from "../components/layout/layout"
import CommunitySection from "../sections/community/communitySection"
import FeaturesSection from "../sections/features/featuresSection"
import HeroSection from "../sections/hero/herosection"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <CommunitySection />
    <FeaturesSection />
  </Layout>
)

export const Head = () => <title>Accelerator app</title>

export default IndexPage
