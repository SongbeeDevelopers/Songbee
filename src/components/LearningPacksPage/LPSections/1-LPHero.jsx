import { useHistory } from "react-router-dom"

export default function PacksHero() {

  const history = useHistory()

  return (
    <>
      <div
        className="lp-hero-background"
        style={{ backgroundImage: `url('https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076506/Songbee/baby-learningpacks_of5pzv.jpg'  )` }}
      >
        <div className="lp-white-overlay"></div>

        <div className="lp-hero-text">
          <h1>Learning Packs</h1>
          <p>Support Your Child’s Development</p>
          <button className="jr-landing-btn" onClick={() => history.push('/jrcheckout')}>Get Started</button>
        </div>
      </div>

      <div className="lp-orange-overlay"></div>
    </>
  )
}
