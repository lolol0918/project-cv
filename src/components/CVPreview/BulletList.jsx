export default function BulletList({ items }) {
    if (!items || items.length === 0) return null;
    return (
        <ul className="ml-5 mt-0.5" style={{ listStyleType: "disc", fontSize: "10pt" }}>
            {items.filter((i) => i.trim()).map((item, i) => (
                <li key={i} className="mb-0.5">{item}</li>
            ))}
        </ul>
    );
}