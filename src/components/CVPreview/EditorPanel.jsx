import Field from "../Field";
import CollapsibleSection from "../CollapsibleSection";
import BulletsEditor from "../BulletsEditor";

export default function EditorPanel({ data, setData, helpers }) {
    const { set, updateEdu, addEdu, removeEdu, updateExp, addExp, removeExp, updateLead, addLead, removeLead } = helpers;

    return (
        <div className="w-full">
            <CollapsibleSection title="Personal Information" defaultOpen>
                <Field label="First Name" value={data.firstName} onChange={(v) => set("firstName", v)} />
                <Field label="Last Name" value={data.lastName} onChange={(v) => set("lastName", v)} />
                {/* More fields */}
            </CollapsibleSection>

            <CollapsibleSection title="Education" defaultOpen>
                {data.education.map((edu, idx) => (
                    <div key={edu.id} className="border p-2 rounded">
                        <Field label="Institution" value={edu.institution} onChange={(v) => updateEdu(edu.id, "institution", v)} />
                        <Field label="Location" value={edu.location} onChange={(v) => updateEdu(edu.id, "location", v)} />
                        {/* etc */}
                    </div>
                ))}
                <button onClick={addEdu}>+ Add Education</button>
            </CollapsibleSection>

            {/* Experience */}
            <CollapsibleSection title="Experience" defaultOpen>
                {data.experience.map((exp, idx) => (
                    <div key={exp.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Position {idx + 1}</span>
                            <button onClick={() => removeExp(exp.id)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Field label="Organization" value={exp.organization} onChange={(v) => updateExp(exp.id, "organization", v)} />
                            <Field label="Location" value={exp.location} onChange={(v) => updateExp(exp.id, "location", v)} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Field label="Title" value={exp.title} onChange={(v) => updateExp(exp.id, "title", v)} />
                            <Field label="Dates" value={exp.dates} onChange={(v) => updateExp(exp.id, "dates", v)} />
                        </div>
                        <BulletsEditor bullets={exp.bullets} onChange={(v) => updateExp(exp.id, "bullets", v)} />
                    </div>
                ))}
                <button onClick={addExp} className="text-sm text-indigo-500 hover:text-indigo-700 font-medium">+ Add Experience</button>
            </CollapsibleSection>

            {/* Leadership */}
            <CollapsibleSection title="Leadership & Activities">
                {data.leadership.map((lead, idx) => (
                    <div key={lead.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50 flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Entry {idx + 1}</span>
                            <button onClick={() => removeLead(lead.id)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Field label="Organization" value={lead.organization} onChange={(v) => updateLead(lead.id, "organization", v)} />
                            <Field label="Location" value={lead.location} onChange={(v) => updateLead(lead.id, "location", v)} />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <Field label="Role" value={lead.role} onChange={(v) => updateLead(lead.id, "role", v)} />
                            <Field label="Dates" value={lead.dates} onChange={(v) => updateLead(lead.id, "dates", v)} />
                        </div>
                        <BulletsEditor bullets={lead.bullets} onChange={(v) => updateLead(lead.id, "bullets", v)} />
                    </div>
                ))}
                <button onClick={addLead} className="text-sm text-indigo-500 hover:text-indigo-700 font-medium">+ Add Activity</button>
            </CollapsibleSection>

            {/* Skills */}
            <CollapsibleSection title="Skills & Interests">
                <Field
                    label="Technical"
                    value={data.skills.technical}
                    onChange={(v) => set("skills", { ...data.skills, technical: v })}
                    placeholder="Software, programming languages..."
                />
                <Field
                    label="Language"
                    value={data.skills.language}
                    onChange={(v) => set("skills", { ...data.skills, language: v })}
                    placeholder="Languages and proficiency levels..."
                />
                <Field
                    label="Laboratory (optional)"
                    value={data.skills.laboratory}
                    onChange={(v) => set("skills", { ...data.skills, laboratory: v })}
                    placeholder="Lab techniques or tools..."
                />
                <Field
                    label="Interests"
                    value={data.skills.interests}
                    onChange={(v) => set("skills", { ...data.skills, interests: v })}
                    placeholder="Hobbies and interests..."
                />
            </CollapsibleSection>
        </div>
    );
}