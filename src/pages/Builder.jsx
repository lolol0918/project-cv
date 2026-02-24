import React from "react";
import Header from "../components/Header";
import FormPanel from "../components/FormPanel";
import PreviewPanel from "../components/PreviewPanel";

export default function Builder() {
    const handleExport = () => {
        console.log("Export to PDF clicked");
        // PDF logic will come here later
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header onExportClick={handleExport} />
            <div className="flex flex-1">
                <FormPanel />
                <PreviewPanel />
            </div>
        </div>
    );
}