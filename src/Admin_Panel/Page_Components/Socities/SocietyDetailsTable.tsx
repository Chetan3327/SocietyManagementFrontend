import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
import { Trash, Edit } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { format } from "date-fns";

// const originalData = [
//   {
//     SocietyName: "Drishti",
//     DateOfEstablishment: new Date(13, 9, 2015),
//     Description:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ",
//     SocietyHead: "John doe",
//     // Coordinators: "John Doe",
//     // NumberOfMembers: 303,
//     Category: "Non Tech",
//   },
//   {
//     SocietyName: "Drishti",
//     DateOfEstablishment: new Date(13, 9, 2015),
//     Description:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ",
//     SocietyHead: "John doe",
//     // Coordinators: "John Doe",
//     // NumberOfMembers: 303,
//     Category: "Non Tech",
//   },
//   {
//     SocietyName: "Drishti",
//     DateOfEstablishment: new Date(13, 9, 2015),
//     Description:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ",
//     SocietyHead: "John doe",
//     // Coordinators: "John Doe",
//     // NumberOfMembers: 303,
//     Category: "Non Tech",
//   },
//   {
//     SocietyName: "Drishti",
//     DateOfEstablishment: new Date(13, 9, 2015),
//     Description:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ",
//     SocietyHead: "John doe",
//     // Coordinators: "John Doe",
//     // NumberOfMembers: 303,
//     Category: "Non Tech",
//   },
// ];

// const schema = z.object({
//   Societyname: z.string().nonempty("Society name is required"),
// });
type societyType = {
  SocietyID: number,
  SocietyName: number,
  DateOfRegistration:Date,
  SocietyDescription: string,
  SocietyHead: string,
  SocietyType: string
}
const tableClass = "text-center text-xl border-x";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SocietyDetailsTable = () => {
  let [societyData, setSocietyData] = useState([]);
  const params = useParams()
  console.log(params)

  let fetchAllSociety;
  useEffect(() => {
    fetchAllSociety = async () => {
      let res;
      if (params.societyID) {
        res = await axios.get(`${BACKEND_URL}/admin/societies/${params.societyID}`)
      } else {
        res = await axios.get(`${BACKEND_URL}/admin/societies`)
      }
      console.log('data', res.data)
      setSocietyData(res.data)
    }
    fetchAllSociety()
  }, [])

  if (societyData.length <= 0) {
    return (
      <div className="text-3xl font-bold">Loading data</div>
    )
  }

  const handleDelete = async (societyID: number) => {

    await axios.delete(`${BACKEND_URL}/societies/${societyID}`).then(
      res => {
        console.log(res)
        setSocietyData(societyData.filter((society: societyType) => society.SocietyID !== societyID))
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }
  // type formData = z.infer<typeof schema>;
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<formData>({
  //   resolver: zodResolver(schema),
  // });

  // const onSubmit = (data: formData) => {
  //   console.log(data);
  //   // if (data.Societyname) {
  //   //   const filteredata = societyData.filter(
  //   //     (detail) => detail.SocietyName.toLowerCase() === data.Societyname.toLowerCase()
  //   //   );
  //   //   setSocietyData(filteredata);
  //   // }
  // };
  return (
    <div className="mt-10 w-screen overflow-x-hidden">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-300 w-9/12 py-4 px-2 flex flex-col lg:flex-row  space-y-4 lg:space-y-0">
          <input
            {...register("Societyname")}
            type="text"
            placeholder="Search society "
            className=" bg-white p-2 px-6 w-full rounded lg:mr-2"
            id="date-search"
          />
          <button
            type="submit"
            className="text-white bg-blue-500 p-2  rounded text-md px-8"
          >
            Search
          </button>
        </div>
        {errors.Societyname && (
          <span className="text-red-500">{errors.Societyname.message}</span>
        )}
      </form> */}
      <div className="overflow-auto h-96 mt-10 w-9/12">
        <Table className="border-t border-x w-full shadow-lg table-auto ">
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2} className={tableClass}>
                SocietyID
              </TableHead>
              <TableHead rowSpan={2} className={tableClass}>
                Name of Society
              </TableHead>
              <TableHead colSpan={4} className={tableClass}>
                Society Details
              </TableHead>
              <TableHead rowSpan={2} className={tableClass}>
                Action
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className={tableClass}>
                Date Of Establishment
              </TableHead>
              <TableHead className={tableClass}>Description</TableHead>
              <TableHead className={tableClass}>Society Head</TableHead>
              {/* <TableHead className={tableClass}> Coordinators</TableHead> */}
              {/* <TableHead className={tableClass}>Number Of Members</TableHead> */}
              <TableHead className={tableClass}> Society Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {societyData.map((society:societyType, index: number) => (
              <TableRow key={index}>
                <TableCell className="text-center border-x ">
                  {index + 1}.
                </TableCell>
                <TableCell className="text-center border-x text-md ">
                  {society.SocietyName}
                </TableCell>
                <TableCell className="text-center border-x text-md ">
                {format(new Date(society.DateOfRegistration), "MMMM dd, yyyy")}
                </TableCell>
                <TableCell className="text-center border-x text-md ">
                  {society.SocietyDescription}
                </TableCell>
                <TableCell className="text-center border-x text-md">
                  {society.SocietyHead}
                </TableCell>
                {/* <TableCell className="text-center border-x text-md text-gray-800">
                  {details.Coordinators}
                </TableCell> */}
                {/* <TableCell className="text-center border-x text-md text-gray-800">
                  {details.NumberOfMembers}
                </TableCell> */}
                <TableCell className="text-center border-x text-md ">
                  {society.SocietyType}
                </TableCell>
                <TableCell className="flex justify-center gap-5">
                  <Link to={`/admin/society/update/${society.SocietyID}`} state={{society}}>
                    <Button className="text-blue-700">
                      <Edit />
                    </Button>
                  </Link>
                  <Button className="text-red-700" onClick={() => handleDelete(society.SocietyID)}>
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SocietyDetailsTable;
