import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function exportToPDF(domNode, filename) {
    html2canvas(domNode, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(filename);
    });
}