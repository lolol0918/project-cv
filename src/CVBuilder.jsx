import { useState } from "react";
import { defaultData } from "./data/defaultData";
import EditorPanel from "./components/CVPreview/EditorPanel";
import CVPreview from "./components/CVPreview/CVPreview";
import * as helpers from "./helpers/cvHelpers";

export default function CVBuilder() {
    const [data, setData] = useState(defaultData);

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

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <EditorPanel data={data} helpers={boundHelpers} />
            <div className="flex-1 p-6 flex justify-center bg-gray-200 overflow-y-auto">
                <div
                    className="bg-white shadow-xl"
                    style={{
                        width: "8.5in",
                        minHeight: "11in",
                        padding: "0.75in 1in",
                        boxSizing: "border-box",
                    }}
                >
                    <CVPreview data={data} />
                </div>
            </div>
        </div>
    );
}