import Section from "./Section";
import TwoCol from "./TwoCol";
import BulletList from "./BulletList";
import SkillRow from "./SkillRow";

export default function CVPreview({ data }) {
    return (
        <div
            className="bg-white text-gray-900 font-serif"
            style={{ fontFamily: "'Georgia', serif", fontSize: "11pt", lineHeight: 1.35 }}
        >
            {/* Header */}
            <div className="text-center mb-2 border-b-2 border-gray-900 pb-2">
                <h1
                    style={{ fontSize: "17pt", fontWeight: "bold", letterSpacing: "0.04em", marginBottom: 2 }}
                >
                    {data.firstName} {data.lastName}
                </h1>
                <p style={{ fontSize: "9.5pt" }} className="text-gray-700">
                    {[data.address, data.city, data.email, data.phone].filter(Boolean).join(" • ")}
                </p>
            </div>

            {/* Education */}
            <Section title="Education">
                {data.education.map((edu) => (
                    <div key={edu.id} className="mb-1.5">
                        <TwoCol left={<strong>{edu.institution}</strong>} right={<em>{edu.location}</em>} />
                        {edu.degree && <TwoCol left={edu.degree} right={edu.graduationDate} indent />}
                        {edu.thesis && (
                            <p className="ml-1 text-gray-700" style={{ fontSize: "10pt" }}>
                                Thesis: {edu.thesis}
                            </p>
                        )}
                        {edu.coursework && (
                            <p className="ml-1 text-gray-700" style={{ fontSize: "10pt" }}>
                                Relevant Coursework: {edu.coursework}
                            </p>
                        )}
                    </div>
                ))}
            </Section>

            {/* Experience */}
            <Section title="Experience">
                {data.experience.map((exp) => (
                    <div key={exp.id} className="mb-2">
                        <TwoCol left={<strong>{exp.organization}</strong>} right={<em>{exp.location}</em>} />
                        <TwoCol left={<em>{exp.title}</em>} right={<span>{exp.dates}</span>} indent />
                        <BulletList items={exp.bullets} />
                    </div>
                ))}
            </Section>

            {/* Leadership */}
            {data.leadership.length > 0 && (
                <Section title="Leadership & Activities">
                    {data.leadership.map((lead) => (
                        <div key={lead.id} className="mb-2">
                            <TwoCol left={<strong>{lead.organization}</strong>} right={<em>{lead.location}</em>} />
                            <TwoCol left={<em>{lead.role}</em>} right={<span>{lead.dates}</span>} indent />
                            <BulletList items={lead.bullets} />
                        </div>
                    ))}
                </Section>
            )}

            {/* Skills */}
            {(data.skills.technical || data.skills.language || data.skills.laboratory || data.skills.interests) && (
                <Section title="Skills & Interests">
                    {data.skills.technical && <SkillRow label="Technical" value={data.skills.technical} />}
                    {data.skills.language && <SkillRow label="Language" value={data.skills.language} />}
                    {data.skills.laboratory && <SkillRow label="Laboratory" value={data.skills.laboratory} />}
                    {data.skills.interests && <SkillRow label="Interests" value={data.skills.interests} />}
                </Section>
            )}
        </div>
    );
}