import { Link } from "react-router";

export default function ItemNav({name, to}){
    return (
        <li className="p-3 md:p-0 md:ml-4 font-medium lg:px-3"><Link to={to} className="hover:text-blue-500">{name}</Link></li>
    );
}