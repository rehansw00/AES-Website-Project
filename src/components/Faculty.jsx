import React from 'react';

const aboutData = [
  {
    name: "SHAIKH S A",
    description: "Principal",
    image: "https://studentaffairs.unl.edu/images/news-article/EmilyJohnson.jpg", 
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
   
  },
  {
    name: "WAHAB SAYYED",
    description: "secretory",
    image: "src/assets/secretory.jpeg", 
    quote: "Together, we can achieve greatness. Let’s work hand-in-hand to shape the future and build a thriving school environment.",
   
  },
  {
    name: "GOLAHAR S H -B.Ed",
    description: "All Subjects Teacher",
    image: "src/assets/fac3.png", 
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth.",
   
  },
  
  {
    name: "PATHAN IMRANKHAN ISAKHAN",
    description: "Science Teacher",
    image: "", 
    quote: "Science is a journey of discovery. Let's explore and learn together.",
    
  },
  {
    name: "SHAIKH IRSHAD SIKANDAR",
    description: "Mathematics Teacher",
    image: "src/assets/fac4.png", 
    quote: "Mathematics is the language of the universe. Let's unlock its secrets together.",
    
  },
  {
    name: "BHUJBAL RANJANA VASANT",
    description: "Mathematics Teacher",
    image: "src/assets/fac3.png", 
    quote: "Science is a journey of discovery. Let's explore and learn together.",
    
  },
  {
    name: "RAVINDRA DINKARAO GHUMARE",
    description: "Science Teacher",
    image: "src/assets/fac3.png", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
  ,
  {
    name: "SAYYED KULSUM IBRAHIM",
    description: "Environment studies Teacher",
    image: "src/assets/fac3.png", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
  ,
  {
    name: "SAYYED KULSUM IBRAHIM",
    description: "Environment studies Teacher",
    image: "src/assets/fac3.png", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
  ,
  {
    name: "SAYYED KULSUM IBRAHIM",
    description: "Environment studies Teacher",
    image: "src/assets/fac3.png", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    
  }
  
];

function Faculty() {
  const principal = aboutData.find(member => member.description === "Principal");
  const secretory = aboutData.find(member => member.description === "secretory");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "secretory");

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">Our Faculty</h1>

     
      <div className="grid md:grid-cols-2 gap-8 mb-16">
       
        {principal && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
                
              </div>
            </div>
          </div>
        )}

        
        {secretory && (
          <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={secretory.image} alt={secretory.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{secretory.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{secretory.name}</h2>
                <p className="mt-2 text-gray-500">{secretory.quote}</p>
              
              </div>
            </div>
          </div>
        )}
      </div>

     
      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Dedicated Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.description}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{data.name}</h3>
                  <p className="mt-2 text-gray-500">{data.quote}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;
