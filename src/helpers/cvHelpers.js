// src/helpers/cvHelpers.js

// ─── Education ──────────────────────────────────────────────────────────────
export const updateEdu = (data, setData) => (id, field, value) => {
    setData({
        ...data,
        education: data.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    });
};

export const addEdu = (data, setData) => () => {
    setData({
        ...data,
        education: [
            ...data.education,
            { id: Date.now(), institution: "", location: "", degree: "", graduationDate: "", thesis: "", coursework: "" },
        ],
    });
};

export const removeEdu = (data, setData) => (id) => {
    setData({
        ...data,
        education: data.education.filter((e) => e.id !== id),
    });
};

// ─── Experience ─────────────────────────────────────────────────────────────
export const updateExp = (data, setData) => (id, field, value) => {
    setData({
        ...data,
        experience: data.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    });
};

export const addExp = (data, setData) => () => {
    setData({
        ...data,
        experience: [
            ...data.experience,
            { id: Date.now(), organization: "", location: "", title: "", dates: "", bullets: [""] },
        ],
    });
};

export const removeExp = (data, setData) => (id) => {
    setData({
        ...data,
        experience: data.experience.filter((e) => e.id !== id),
    });
};

// ─── Leadership ─────────────────────────────────────────────────────────────
export const updateLead = (data, setData) => (id, field, value) => {
    setData({
        ...data,
        leadership: data.leadership.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    });
};

export const addLead = (data, setData) => () => {
    setData({
        ...data,
        leadership: [
            ...data.leadership,
            { id: Date.now(), organization: "", location: "", role: "", dates: "", bullets: [""] },
        ],
    });
};

export const removeLead = (data, setData) => (id) => {
    setData({
        ...data,
        leadership: data.leadership.filter((e) => e.id !== id),
    });
};