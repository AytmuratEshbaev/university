import './Course.scss';

const Course = () => {
    return (
        <div className="course">
            <div className="course__info">
                <p className="course__type">Ekonomika</p>
                <h4 className="course__name">Ekonometriya</h4>
            </div>
            <div className="course__img">
                <img src="./images/course.png" alt="course" className="course__logo" />
            </div>
        </div>
    )
}

export default Course;