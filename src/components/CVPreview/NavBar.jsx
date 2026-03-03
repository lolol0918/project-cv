// NavBar.jsx
export default function NavBar({ tab, setTab }) {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-800">📄 CV Builder</span>
                <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                    Harvard OCS Template
                </span>
            </div>
        </div>
    );
}