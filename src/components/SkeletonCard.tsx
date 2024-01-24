import {Card, CardContent, CardHeader, CardFooter} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
    <CardHeader className="flex-row gap-4 items-center">
    </CardHeader>
    <CardContent>
    </CardContent>
    <CardFooter className="flex justify-between">
    </CardFooter>
  </Card>
  )
}
