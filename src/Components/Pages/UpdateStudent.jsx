import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";



const UpdateStudent = () => {


    const student = useLoaderData()

    const { _id, name, address } = student;

    const handleUpdateStudent = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;

        const updatedStudent = { name, address };

        console.log(updatedStudent);

        fetch(`http://localhost:5000/student/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStudent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Student update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // Delay for 2 seconds before reloading the website
                    setTimeout(() => {
                        window.location.reload();
                    }, 4000); // Adjust the delay time as needed
                }

            })


    }



    return (

        <div>
            <div>
                <h1 className="text-white text-3xl bg-base-200">Update student: {name}</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleUpdateStudent}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Student Name" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student Address</span>
                                </label>
                                <input type="text" name="address" defaultValue={address} placeholder="Student Address" className="input input-bordered text-white" required />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudent;