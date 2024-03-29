import React,{useState} from 'react'
import { Button } from './Button'
import CourseCard from './CourseCard'

const CoursePlanner = () => {

  const [courseData, setterCourseData] = useState([])  

  const onClickHandler = ()=>{

    // Extract the value of course name
    const courseName = document.getElementById("course-name").value;

    // Extract the value of hours
    const courseHour = document.getElementById("course-hours").value;

    // create a object out of it
    const newCourseData = {
        name : courseName,
        hour : parseInt(courseHour)
    }

    // inside courseData push the object created above
    // const data = JSON.parse(JSON.stringify(courseData))
    // data.push(newCourseData)
    // setterCourseData(data);
    const dataToUpdate = [...courseData, newCourseData]; // [1, 2]
    setterCourseData(dataToUpdate);
  }  

  return (
    <>
        <div style={{textAlign: 'center'}}>
            <h1>Plan Your Course</h1>
            <div style={{display: "flex", justifyContent: 'center', gap: "10px"}}>
                <input id='course-name' type='text' placeholder='Whiter your Topic'/>
                <input id='course-hours' type='number'placeholder='Hours to be taken'/>
                <Button onClick={onClickHandler} fontColor="#FFFFFF" backgroundKaColor="#000000" borderKaRadius="8px">Add</Button>
            </div>
            {courseData.map((course, index)=>(
                <CourseCard name={course.name} hour={course.hour} key={index}/>
            ))}
        </div>
    </>
  )
}

export default CoursePlanner;
