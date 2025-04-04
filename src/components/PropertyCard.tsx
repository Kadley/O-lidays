import { Link } from 'react-router';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    description: string;
    priceByNight: number;
    avgRating?: number;
    commentsCount: number;
    location: string;
  };
}
// Mon composant React n'a qu'un seul paramètre, `props`.
// Ce paramètre est FORCEMENT un objet.
// Ici, avec mon type `PropertyCardProps`, j'indique les différentes propriétés que mon composant à besoin.
// Pour éviter la redondance `props.property.title` et `props.property.description`, je destructure mon paramètre pour directement récupérer `property`.
function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div>
            {property.title} - {property.location}
          </div>
          
          <div>
            {property.avgRating && (
              <span className="text-sm font-normal">
                {' '}
                (Note moyenne: {property.avgRating} / 5)
              </span>
            )}
            {property.commentsCount > 0 && (
              <span className="text-sm font-normal">
                {' '}
                ({property.commentsCount} commentaire
                {property.commentsCount > 1 ? 's' : ''})
              </span>
            )}
          </div>
        </CardTitle>
        
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{property.description}</CardDescription>
      </CardContent>
      <CardContent>
        <p className="font-semibold">
          Prix par nuit: {property.priceByNight} €
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/property/${property.id}`} className="block w-full">
          <Button className="w-full cursor-pointer">Voir le détail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PropertyCard;
