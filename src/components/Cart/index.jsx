const data = [
  {
    id: 1, 
    title:'Zapato',
    price: 1500,
    image: 'https://media.revistagq.com/photos/5ca5f3413492a93f6cbf0f10/master/w_1600%2Cc_limit/el_zapato_oxford_763.jpg',
    category: 'zapato',
    description: 'producto nuevo',
  },
  {
    id: 2, 
    title:'Zapato',
    price: 2500,
    image: 'https://media.revistagq.com/photos/5ca5f3413492a93f6cbf0f10/master/w_1600%2Cc_limit/el_zapato_oxford_763.jpg',
    category: 'zapato',
    description: 'producto nuevo',
  },
  {
    id: 3, 
    title:'Bota',
    price: 3500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_840705-MLA50983434133_082022-W.jpg',
    category: 'bota',
    description: 'producto nuevo',
  },
  {
    id: 4, 
    title:'Bota',
    price: 4500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_840705-MLA50983434133_082022-W.jpg',
    category: 'bota',
    description: 'producto nuevo',
  }
]

export function Cart () {
  return (
    <section className="shopping-cart">
      {data.map(article => (
        <article className="cart-item" key={article.id}>
          <div className="item-actions">
            <span className="delete-btn"></span>
          </div>

          <div className="item-photo">
            <img src={article.image} alt={article.title} />
          </div>

          <div className="item-description">
            <span>{article.title}</span>
            <span>{article.price}</span>
            <span>{article.description}</span>
          </div>

          <div className="item-quantity">
            <button className="plus-btn" type="button" name="button">
              {/* <img src="plus.svg" alt="" /> */}
              mas
            </button>
            {/* <input type="text" name="name" value="1" /> */}
            <button className="minus-btn" type="button" name="button">
              {/* <img src="minus.svg" alt="" /> */}
              menos
            </button>
          </div>

          <div className="total-price">$349</div>
        </article>
      ))}
    </section>
  )
}
