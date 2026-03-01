export default function Field({ label, value, onChange, placeholder, multiline }) {
    const base = "w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-400 bg-white transition";
    return (
        <div className="flex flex-col gap-0.5">
            {label && <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</label>}
            {multiline ? (
                <textarea className={`${base} resize-none`} rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
            ) : (
                <input className={base} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
            )}
        </div>
    );
}