import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Skeleton } from './ui/skeleton';

function PropertyCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-full" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardDescription>
      </CardContent>
      <CardContent>
        <div className="font-semibold">
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-full" />
      </CardFooter>
    </Card>
  );
}

export default PropertyCardSkeleton;
