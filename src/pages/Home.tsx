import PropertyCard from '@/components/PropertyCard';
import PropertyCardSkeleton from '@/components/PropertyCardSkeleton';
import { useProperties } from '@/hooks/query/property';

function Home() {
  const { data: properties, status } = useProperties();

  return (
    <div>
      <h2 className="font-bold text-3xl mb-4 text-center text-primary">
        Nos propriétés à louer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {status === 'pending' && (
          <>
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </>
        )}
        {status === 'error' && (
          <div className="text-red-500 text-center">
            Une erreur est survenue
          </div>
        )}
        {status === 'success' &&
          properties.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
