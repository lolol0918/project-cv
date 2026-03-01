export default function SkillRow({ label, value }) {
    return (
        <p style={{ fontSize: "10pt" }} className="ml-2">
            <strong>{label}:</strong> {value}
        </p>
    );
}