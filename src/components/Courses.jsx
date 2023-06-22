import CourseOverview from "./courses/CourseOverview";

const courseList = ['frontend101', 'postgresql101', 'reactjs101', 'python101', 'django102', 'mongodb101', 'mysql101', 'c101' ];

const Courses = () => {
  return (
    <section className="section-courses">
      {
        courseList.map((course, index) => {
          return (
          <CourseOverview key={index} course={course} />
          )
        })
      }
    </section>
  )
}

export default Courses;
