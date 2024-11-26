export default function Kids() {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light mb-12">Kids Collection</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Girls</h3>
              <p className="text-gray-600 mb-6">Playful and practical styles</p>
              <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Girls</button>
            </div>
  
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Boys</h3>
              <p className="text-gray-600 mb-6">Comfortable and durable clothing</p>
              <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Boys</button>
            </div>
  
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Accessories</h3>
              <p className="text-gray-600 mb-6">Fun additions to any outfit</p>
              <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Accessories</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  