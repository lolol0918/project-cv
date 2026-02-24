import React from "react";

export default function PreviewPanel() {
    return (
        <div className="w-1/2 overflow-y-auto p-10 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">CV Preview</h2>
            {/* Static Harvard-style CV content can go here */}
            <div className="bg-white p-6 shadow-lg">
                <h1 className="text-2xl font-bold mb-2">John Doe</h1>
                <p className="mb-1">Email: john.doe@example.com</p>
                <p className="mb-1">Phone: +1 234 567 890</p>
                <h3 className="font-semibold mt-4">Education</h3>
                <p>Harvard University, BSc Computer Science, 2020–2024</p>
                <h3 className="font-semibold mt-4">Experience</h3>
                <p>Software Intern at Company XYZ, Summer 2023</p>
            </div>
        </div>
    );
}