// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableHeader,
//   TableHead,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button"; // Adjust import based on your button library

// interface SocietyRole {
//   RoleID: number;
//   RoleType: string;
//   Rolename: string;
//   RoleDescription: string;
//   LastDateToApply: string;
//   Responsibilities: string;
//   LinkBySociety: string;
//   SocietyID: number;
// }

// const tableClass = "text-center text-gray-800 text-xl border-x";

// const RoleCard: React.FC<{ role: SocietyRole }> = ({ role }) => {
//   return (
//     <div className="flex flex-col space-y-2">
//       <h3 className="text-lg font-semibold">{role.Rolename}</h3>
//       <p className="text-sm text-gray-600">{role.RoleDescription}</p>
//       <p className="text-sm text-gray-600">
//         Responsibilities: {role.Responsibilities}
//       </p>
//       <p className="text-sm text-gray-600">
//         Last Date to Apply: {role.LastDateToApply}
//       </p>
//       <a href={role.LinkBySociety} className="text-blue-500 hover:underline">
//         More Info
//       </a>
//     </div>
//   );
// };

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// const SocietyRoles: React.FC = () => {
//   const [Roles, setRoles] = useState([])
//   const { id } = useParams();
//   useEffect(() => {
//     const fetchsociety = async () => {
//       const res = await axios.get(`${BACKEND_URL}/roles/society/${id}`)
//       console.log('data', res.data)
//       setRoles(res.data)
//     }
//     fetchsociety()
//   }, [])

//   if (!Roles) return <div>Loading...</div>;

//   return (
//     <div>
//       <div className="py-8 px-6 lg:px-20 bg-white mt-10">
//         <div className="flex flex-col">
//           <h2 className="font-bold text-center text-4xl mb-4 text-gray-800">
//             SOCIETY ROLES
//           </h2>
//           <Button className="bg-blue-500 text-white py-1 px-3 rounded w-min mx-auto mb-4">
//             <Link to="/BecomeMember">Become a Member</Link>
//           </Button>
//         </div>
//         <div className="overflow-auto max-h-96">
//           <Table className="bg-white border-t border-x shadow-lg table-auto">
//             <TableHeader>
//               <TableRow>
//                 <TableHead rowSpan={2} className={tableClass}>
//                   S No.
//                 </TableHead>
//                 {/* <TableHead rowSpan={2} className={tableClass}>
//                   Society Roles
//                 </TableHead> */}
//                 <TableHead colSpan={4} className={tableClass}>
//                   Role Details
//                 </TableHead>
//               </TableRow>
//               <TableRow>
//                 <TableHead className={tableClass}>Role Type</TableHead>
//                 <TableHead className={tableClass}>Role Name</TableHead>
//                 <TableHead className={tableClass}>Last Date to Apply</TableHead>
//                 <TableHead className={tableClass}>Responsibilities</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {Roles.map((role: SocietyRole, index) => (
//                 <TableRow key={role.RoleID}>
//                   <TableCell className="text-center border-x text-gray-800">
//                     {index + 1}.
//                   </TableCell>
//                   <TableCell className="border-x">
//                     <RoleCard role={role} />
//                   </TableCell>
//                   <TableCell className="text-center border-x text-lg text-gray-800">
//                     {role.RoleType}
//                   </TableCell>
//                   <TableCell className="text-center border-x text-lg text-gray-800">
//                     {role.Rolename}
//                   </TableCell>
//                   <TableCell className="text-center border-x text-lg text-gray-800">
//                     {role.LastDateToApply}
//                   </TableCell>
//                   <TableCell className="text-center border-x text-lg text-gray-800">
//                     {role.Responsibilities}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocietyRoles;



import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Adjust import based on your button library

interface SocietyRole {
  RoleID: number;
  RoleType: string;
  Rolename: string;
  RoleDescription: string;
  LastDateToApply: string;
  Responsibilities: string;
  LinkBySociety: string;
  SocietyID: number;
}

const tableClass = "text-center text-gray-800 text-xl border-x";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SocietyRoles: React.FC = () => {
  const [Roles, setRoles] = useState<SocietyRole[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSocietyRoles = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/roles/society/${id}`);
        setRoles(res.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchSocietyRoles();
  }, [id]);

  if (Roles.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <div className="py-8 px-6 lg:px-20 bg-white mt-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-center text-4xl mb-4 text-gray-800">
            SOCIETY ROLES
          </h2>
          <Button className="bg-blue-500 text-white py-1 px-3 rounded w-min mx-auto mb-4">
            <Link to="/BecomeMember">Become a Member</Link>
          </Button>
        </div>
        <div className="overflow-auto max-h-96">
          <Table className="bg-white border-t border-x shadow-lg table-auto">
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className={tableClass}>
                  S No.
                </TableHead>
                <TableHead className={tableClass}>Role Type</TableHead>
                <TableHead className={tableClass}>Role Name</TableHead>
                <TableHead className={`${tableClass} w-[200px]`}>Last Date to Apply</TableHead>
                <TableHead className={tableClass}>Responsibilities</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Roles.map((role: SocietyRole, index) => (
                <TableRow key={role.RoleID}>
                  <TableCell className="text-center border-x text-gray-800">
                    {index + 1}.
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.RoleType}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.Rolename}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.LastDateToApply}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.Responsibilities}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SocietyRoles;
