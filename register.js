// Select Course Type Dropdown and check for change
const courseType = document.querySelector("#coursetype");
const courses = document.querySelector("#courses");
const shortCourses = [
	"Microsoft SQL Server Database Administration (₵ 995)",
	"Linux Administration (₵ 995)",
	"Digital Marketing (₵ 900)",
	"Information Security and Ethical Hacking (₵ 995)",
	"Certificate in Software Development (₵ 1500)",
	"Introduction to Web Programming (₵ 900)",
	"Computer Networking Fundamentals - CCNA (₵ 995)",
	"Phone and Laptop Repairs (₵ 1000)",
	"Mobile Application Development (₵ 1000)",
	"Oracle Database Administration (₵ 995)",
	"Introduction to Microsoft Office Suite (₵ 750)",
	"Certificate in Information Systems Audit (₵ 995)",
	"Data Science (₵ 1500)",
];
const degreeCourses = ["Computer Science", "Information Technology"];
const MPhil = ["MPhil Computer Science", "MSC Computer Science", "MPhil 3"];

// Populate with short courses first
(() => {
	shortCourses.forEach((course) => {
		let newElm = document.createElement("option");
		newElm.value = course;
		newElm.textContent = course;
		courses.appendChild(newElm);
	});
})();

courseType.addEventListener("change", () => {
	// alert(courseType.textContent);
	console.log(courseType.value);
	switch (courseType.value) {
		case "short":
			setCourse(shortCourses);
			break;
		case "degree":
			setCourse(degreeCourses);
			break;
		case "mphil":
			setCourse(MPhil);
		default:
			break;
	}
});

function setCourse(coursesArray) {
	Array.from(courses).forEach((option) => {
		courses.removeChild(option);
	});
	coursesArray.forEach((course) => {
		let newElm = document.createElement("option");
		newElm.value = course;
		newElm.textContent = course;
		courses.appendChild(newElm);
	});
}
