export default function TwoCol({ left, right, indent }) {
    return (
        <div
            className={`flex justify-between ${indent ? "ml-2" : ""}`}
            style={{ fontSize: "10.5pt" }}
        >
            <span>{left}</span>
            <span className="text-right flex-shrink-0 ml-2">{right}</span>
        </div>
    );
}