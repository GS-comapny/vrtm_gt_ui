import { NavLink } from "react-router-dom";

export default function ConnectButton() {
    

    return (
       <NavLink to='/contact-form'>
        <div className="flex flex-row text-white items-center">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-md">Let's Connect</button>
          </div>  
       </NavLink>
    );
}
