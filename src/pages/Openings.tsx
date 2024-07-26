import React from "react";
import { Link } from "react-router-dom";
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
  roleID: number;
  roleType: string;
  roleName: string;
  roleDescription: string;
  lastDateToApply: string;
  responsibilities: string;
  linkBySociety: string;
  societyID: number;
}

const roles: SocietyRole[] = [
  {
    roleID: 1,
    roleType: "Executive",
    roleName: "President",
    roleDescription: "Leads the society and oversees all operations.",
    lastDateToApply: "2024-08-01",
    responsibilities:
      "Chair meetings, represent the society, make strategic decisions.",
    linkBySociety: "https://example.com/president",
    societyID: 101,
  },
  // Add more role objects as needed
];

const tableClass = "text-center text-gray-800 text-xl border-x";

const RoleCard: React.FC<{ role: SocietyRole }> = ({ role }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-semibold">{role.roleName}</h3>
      <p className="text-sm text-gray-600">{role.roleDescription}</p>
      <p className="text-sm text-gray-600">
        Responsibilities: {role.responsibilities}
      </p>
      <p className="text-sm text-gray-600">
        Last Date to Apply: {role.lastDateToApply}
      </p>
      <a href={role.linkBySociety} className="text-blue-500 hover:underline">
        More Info
      </a>
    </div>
  );
};

const SocietyRoles: React.FC = () => {
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
                <TableHead rowSpan={2} className={tableClass}>
                  Society Roles
                </TableHead>
                <TableHead colSpan={4} className={tableClass}>
                  Role Details
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className={tableClass}>Role Type</TableHead>
                <TableHead className={tableClass}>Role Name</TableHead>
                <TableHead className={tableClass}>Last Date to Apply</TableHead>
                <TableHead className={tableClass}>Responsibilities</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {roles.map((role, index) => (
                <TableRow key={role.roleID}>
                  <TableCell className="text-center border-x text-gray-800">
                    {index + 1}.
                  </TableCell>
                  <TableCell className="border-x">
                    <RoleCard role={role} />
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.roleType}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.roleName}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.lastDateToApply}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {role.responsibilities}
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
