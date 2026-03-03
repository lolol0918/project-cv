import { useState, useRef, useEffect } from "react";
import { exportToPDF } from "./helpers/pdfHelpers";
import { defaultData } from "./data/defaultData";
import EditorPanel from "./components/CVPreview/EditorPanel";
import CVPreview from "./components/CVPreview/CVPreview";
import NavBar from "./components/CVPreview/NavBar";
import * as helpers from "./helpers/cvHelpers";

export default function CVBuilder() {
    const [data, setData] = useState(defaultData);

    const previewRef = useRef(null);

    useEffect(() => {
        const updateScale = () => {
            const el = previewRef.current;
            if (!el) return;

            const container = el.parentElement;
            const containerWidth = container.offsetWidth - 48;
            const cvWidthPx = 8.5 * 96;

            const scale = Math.min(1, containerWidth / cvWidthPx);
            el.style.transform = `scale(${scale})`;

            // Collapse the extra space left behind by scaling
            const naturalHeight = el.offsetHeight;
            container.style.minHeight = `${naturalHeight * scale}px`;
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);



    const boundHelpers = {
        set: (key, val) => setData((d) => ({ ...d, [key]: val })),
        updateEdu: helpers.updateEdu(data, setData),
        addEdu: helpers.addEdu(data, setData),
        removeEdu: helpers.removeEdu(data, setData),
        updateExp: helpers.updateExp(data, setData),
        addExp: helpers.addExp(data, setData),
        removeExp: helpers.removeExp(data, setData),
        updateLead: helpers.updateLead(data, setData),
        addLead: helpers.addLead(data, setData),
        removeLead: helpers.removeLead(data, setData),
    };

    const cvRef = useRef();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* Navbar */}
            <NavBar cvRef={cvRef} />
            {/* Main content */}
            <div className="flex flex-col lg:flex-row flex-1">

                {/* Editor */}
                <div className="w-full lg:w-1/2 p-5 overflow-y-auto">
                    <EditorPanel data={data} helpers={boundHelpers} />
                </div>

                {/* Preview */}
                <div className="w-full lg:w-1/2 p-6 flex justify-center bg-gray-200 overflow-hidden" >
                    <div className="flex justify-center items-start w-full">
                        <div
                            id="cv-container"
                            style={{
                                width: "8.5in",
                                minHeight: "11in",
                                padding: "0.75in 1in",
                                boxSizing: "border-box",
                                backgroundColor: "white",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                                flexShrink: 0,
                                transformOrigin: "top center",
                                transform: `scale(var(--cv-scale, 1))`,
                            }}
                            ref={previewRef}
                        >
                            <CVPreview data={data} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}