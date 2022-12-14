import * as React from "react"
import Layout from "../components/layout/layout"
import Section from "../components/section/Section"


const IndexPage = () => (
  <Layout>
    <Section name='Hero'>
        <div>this is hero section</div>
      </Section>
  </Layout>
)

export const Head = () => <title>Accelerator app</title>

export default IndexPage
