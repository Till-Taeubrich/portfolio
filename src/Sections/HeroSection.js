import { PageWidth, Title } from "../utils/StyledComponents";

const HeroSection = () => {
  return(
    <section className="hero-section">
      <PageWidth className="content">
        <div class="left-container">
          <h1>Developing solutions that <span>boost your sales</span></h1>
          <Title>Building out Sales-generating E-commerce Solutions from Front to Backend and everything in between.</Title>
        </div>
        <div class="right-container">
        </div>
      </PageWidth>
    </section>
  )
}

export default HeroSection;