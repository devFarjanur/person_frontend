

const Student = () => {


    const handleAddStudent = event => {
        event.preventDefault();

        const form = event.target;
        const id = form.id.value;
        const name = form.name.value;

        const addStudent = { id, name };

        console.log(addStudent);


        // send data to the server 

        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addStudent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleAddStudent}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student ID</span>
                                </label>
                                <input type="text" name="id" placeholder="Student ID" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Student Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Student Name" className="input input-bordered text-white" required />

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

export default Student;