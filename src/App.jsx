import Range from '@/Components/InputFields/Range'

function App() {

  return (
    <section>
      <div className="App">
        <h1>Check if it takes the h1 or not</h1>
        <h2>Check if it takes the h2 or not</h2>
        <h6>Check if it takes the h6 or not</h6>
        <p className='text-base'>Text base</p>
        <button className="rounded">Hi</button>
        <div className="d-flex flex-column gap-2">
          <span className="badge bg-2">
            20% OFF
          </span>
          <form className="form w-25 d-flex flex-column gap-2">
            <input type="text" placeholder="Enter your email" className="d-block" />
            <button className="btn-secondary d-block">Login</button>
            <button className="btn-primary d-block">Buy Now</button>
          </form>
        </div>
        <div className="text-muted">₹ 4,000.90</div>
        <div className="col-md-4 m-3">
          <Range />
        </div>
      </div>
    </section>
  )
}

export default App
