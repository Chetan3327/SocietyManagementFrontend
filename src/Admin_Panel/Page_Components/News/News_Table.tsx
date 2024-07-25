import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";
const News_Table = () => {
  return (
    <Card className="m-7 p-0 h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl border-muted border-2 ">
              S.NO.
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              News
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2 p-0">
              <h1 className="font-bold text-center text-xl border-muted border-2">
                News Details
              </h1>
              <TableRow>
                <TableHead className="font-bold  text-xl ">Date</TableHead>
                <TableHead className="font-bold  text-xl ">Society</TableHead>
                <TableHead className="font-bold  text-xl">Category</TableHead>
              </TableRow>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="border-muted border-2">{index}</TableCell>
                <TableCell className="text-center border-muted border-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis quod consequatur vero voluptatem excepturi
                  debitis quidem minima totam illum tenetur, ut laudantium quia
                  quibusdam dolores dignissimos dolorum at architecto! Illo
                  quidem possimus dolorem nemo repudiandae ex dolore illum
                  perferendis? Ad!
                </TableCell>
                <TableCell className="p-0 h-full">
                  <TableCell className="text-center ">13/09/2024</TableCell>
                  <TableCell className="text-center ">Anveshan</TableCell>
                  <TableCell className="text-center ">Update</TableCell>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default News_Table;
