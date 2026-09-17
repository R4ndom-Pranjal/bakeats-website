import './RakshaBandhanBanner.css'

const COPIES = 6

export default function RakshaBandhanBanner() {
  const scrollToBundle = (e) => {
    e.preventDefault()
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const festiveCard = document.querySelector('.bundle-card')
        if (festiveCard) {
          festiveCard.style.animation = 'pulse-highlight 0.6s ease 2'
          festiveCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 600)
    }
  }

  const banner = (i) => (
    <a
      key={i}
      className={`rakhi-banner${i > 0 ? ' rakhi-banner--copy' : ''}`}
      href="#products"
      onClick={scrollToBundle}
      aria-label="Rakshabandhan Special Offer – Festive Delight box at ₹249"
    >
      <img
        className="rakhi-banner-img"
        src="/banners/rakhi-banner.jpg"
        alt="Happy Raksha Bandhan – Special Offer – Festive Delight box at ₹249"
        loading="eager"
      />
    </a>
  )

  return (
    <div className="rakhi-banner-wrapper">
      <div className="rakhi-banner-track">
        {Array.from({ length: COPIES * 2 }, (_, i) => banner(i))}
      </div>
    </div>
  )
}
