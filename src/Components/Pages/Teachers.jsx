import { useLoaderData } from "react-router-dom";

const Teacher = ({ teacher }) => {
    const { id, name } = teacher;

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

const Teachers = () => {
    const teachers = useLoaderData();

    return (
        <div className="bg-[#353b48]">
            <div>
                <h2 className="text-center text-neutral-content text-3xl py-6">Teacher Details</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-6">
                {teachers.map((teacher) => (
                    <Teacher key={teacher.id} teacher={teacher}></Teacher>
                ))}
            </div>
        </div>
    );
};

export default Teachers;
