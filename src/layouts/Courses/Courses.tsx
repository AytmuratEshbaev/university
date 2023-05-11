import Course from "../../components/Course";
import './Courses.scss';

const Courses = () => {
    return (
        <div className="courses-section container">
            <h3 className="title">Kurslar</h3>
            <ul className="tabs">
                <li className="active">Ekonomika</li>
                <li>Matematika</li>
                <li>Ximiya texnologıya</li>
                <li>Filologıya</li>
                <li>Fizika</li>
            </ul>
            <div className="tab__content">
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    )
}

export default Courses;