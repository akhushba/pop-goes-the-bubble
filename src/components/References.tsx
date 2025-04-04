import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { referenceList } from "@/models/Reference";

export default function ReferencePage() {
  return (
    <div className="max-w-3xl mx-auto p-6 h-screen">
      <h1 className="text-3xl font-bold">Bibliography + References</h1>
      <Separator className="my-4" />
      <div className="content pb-4 h-fit-content">
        <Card className="h-[80vh] flex flex-col">
          {/* Set a fixed height and make the content scrollable */}
          <CardContent className="p-4 flex-1 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] break-words whitespace-normal">
                    Author(s)
                  </TableHead>
                  <TableHead className="w-[100px] break-words whitespace-normal">
                    Year
                  </TableHead>
                  <TableHead className="w-[300px] break-words whitespace-normal">
                    Title
                  </TableHead>
                  <TableHead className="w-[200px] break-words whitespace-normal">
                    Link
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referenceList.map((ref, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-[300px] break-words whitespace-normal">
                      {ref.authors}
                    </TableCell>
                    <TableCell className="w-[100px] break-words whitespace-normal">
                      {ref.year}
                    </TableCell>
                    <TableCell className="w-[300px] break-words whitespace-normal">
                      {ref.title}
                    </TableCell>
                    <TableCell className="w-[200px] break-words whitespace-normal">
                      <a
                        href={ref.link}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ref.publisher}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
