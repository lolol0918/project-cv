import Field from "./Field";

export default function BulletsEditor({ bullets, onChange }) {
    const update = (i, val) => { const copy = [...bullets]; copy[i] = val; onChange(copy); };
    const add = () => onChange([...bullets, ""]);
    const remove = (i) => onChange(bullets.filter((_, idx) => idx !== i));

    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Bullet Points</label>
            {bullets.map((b, i) => (
                <div key={i} className="flex gap-1.5 items-start">
                    <textarea
                        className="flex-1 border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-indigo-400 resize-none"
                        rows={2}
                        value={b}
                        onChange={(e) => update(i, e.target.value)}
                        placeholder="Action verb + accomplishment..."
                    />
                    <button onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-lg mt-0.5 font-bold">×</button>
                </div>
            ))}
            <button onClick={add} className="text-xs text-indigo-500 hover:text-indigo-700 self-start font-medium mt-0.5">+ Add bullet</button>
        </div>
    );
}