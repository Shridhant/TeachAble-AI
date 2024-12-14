import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const Landing = () => {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [learningObjective, setLearningObjective] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [generatedAssignments, setGeneratedAssignments] = useState([]);

  const subjects = [
    "Mathematics",
    "Science",
    "English",
    "History",
    
  ];

  const grades = [
    "Elementary (K-5)",
    "Middle School (6-8)",
    "High School (9-12)",
    "College",
  ];

  const generateAssignment = () => {
    if (!subject) {
      alert("Please select a subject first!");
      return;
    }

    const allAssignments = [
      // Mathematics
      {
        subject: "Mathematics",
        type: "Multiple Choice",
        question: `Solve the equation for x: ${Math.floor(
          Math.random() * 10
        )}x + ${Math.floor(Math.random() * 5)} = ${Math.floor(
          Math.random() * 20
        )}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
      },
      {
        subject: "Mathematics",
        type: "Multiple Choice",
        question: "Solve for y: 2y + 3 = 15",
        options: ["5", "7", "9", "11"],
      },
      {
        subject: "Mathematics",
        type: "Problem Solving",
        question:
          "Calculate the total cost of 5 items, each priced at $7.99, including a 6% sales tax.",
      },

      // Science
      {
        subject: "Science",
        type: "Multiple Choice",
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Go", "Gl"],
      },
      {
        subject: "Science",
        type: "Short Answer",
        question:
          "Explain the greenhouse effect and its impact on climate change.",
      },
      {
        subject: "Science",
        type: "Problem Solving",
        question:
          "Develop a recycling plan for your school that reduces waste by 20%.",
      },

      // English
      {
        subject: "English",
        type: "Multiple Choice",
        question:
          "Identify the subject in the sentence: 'The cat sat on the mat.'",
        options: ["The cat", "sat", "on the mat", "the mat"],
      },
      {
        subject: "English",
        type: "Short Answer",
        question: "Write a summary of a recent book you read.",
      },
      {
        subject: "English",
        type: "Problem Solving",
        question:
          "Compose a story starting with: 'The sky was unusually red that evening…'",
      },

      // History
      {
        subject: "History",
        type: "Multiple Choice",
        question: "Who was the first President of the United States?",
        options: [
          "George Washington",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John Adams",
        ],
      },
      {
        subject: "History",
        type: "Short Answer",
        question:
          "Describe the importance of the Magna Carta in shaping democracy.",
      },
      {
        subject: "History",
        type: "Problem Solving",
        question:
          "Create a timeline of events leading to the American Civil War.",
      },

      // Computer Science
      {
        subject: "Computer Science",
        type: "Multiple Choice",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Transfer Machine Learning",
          "Human Text Machine Language",
          "Hyper Transfer Mail Language",
        ],
      },
      {
        subject: "Computer Science",
        type: "Short Answer",
        question: "Describe the concept of recursion with an example.",
      },
      {
        subject: "Computer Science",
        type: "Problem Solving",
        question: "Design a simple website layout using HTML and CSS.",
      },
    ];

    // Filter assignments based on the selected subject
    const filteredAssignments = allAssignments.filter(
      (assignment) => assignment.subject === subject
    );

    // Set the generated assignments to only those matching the subject
    setGeneratedAssignments(filteredAssignments);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-indigo-900 mb-2">
          TeacheAble AI
        </h1>
        <p className="text-xl font-light text-center text-indigo-700 mb-8">
          Teaching made easier and more able with AI!
        </p>
        <div className="bg-white shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-3xl">
          <div className="space-y-6">
            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Subject
              </label>
              <div className="relative">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-700"
                >
                  <option value="">Choose a Subject</option>
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Grade Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Grade Level
              </label>
              <div className="relative">
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-700"
                >
                  <option value="">Choose a Grade Level</option>
                  {grades.map((gr) => (
                    <option key={gr} value={gr}>
                      {gr}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Learning Objective */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Objective
              </label>
              <textarea
                value={learningObjective}
                onChange={(e) => setLearningObjective(e.target.value)}
                placeholder="Enter specific learning objective"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-32 resize-none text-gray-700"
              />
            </div>

            {/* Difficulty Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="relative">
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none text-gray-700"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateAssignment}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105"
            >
              Generate Assignment
            </button>
          </div>

          {/* Generated Assignments Table */}
          {generatedAssignments.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-indigo-900 mb-6">
                Generated Assignments
              </h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="w-full border-collapse">
                  <thead className="bg-indigo-100 text-indigo-800">
                    <tr>
                      <th className="py-4 px-6 text-left">Type</th>
                      <th className="py-4 px-6 text-left">Question</th>
                      <th className="py-4 px-6 text-left">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generatedAssignments.map((assignment, index) => (
                      <tr
                        key={index}
                        className={`border-t ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="py-4 px-6">{assignment.type}</td>
                        <td className="py-4 px-6">{assignment.question}</td>
                        <td className="py-4 px-6">
                          {assignment.options
                            ? assignment.options.join(", ")
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
