import * as React from "react"
import Layout from "../components/layout/layout"
import Section from "../components/section/Section"


const IndexPage = () => (
  <Layout>
    <Section name='Hero'>
        <p>Join in and connect</p>
        <h1>To Faster your innovation potential</h1>
        <p>AcceleratorApp Innovation Community — Tools and community to facilitate innovation between all members of our community</p>
        <button>Schedule a Demo</button>
        <img src="Video.svg" alt="template" style={ {position: 'absolute', top: '600px', left: '226px'} }/>
    </Section>
  </Layout>
)

export const Head = () => <title>Accelerator app</title>

export default IndexPage
