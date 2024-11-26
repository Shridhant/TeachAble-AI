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
    "Computer Science",
  ];

  const grades = [
    "Elementary (K-5)",
    "Middle School (6-8)",
    "High School (9-12)",
    "College",
  ];

  const generateAssignment = () => {
    // Simulated AI assignment generation
    const newAssignments = [
      {
        type: "Multiple Choice",
        question: `Solve the equation for x: ${Math.floor(
          Math.random() * 10
        )}x + ${Math.floor(Math.random() * 5)} = ${Math.floor(
          Math.random() * 20
        )}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
      },
      {
        type: "Short Answer",
        question: `Describe the key characteristics of ${subject} in the context of ${learningObjective}`,
      },
      {
        type: "Problem Solving",
        question: `Create a detailed solution to a real-world problem related to ${subject}`,
      },
    ];

    setGeneratedAssignments(newAssignments);
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
              className="w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105  "
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
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider">
                        Question
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider">
                        Options/Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-100">
                    {generatedAssignments.map((assignment, index) => (
                      <tr
                        key={index}
                        className="hover:bg-indigo-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">
                          {assignment.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {assignment.question}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {assignment.options
                            ? assignment.options.join(", ")
                            : "Requires detailed response"}
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
