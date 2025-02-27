import { useEffect, useState } from "react"
import './pagination.css'

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  )
}

const PAGE_SIZE = 10


export default function PaginationComp() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurretnPage] = useState(0)

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products")
    const json = await data.json();
    // console.log('data', json)
    setProducts(json.products)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const totalProducts = products.length
  // console.log('count', totalProducts)
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE)
  // console.log('calc', totalProducts)
  const start = currentPage * PAGE_SIZE
  const end = start + PAGE_SIZE

  const handlePageChange = (n) => {
    setCurretnPage(n)
  }

  const goToNext = () => {
    setCurretnPage((prev) => prev + 1)
  }

  const goToPrev = () => {
    setCurretnPage((prev) => prev - 1)
  }


  return (
    <>
      {!products.length ? (<h1>No Products Found</h1>) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Pagination</h1>
          <div className="page-container">
            <button
              disabled={currentPage === 0}
              className="page-number"
              onClick={() => goToPrev()}
            >Prev</button>
            {[...Array(noOfPages)].keys().map((n) => {
              return (
                <button key={n}
                  className={`page-number + ${n === currentPage ? "active" : ""}`}
                  onClick={() => handlePageChange(n)}
                >{n}</button>)
            })}
            <button
              disabled={currentPage === noOfPages - 1}
              className="page-number"
              onClick={() => goToNext()}
            >Next</button>
          </div>
          <div className="products-container">
            {products.slice(start, end).map((p) => {
              return (
                <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}



// step by step aproach
// 1. fetch data from dummy api
// 2. create product card component only data shown in images and title
// 3. add some styling for product component
// 4. calculation for products
// 5. create pagination numbers div with styling
// 6. add slice with start and end dynamically
// 7. while we click on pagination button to change cards using useState
// 8. add next and prev buttons to pagination
// 9. which pagination button active represents with highlight color