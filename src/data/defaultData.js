export const defaultData = {
    firstName: "Firstname",
    lastName: "Lastname",
    address: "Home or Campus Street Address",
    city: "City, State Zip",
    email: "youremail@college.harvard.edu",
    phone: "phone number",
    education: [
        { id: 1, institution: "Harvard University", location: "Cambridge, MA", degree: "Degree, Concentration. GPA [Optional]", graduationDate: "Graduation Date", thesis: "", coursework: "" },
        { id: 2, institution: "Study Abroad [If Applicable]", location: "City, Country", degree: "Study abroad coursework in ...", graduationDate: "Month Year – Month Year", thesis: "", coursework: "" },
    ],
    experience: [
        { id: 1, organization: "Organization", location: "City, State", title: "Position Title", dates: "Month Year – Month Year", bullets: ["Starting bullet...", "Second bullet..."] },
        { id: 2, organization: "Organization", location: "City, State", title: "Position Title", dates: "Month Year – Month Year", bullets: ["Another bullet..."] },
    ],
    leadership: [{ id: 1, organization: "Organization", location: "City, State", role: "Role", dates: "Month Year – Month Year", bullets: ["Leadership bullet..."] }],
    skills: { technical: "", language: "", laboratory: "", interests: "" },
};