import { useLoaderData } from "react-router-dom";


const UpdateTeacher = () => {

    const teacher = useLoaderData();

    const { _id, name, address } = teacher;

    return (
        <div>
            <div>
            <h1 className="text-white text-3xl bg-base-200">Update student: {name}</h1>
            </div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Teacher Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Teacher Name" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Teacher Address</span>
                                </label>
                                <input type="text" name="address" defaultValue={address} placeholder="Teacher Address" className="input input-bordered text-white" required />

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

export default UpdateTeacher;