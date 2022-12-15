import * as React from "react"
import Section from "../../components/section/Section"
import * as styles from "./heroSection.module.css"

const HeroSection = props => (
  <Section additionalStyles={styles.hero}>
    <div className={styles.heroContent}>
      <p style={{ fontSize: "26px", fontWeigth: "600", fontStyle: 'normal' }}>Join in and connect</p>
      <h1
        style={{
          fontSize: "72px",
          fontWeigth: "700",
          lineHeight: "64px",
          maxWidth: "50rem",
        }}
      >
        To faster your innovation potential
      </h1>
      <p style={{ fontSize: "20px", fontWeigth: "100", maxWidth: "45rem", fontStyle: 'normal' }}>
        AcceleratorApp Innovation Community — Tools and community to facilitate
        innovation between all members of our community
      </p>
      <button
        style={{
          width: "165px",
          heigth: "48px",
          backgroundColor: "white",
          borderRadious: "4px",
          padding: "12px 24px",
          fontWeight: "600",
          fontSize: "12px",
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Schedule a Demo
      </button>
    </div>
    <img src="Video.svg" alt="template" className={styles.heroImage} />
    {/* <img src='chat.svg' alt='chat-icon' className={styles.chatIcon}/> */}
  </Section>
)

export default HeroSection
