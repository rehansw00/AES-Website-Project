import React from 'react';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">Springdale Public School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds and shaping future leaders since 1984
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Springdale, we are dedicated to fostering an environment of academic excellence, creativity, and holistic development. Our state-of-the-art facilities and passionate faculty ensure a quality education that empowers students to reach their full potential.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://encyclopediaofarkansas.net/wp-content/uploads/2022/08/SpringdaleHS2_f.jpg" 
              alt="Springdale Public School Campus"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Our Legacy</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since our establishment in 1984, Springdale Public School has grown into a premier institution known for its commitment to educational excellence. We've continuously evolved, integrating modern teaching methodologies and expanding our curriculum to meet the changing needs of our students. Our nurturing and dynamic learning environment has built a reputation that spans decades.
          </p>
        </div>

        {/* <div className="mt-20 text-center">
          <Link to="/events" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Our Programs
          </Link>
        </div> */}

        <div className="bg-gradient-to-b from-blue-50 to-white py-20">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold mb-6 text-blue-900">Our Mission & Motto</h1>
                  <p className="text-2xl font-semibold text-blue-700">
                    Challenge Yourself, Inspire Excellence
                  </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                  {mottoItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                          {React.cloneElement(item.icon, { className: "text-blue-600 text-3xl" })}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
        
                <div className="bg-white rounded-xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Our Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At <span className="font-semibold text-blue-700">Springdale Public School</span>, our mission is to cultivate a nurturing and inclusive environment where every student is empowered to reach their full potential. We are committed to providing a holistic education that fosters academic excellence, critical thinking, creativity, and personal growth. Through a balanced approach to learning, we aim to equip our students with the skills and values necessary to become compassionate, responsible, and successful global citizens.
                  </p>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.',
    icon: <Lightbulb />,
  },
  {
    title: 'Teamwork',
    description: 'We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.',
    icon: <Group />,
  },
  {
    title: 'Quality',
    description: 'Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.',
    icon: <ThumbUp />,
  },
];

export default About;