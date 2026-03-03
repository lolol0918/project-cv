export default function Section({ title, children }) {
    return (
        <div className="mb-2">
            <h2
                className="text-gray-900 mb-1 relative"
                style={{
                    fontSize: "11.5pt",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    lineHeight: 1.5, // gives the line more space
                }}
            >
                {title}
                {/* pseudo-line */}
                <span
                    className="absolute left-0 bottom-0 w-full border-b border-gray-900"
                    style={{ transform: "translateY(0.25em)" }} // moves line down slightly
                />
            </h2>
            {children}
        </div>
    );
}