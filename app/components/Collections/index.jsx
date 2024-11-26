export default function Collections() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-light mb-12">Our Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#fafafa] p-8">
            <h3 className="text-xl font-light mb-4">Winter 2024</h3>
            <p className="text-gray-600 mb-6">Light, breezy pieces for the warmer days</p>
            <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Now</button>
          </div>

          <div className="bg-[#fafafa] p-8">
            <h3 className="text-xl font-light mb-4">Essentials</h3>
            <p className="text-gray-600 mb-6">Timeless wardrobe staples</p>
            <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Now</button>
          </div>

          <div className="bg-[#fafafa] p-8">
            <h3 className="text-xl font-light mb-4">Limited Edition</h3>
            <p className="text-gray-600 mb-6">Exclusive designer collaborations</p>
            <button className="bg-[#9CB8E2] text-white px-6 py-3 hover:bg-gray-800">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
