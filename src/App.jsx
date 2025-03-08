import lithiumLogo from '/lithium.svg'
import './App.css'
import { useState, useRef, useEffect } from 'react'

const ProductCard = ({ id, name, description, status }) => (
  <div className="product-card">
    <h3>{name}</h3>
    <p>{description}</p>
    {status === 'Get' ? (
      <a href={`/${id}`} className="status-badge clickable">
        {status}
      </a>
    ) : (
      <span className="status-badge">
        {status}
      </span>
    )}
  </div>
)

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const productsRef = useRef(null)

  useEffect(() => {
    if (activeTab === 'products' && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [activeTab])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const products = [
    {
      id: 'lithium-mindscape',
      name: "Lithium Mindscape",
      description: "Interactive neural visualization that transforms your codebase into a living network of synapses. Functions pulse with activity, dependencies flow like neural pathways, and code clusters form organic thought centers.",
      status: "Get"
    },
    {
      id: 'lithium-soundcode',
      name: "Lithium SoundCode",
      description: "Convert your code into musical compositions. Debug by listening to anomalies in the melody. Perfect for visually impaired developers.",
      status: "Coming Soon"
    },
    {
      id: 'lithium-timeshift',
      name: "Lithium TimeShift",
      description: "Git time machine that lets you visualize and simulate how your project would have evolved with different architectural decisions.",
      status: "Get"
    },
    {
      id: 'lithium-biometric',
      name: "Lithium Biometric",
      description: "Code editor that adapts to your biorhythms, adjusting color schemes and suggesting breaks based on your stress levels and focus.",
      status: "Planning"
    },
    {
      id: 'lithium-dreamcatcher',
      name: "Lithium Dreamcatcher",
      description: "Turn whiteboard photos of your midnight coding ideas into working code prototypes using AI and computer vision.",
      status: "Get"
    },
    {
      id: 'lithium-babel',
      name: "Lithium Babel",
      description: "Translate legacy codebases between programming languages while preserving business logic and improving code quality.",
      status: "Coming Soon"
    },
    {
      id: 'lithium-hologram',
      name: "Lithium Hologram",
      description: "AR code review tool that projects your codebase into physical space, enabling team walkthroughs of complex systems.",
      status: "Planning"
    },
    {
      id: 'lithium-neural',
      name: "Lithium Neural",
      description: "Train AI models by describing their behavior in plain English, with automatic code generation and edge case detection.",
      status: "Get"
    },
    {
      id: 'lithium-ecosystem',
      name: "Lithium Ecosystem",
      description: "Self-evolving code that adapts to user behavior patterns and automatically optimizes performance and features.",
      status: "Planning"
    }
  ]

  return (
    <>
      <div>
        <img src={lithiumLogo} className="logo float" alt="Lithium Labs logo" />
      </div>
      <h1>Lithium Labs</h1>
      
      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          Home
        </button>
        <button 
          className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </button>
      </nav>

      {activeTab === 'home' && (
        <p>
          Lithium Labs is a software development company that builds products for
          the web.
        </p>
      )}
      
      {activeTab === 'products' && (
        <div className="products-section">
          <h2 ref={productsRef}>Our Products</h2>
          <div className="products-container">
            <div className="products-grid">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  status={product.status}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
