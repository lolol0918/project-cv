import { useState } from "react";

export default function CollapsibleSection({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-left font-semibold text-gray-700 text-sm transition"
            >
                {title}
                <span className="text-gray-400 text-lg leading-none">{open ? "−" : "+"}</span>
            </button>
            {open && <div className="p-4 flex flex-col gap-3">{children}</div>}
        </div>
    );
}