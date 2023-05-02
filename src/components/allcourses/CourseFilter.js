// CourseFilter.js
import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css";
import "./filter.css";

const CourseFilter = ({ filters, handleFilterChange }) => {
    const teacherOptions = Array.from(
        new Set(coursesCard.flatMap((course) =>
            course.courTeacher.map((teacher) => teacher.name)
        ))
    );
    const priceOptions = Array.from(new Set(coursesCard.map((course) => course.priceAll)));

    return (
        <div className="course-filter">
            <h3>Filtrer par :</h3>
            <div className="filterBox">
                <div className="filter-group">
                    <h4>Professeur</h4>
                    {teacherOptions.map((teacher) => (
                        <div key={teacher}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="teacher"
                                    value={teacher}
                                    checked={filters.teachers.find((t) => t.name === teacher)?.checked || false}
                                    onChange={() => handleFilterChange("teachers", teacher)}
                                />
                                {teacher}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="filter-group">
                    <h4>Prix</h4>
                    {priceOptions.map((price, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="price"
                                    value={price}
                                    checked={filters.prices.find((p) => p.id === index.toString())?.checked || false}
                                    onChange={() => handleFilterChange("prices", index.toString())}
                                />
                                {price}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseFilter;
