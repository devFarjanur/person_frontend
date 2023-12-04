import { useLoaderData } from "react-router-dom";

const Student = ({ student }) => {
    const { id, name } = student;

    return (

        <div className="items-center justify-center bg-[#353b48]">
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center columns-3">
                    <p>{id}</p>
                    <p>{name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

const Students = () => {

    const students = useLoaderData();
    console.log('Students:', students);

    return (
        <div className="bg-[#353b48]">
            <div>
                <h2 className="text-center text-neutral-content text-3xl py-6">Student Details</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-6">

                {students.map(student => (
                    <Student key={student.id} student={student}></Student>
                ))}

            </div>
        </div>
    );
};

export default Students;
