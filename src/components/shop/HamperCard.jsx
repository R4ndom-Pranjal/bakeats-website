import { useCart } from '../../context/CartContext'
import './HamperCard.css'

export default function HamperCard({ hamper }) {
  const { addItem, updateQty, items: cartItems } = useCart()
  const cartCount = cartItems.find((i) => i.title === hamper.name)?.qty || 0

  const handleAdd = () => {
    addItem({
      title: hamper.name,
      type: 'Festive Hamper',
      image: hamper.image,
      description: hamper.description || hamper.name,
      price: hamper.price,
    })
  }

  const handleDec = () => updateQty(hamper.name, cartCount - 1)

  return (
    <div className="hamper-card">
      <div className="hamper-img-wrap">
        <img src={hamper.image} alt={hamper.name} loading="lazy" />
      </div>

      <div className="hamper-info">
        <h3 className="hamper-name">{hamper.name}</h3>
        {hamper.description && (
          <p className="hamper-desc">{hamper.description}</p>
        )}

        <div className="hamper-footer">
          <div className="bundle-price">
            <span className="bundle-mrp-label">MRP</span>
            <span className="bundle-mrp">&#8377;{hamper.price}</span>
          </div>
          {cartCount > 0 ? (
            <div className="bundle-stepper">
              <button className="bundle-stepper-btn" onClick={handleDec} aria-label="Remove one">−</button>
              <span className="bundle-stepper-count">{cartCount}</span>
              <button className="bundle-stepper-btn" onClick={handleAdd} aria-label="Add one">+</button>
            </div>
          ) : (
            <button className="bundle-add-btn" onClick={handleAdd}>
              Add to Cart
              <span>+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
