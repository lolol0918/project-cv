// NavBar.jsx
import { exportToPDF } from "../../helpers/pdfHelpers";

export default function NavBar({ data }) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-gray-800">📄 CV Builder</span>
        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
          Harvard OCS Template
        </span>
      </div>
      <button
        onClick={() => {
          const cvNode = document.getElementById("cv-container");

          if (cvNode) {
            const first = data?.firstName?.trim() || "";
            const last = data?.lastName?.trim() || "";

            let fileName = "My-CV.pdf";

            if (first || last) {
              fileName =
                `${first}-${last}-CV`
                  .replace(/\s+/g, "-")
                  .replace(/-+/g, "-")
                  .replace(/^-|-$/g, "") + ".pdf";
            }

            exportToPDF(cvNode, fileName);
          } else {
            console.warn("CV element not found!");
          }
        }}
        className="px-4 py-1.5 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm font-medium"
      >
        Download PDF
      </button>
    </div>
  );
}
