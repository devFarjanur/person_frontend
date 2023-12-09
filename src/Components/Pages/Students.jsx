import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Student = ({ student }) => {
    const { _id, name, address } = student;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/student/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // Delay for 2 seconds before reloading the website
                            setTimeout(() => {
                                window.location.reload();
                            }, 4000); // Adjust the delay time as needed
                        }
                    })


            }
        });
    }

    return (

        <div className="items-center justify-center bg-[#353b48]">
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center columns-3">

                    <p>{name}</p>
                    <p>{address}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/student/updateStudent/${_id}`}>
                            <button
                                className="btn btn-primary">Edit
                            </button>
                        </Link>

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-primary">Delete
                        </button>
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
                    <Student key={student._id} student={student}></Student>
                ))}

            </div>
        </div>
    );
};

export default Students;
