import Swal from 'sweetalert2'

import { Link, useLoaderData } from "react-router-dom";

const Teacher = ({ teacher }) => {
    const { _id, name, address } = teacher;

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
                fetch(`http://localhost:5000/teacher/${_id}`, {
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

                    <p className='text-3xl'>{name}</p>
                    <p className='text-3xl'>{address}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/teacher/updateTeacher/${_id}`}>
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

const Teachers = () => {
    const teachers = useLoaderData();

    return (
        <div className="bg-[#353b48]">
            <div>
                <h2 className="text-center text-neutral-content text-3xl py-6">Teacher Details</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-6">
                {teachers.map((teacher) => (
                    <Teacher key={teacher._id} teacher={teacher}></Teacher>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
