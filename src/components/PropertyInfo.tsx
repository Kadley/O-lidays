import type { IPropertyFull } from '@/@types/property';
import PropertyImages from './PropertyImages';

interface PropertyInfoProps {
  property: IPropertyFull;
}
function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-4 text-primary">
        {property.title} - {property.location}
      </h2>
      <PropertyImages files={property.files} propertyTitle={property.title} />
      <div className="flex gap-2 mt-2">
        <p className="mt-4.5">{property.description}</p>
        <div className="min-w-72 border-2 border-primary rounded-lg p-4">
          {property.avgRating && (
            <p className="font-semibold">
              Note moyenne: {property.avgRating} / 5
            </p>
          )}

          {property.commentsCount > 0 && (
            <p className="font-semibold">
              {property.commentsCount} commentaire
              {property.commentsCount > 1 ? 's' : ''}
            </p>
          )}

          <p className="font-semibold">
            Prix par nuit: {property.priceByNight} €
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyInfo;
