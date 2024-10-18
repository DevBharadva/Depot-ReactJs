import React, { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">DEPOT</h1>
          <nav className="flex space-x-6">
            <button onClick={handleClick} className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900">
              About Us
            </button>
            <button onClick={handleClick} className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900">
              Services
            </button>
            <button onClick={handleClick} className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900">
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Product Image"
              className="rounded-md shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Favorite Store
            </h2>
            <p className="text-gray-600 mt-4">
              Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi
              mattis, ante metus lacinia tellus, vitae condimentum nulla enim
              bibendum nibh. In hac habitasse platea dictumst. Praesent turpis
              risus, interdum et malesuada fames ac
              ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex
              dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum
              dolor, eleifend et nisl vel, tempor molestie nibh.
            </p>
            {showMore? (
              <div>
                <p className="text-gray-600 mt-4">
                  More information about the store goes here. This text will be
                  displayed when the "Learn More" button is clicked.
                </p>
                <button onClick={handleClick} className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
                  Close
                </button>
              </div>
            ) : (
              <button onClick={handleClick} className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
                Learn More →
              </button>
            )}
          </div>
          <div className=""></div>
        </div>
      </main>
    </div>
  );
}

export default App;