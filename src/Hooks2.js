import React, { useState } from 'react';

const Hooks2=()=> {
const [students, setStudents] = useState([
    {id: 1,name: 'Bhargav1',age: 11,studying: '1st',},
    {id: 2,name: 'Bhargav2',age: 12,studying: '3rd',},
    {id: 3,name: 'Bhargav3',age: 13, studying: '5th',},]);

    const updateAll = () => {
        setStudents(students.map(student =>Object.assign({}, student, { age: 25, studying: "Degree" })));
        };

return (
    <div>
        <h1>Students List</h1>
        {students.map((student) => (
            <div id={student.id}> 
            {student.name} ,Age: {student.age},Studying: {student.studying}
            </div>
        ))}
        <br/>
        <button onClick={updateAll}>Update Age,Studying</button>
    </div>
    );
}
export default Hooks2;