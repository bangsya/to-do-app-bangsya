import Button from "./Button";


export default function FormInput({action = ""}) {
    return (
        <form action={action} className="mt-4 lg:w-1/2 mx-auto">
            <label 
                htmlFor="task-name"
                className="block font-bold text-blue-700">Task Name</label>
            <input 
                type="text"
                id="task-name"
                placeholder="Task Name"
                className="border border-gray-300 p-2 rounded w-full mt-1 mb-4" />
            <label 
                htmlFor="task-description"
                className="block font-bold text-blue-700">Description</label>
            <textarea
                id="task-description"
                placeholder="Task Description"
                className="border border-gray-300 p-2 rounded w-full mt-1 mb-7"
            ></textarea>
            <Button label="Add Todo" onClick={(e) => {
                e.preventDefault();
            }} color="bg-blue-200" textColor="text-blue-700" width="w-full" />
        </form>
    );
}