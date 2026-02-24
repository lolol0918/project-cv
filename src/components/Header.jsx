import React from "react"

export default function Header({ onExportClick }) {
  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        {/* Export Button */}
        <div className="flex lg:flex-1 lg:justify-end">
          <button
            id="export-pdf"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            Export to PDF
          </button>
        </div>
      </nav>
    </header>
  )
}