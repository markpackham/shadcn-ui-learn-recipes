import {Card, CardContent, CardHeader, CardFooter} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
    <CardHeader className="flex-row gap-4 items-center">
      <Skeleton className="w-12 h-12 rounded-full"/>
      {/* With no width default is used & flex-grow means eat up remaining space */}
      <Skeleton className="h-6 flex-grow"/>
    </CardHeader>
    {/* Intended for text */}
    <CardContent>
     <Skeleton className="h-4 flex-grow mt-4"/>
     <Skeleton className="h-4 flex-grow mt-4"/>
     {/* Take up half of the container */}
     <Skeleton className="h-4 w-1/2 mt-4"/>
    </CardContent>
    <CardFooter>

    </CardFooter>
  </Card>
  )
}
