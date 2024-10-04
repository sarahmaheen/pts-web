// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isPatientDropdownOpen, setPatientDropdownOpen] = useState(false);
//   const [isTherapyDropdownOpen, setTherapyDropdownOpen] = useState(false);

//   const togglePatientDropdown = () => {
//     setPatientDropdownOpen(!isPatientDropdownOpen);
//   };

//   const toggleTherapyDropdown = () => {
//     setTherapyDropdownOpen(!isTherapyDropdownOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="text-xl font-bold text-green-600 flex items-center">
//         <span className="mr-2 text-yellow-500">█ █ █</span> {/* Logo Color */}
//         Looza
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 items-center">
//         {/* Patient Dropdown */}
//         <li
//           className="relative group"
//           onMouseEnter={togglePatientDropdown}
//           onMouseLeave={togglePatientDropdown}
//         >
//           <button className="text-purple-500 hover:text-purple-600 font-semibold">
//             Patient
//           </button>
//           {/* Dropdown */}
//           {isPatientDropdownOpen && (
//             <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 group-hover:block">
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/add-patient" className="text-gray-700">
//                   Add Patient
//                 </Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/get-all-patients" className="text-gray-700">
//                   Get All Patients
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Therapy Dropdown */}
//         <li
//           className="relative group"
//           onMouseEnter={toggleTherapyDropdown}
//           onMouseLeave={toggleTherapyDropdown}
//         >
//           <button className="text-purple-500 hover:text-purple-600 font-semibold">
//             Therapy
//           </button>
//           {/* Dropdown */}
//           {isTherapyDropdownOpen && (
//             <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 group-hover:block">
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/add-therapy" className="text-gray-700">
//                   Add Therapy
//                 </Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/get-all-therapies" className="text-gray-700">
//                   Get All Therapies
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Therapist Dropdown */}
//         <li className="relative group">
//           <button className="text-purple-500 hover:text-purple-600 font-semibold">
//             Therapist
//           </button>
//           {/* Dropdown */}
//           <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 group-hover:block">
//             <li className="px-4 py-2 hover:bg-purple-100">
//               <Link to="/add-therapist" className="text-gray-700">
//                 Add Therapist
//               </Link>
//             </li>
//             <li className="px-4 py-2 hover:bg-purple-100">
//               <Link to="/get-all-therapists" className="text-gray-700">
//                 Get All Therapists
//               </Link>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;










































// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isPatientDropdownOpen, setPatientDropdownOpen] = useState(false);
//   const [isTherapyDropdownOpen, setTherapyDropdownOpen] = useState(false);
//   const [isTherapistDropdownOpen, setTherapistDropdownOpen] = useState(false);

//   const togglePatientDropdown = () => {
//     setPatientDropdownOpen(!isPatientDropdownOpen);
//   };

//   const toggleTherapyDropdown = () => {
//     setTherapyDropdownOpen(!isTherapyDropdownOpen);
//   };

//   const toggleTherapistDropdown = () => {
//     setTherapistDropdownOpen(!isTherapistDropdownOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="text-xl font-bold text-green-600 flex items-center">
//         <span className="mr-2 text-yellow-500">█ █ █</span> {/* Logo Color */}
//         Looza
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 items-center">
//         {/* Patient Dropdown */}
//         <li className="relative">
//           <button
//             onClick={togglePatientDropdown}
//             className="text-purple-500 hover:text-purple-600 font-semibold"
//           >
//             Patient
//           </button>
//           {/* Dropdown */}
//           {isPatientDropdownOpen && (
//             <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/add-patient" className="text-gray-700">
//                   Add Patient
//                 </Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/get-all-patients" className="text-gray-700">
//                   Get All Patients
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Therapy Dropdown */}
//         <li className="relative">
//           <button
//             onClick={toggleTherapyDropdown}
//             className="text-purple-500 hover:text-purple-600 font-semibold"
//           >
//             Therapy
//           </button>
//           {/* Dropdown */}
//           {isTherapyDropdownOpen && (
//             <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/add-therapy" className="text-gray-700">
//                   Add Therapy
//                 </Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/get-all-therapies" className="text-gray-700">
//                   Get All Therapies
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Therapist Dropdown */}
//         <li className="relative">
//           <button
//             onClick={toggleTherapistDropdown}
//             className="text-purple-500 hover:text-purple-600 font-semibold"
//           >
//             Therapist
//           </button>
//           {/* Dropdown */}
//           {isTherapistDropdownOpen && (
//             <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/add-therapist" className="text-gray-700">
//                   Add Therapist
//                 </Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-purple-100">
//                 <Link to="/get-all-therapists" className="text-gray-700">
//                   Get All Therapists
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;








import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isPatientDropdownOpen, setPatientDropdownOpen] = useState(false);
  const [isTherapyDropdownOpen, setTherapyDropdownOpen] = useState(false);
  const [isTherapistDropdownOpen, setTherapistDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const togglePatientDropdown = () => {
    setPatientDropdownOpen(!isPatientDropdownOpen);
  };

  const toggleTherapyDropdown = () => {
    setTherapyDropdownOpen(!isTherapyDropdownOpen);
  };

  const toggleTherapistDropdown = () => {
    setTherapistDropdownOpen(!isTherapistDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-green-600 flex items-center">
        <span className="mr-2 text-yellow-500">█ █ █</span>
        Looza
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-purple-500 hover:text-purple-600 focus:outline-none"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:flex-row lg:space-x-8 w-full lg:w-auto mt-4 lg:mt-0`}
      >
        {/* Patient Dropdown */}
        <li className="relative">
          <button
            onClick={togglePatientDropdown}
            className="text-purple-500 hover:text-purple-600 font-semibold"
          >
            Patient
          </button>
          {isPatientDropdownOpen && (
            <ul className="absolute lg:right-0 left-0 lg:left-auto mt-2 bg-white shadow-lg rounded-lg w-48">
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/add-patient" className="text-gray-700">
                  Add Patient
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/get-all-patients" className="text-gray-700">
                  Get All Patients
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Therapy Dropdown */}
        <li className="relative">
          <button
            onClick={toggleTherapyDropdown}
            className="text-purple-500 hover:text-purple-600 font-semibold"
          >
            Therapy
          </button>
          {isTherapyDropdownOpen && (
            <ul className="absolute lg:right-0 left-0 lg:left-auto mt-2 bg-white shadow-lg rounded-lg w-48">
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/add-therapy" className="text-gray-700">
                  Add Therapy
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/get-all-therapies" className="text-gray-700">
                  Get All Therapies
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Therapist Dropdown */}
        <li className="relative">
          <button
            onClick={toggleTherapistDropdown}
            className="text-purple-500 hover:text-purple-600 font-semibold"
          >
            Therapist
          </button>
          {isTherapistDropdownOpen && (
            <ul className="absolute lg:right-0 left-0 lg:left-auto mt-2 bg-white shadow-lg rounded-lg w-48">
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/add-therapist" className="text-gray-700">
                  Add Therapist
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-purple-100">
                <Link to="/get-all-therapists" className="text-gray-700">
                  Get All Therapists
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
