import React from 'react';

const Curriculum = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-16 text-blue-900">
          Our Curriculum
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Primary (Grades 1-5)",
              subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
              color: "bg-green-500"
            },
            {
              title: "Secondary (Grades 6-10)",
              subjects: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"],
              color: "bg-blue-500"
            },
            {
              title: "Senior Secondary (Grades 11-12)",
              streams: [
                {
                  name: "Science Stream",
                  subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"]
                },
                {
                  name: "Commerce Stream",
                  subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"]
                }
              ],
              color: "bg-purple-500"
            }
          ].map((grade, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className={`${grade.color} py-4 px-6`}>
                <h3 className="text-2xl font-bold text-white">{grade.title}</h3>
              </div>
              <div className="p-6">
                {grade.subjects ? (
                  <ul className="space-y-2">
                    {grade.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                ) : (
                  grade.streams.map((stream, streamIdx) => (
                    <div key={streamIdx} className="mb-4">
                      <h4 className="text-xl font-semibold mb-2 text-blue-700">{stream.name}</h4>
                      <ul className="space-y-2">
                        {stream.subjects.map((subject, subIdx) => (
                          <li key={subIdx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Teaching Methodologies",
              description: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
              icon: "📚"
            },
            {
              title: "Educational Resources",
              description: "Digital classrooms, interactive learning modules, and access to online educational platforms.",
              icon: "💻"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{item.icon}</span>
                <h3 className="text-2xl font-bold text-blue-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;