export default function Section({ title, children }) {
    return (
        <div className="mb-2">
            <h2
                className="text-gray-900 border-b border-gray-900 mb-1"
                style={{ fontSize: "11.5pt", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.07em" }}
            >
                {title}
            </h2>
            {children}
        </div>
    );
}