export default function Men() {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light mb-12">Men's Collection</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Shirts</h3>
              <p className="text-gray-600">Classic and contemporary styles</p>
            </div>
  
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Pants</h3>
              <p className="text-gray-600">From casual to formal</p>
            </div>
  
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Outerwear</h3>
              <p className="text-gray-600">Jackets and coats</p>
            </div>
  
            <div className="bg-[#fafafa] p-6">
              <h3 className="text-xl font-light mb-4">Accessories</h3>
              <p className="text-gray-600">Finishing touches</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  