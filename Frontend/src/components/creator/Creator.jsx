import React from 'react'
import Navbar from '../components_lite/Navbar'
import ankit from './Ankit.jpg'; // Import the local image

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={ankit}
              alt="Ankit Mondal"
              className="h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ankit Mondal
            </h2>
            <p className="text-gray-600 mb-2">
              I’m <strong>Ankit Mondal</strong>, a <strong>Computer Science Engineering</strong> student at <strong>Meghnad Saha Institute of Technology, Kolkata</strong>, with a strong interest in <strong>Full Stack Development</strong> and <strong>Artificial Intelligence</strong>.
            </p>
            <p className="text-gray-600 mb-2">
              I enjoy building practical and impactful web applications that combine functionality with great user experience. My technical skill set includes <strong>C, C++, Python, Java, HTML, CSS, JavaScript, Node.js, Express.js, React.js,</strong> and <strong>MongoDB</strong>.
            </p>
            <p className="text-gray-600 mb-2">
              Beyond academics, I’m actively involved as a <strong>Core Member of the Greenovation Club</strong> and a <strong>member of the AIML Team at Hackerspace</strong>, where I contribute to innovative projects and team collaborations.
            </p>
            <p className="text-gray-600">
              I’m passionate about using technology to solve real-world problems and aspire to work on projects that merge <strong>AI with healthcare</strong> to create meaningful change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creator
