import React from 'react'
import { products } from '../data/products'

const ProductDetails = ({params}) => {
  const product = products[params.productId]
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-sand-light">
            {/* Main product image */}
            <img 
              src= {product.mainImage}
              alt="Product" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* Thumbnail images */}
            {product.thumbnails.map((imgSrc, index) => (
              <div key={index} className="aspect-square bg-sand-light cursor-pointer hover:opacity-75">
                <img 
                  src={imgSrc}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product Info */}
        <div className="space-y-6">
          <h1 className="text-heading font-light">{product.name}</h1>
          <div className="text-xl">{product.price}</div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-body">Quantity</label>
              <input 
                type="number" 
                min="1" 
                defaultValue="1"
                className="w-20 p-2 border border-sage rounded-md"
              />
            </div>
            <button className="w-full bg-sage hover:bg-sage-dark text-white py-3 px-6 rounded-md transition duration-200">
              Add to Cart
            </button>
          </div>
          <div className="prose">
            <p className="text-body text-gray-600">
              {product.description}
            </p>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-subheading font-light mb-4">Product Info</h2>
            <ul className="space-y-2 text-gray-600">
              <li>SKU: {product.sku}</li>
              <li>Category:{product.category}</li>
              <li>Tags: {product.tags}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

