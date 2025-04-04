import type { IFile } from '@/@types/property';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface PropertyImagesProps {
  propertyTitle: string;
  files: IFile[];
}
function PropertyImages({ files, propertyTitle }: PropertyImagesProps) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {files.map((file, index) => (
            <CarouselItem key={file.id} className="md:basis-1/3 lg:basis-1/4">
              <img
                src={file.url}
                alt={`${propertyTitle} - ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* On modifie le left / right pour que les boutons soit au dessus de l'image */}
        {/* Soucis, il serait caché par l'overflow-auto du Layout sinon */}
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}

export default PropertyImages;
