import React, { useMemo, useState } from "react";
import Wordcard from "./Wordcard";
import Wordcarddata from "./Wordcarddata";
import "./projects-panel.css";

const uniqueCategories = (data) => {
    const cats = new Set();
    data.forEach((p) => cats.add(p.category || "Other"));
    return ["All", ...Array.from(cats)];
};

const ProjectsPanel = () => {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [internshipsFirst, setInternshipsFirst] = useState(true);

    const categories = useMemo(() => uniqueCategories(Wordcarddata), []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = Wordcarddata.filter((p) => {
            if (activeCategory !== "All" && (p.category || "Other") !== activeCategory)
                return false;
            if (!q) return true;
            return (
                p.title.toLowerCase().includes(q) ||
                p.info.toLowerCase().includes(q) ||
                (p.category || "").toLowerCase().includes(q) ||
                (p.tech || []).some((t) => t.toLowerCase().includes(q))
            );
        });

        list = list.sort((a, b) => {
            const pa = a.priority || 999;
            const pb = b.priority || 999;
            if (internshipsFirst) {
                const ia = (a.category || "").toLowerCase() === "internship" ? -1 : 0;
                const ib = (b.category || "").toLowerCase() === "internship" ? -1 : 0;
                if (ia !== ib) return ib - ia;
            }
            return pa - pb;
        });

        return list;
    }, [query, activeCategory, internshipsFirst]);

    return (
        <section className="projects-panel">
            <div className="projects-controls">
                <div className="search-wrap">
                    <input
                        aria-label="Search projects"
                        className="projects-search"
                        placeholder="Search by title, tech or category"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="projects-actions">
                    <div className="chips" role="tablist" aria-label="Filter by category">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`chip ${activeCategory === cat ? "active" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <label className="internship-toggle">
                        <input
                            type="checkbox"
                            checked={internshipsFirst}
                            onChange={() => setInternshipsFirst((v) => !v)}
                        />
                        <span>Show internships first</span>
                    </label>
                </div>
            </div>

            <div className="projects-count" style={{ marginTop: "1rem", alignItem: 'center', textAlign: 'center' }}>Showing {filtered.length} project(s)</div>

            <Wordcard projects={filtered} />
        </section>
    );
};

export default ProjectsPanel;
