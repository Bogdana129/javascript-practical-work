
const courses = [
    { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
    { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
    { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
    { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
    { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 }
];

console.log("ЗАВДАННЯ 2 — КАТАЛОГ КУРСІВ");

// 1. Курси категорії Programming
const programmingCourses = courses.filter(
    course => course.category === "Programming"
);
console.log("Курси Programming:", programmingCourses);

// 2. Назви курсів із цінами
const coursePrices = courses.map(
    course => `${course.title} — ${course.price} грн`
);
console.log("Назви та ціни:", coursePrices);

// 3. Пошук курсу з id = 4
const foundCourse = courses.find(course => course.id === 4);
console.log("Курс з ID 4:", foundCourse);

// 4. Сортування за кількістю студентів
const sortedCourses = [...courses].sort(
    (a, b) => b.students - a.students
);
console.log("Сортування за студентами:", sortedCourses);

// 5. Середня ціна курсів
function calculateAveragePrice(courses) {
    let total = 0;

    for (const course of courses) {
        total += course.price;
    }

    return total / courses.length;
}

console.log("Середня ціна:", calculateAveragePrice(courses), "грн");
