import { Link } from "react-router";

export default function Page404() {
    return (
        <main className="w-full flex flex-col justify-center items-center bg-slate-50 mt-10">
            <h1 className="text-9xl font-extrabold text-blue-950 tracking-widest">404</h1>
            <div className="bg-blue-500 text-white px-2 text-sm rounded rotate-12 relative -top-10">
                Page Not Found
            </div>
            <Link to={"/"} className="mt-5 px-8 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-bold">
                Go Home
            </Link>
            
        </main>
    );
}