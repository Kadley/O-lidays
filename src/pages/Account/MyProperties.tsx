import { Button } from '@/components/ui/button';
import { useMyProperties } from '@/hooks/query/property';
import { cn } from '@/lib/utils';
import { Check, Hourglass, Plus, X } from 'lucide-react';
import { Link } from 'react-router';

function MyProperties() {
  const { status, data: myProperties } = useMyProperties();

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl pb-2 flex items-center gap-2">
        <span>Mes propriétés</span>
        <Link to="/account/property/create">
          <Button className="cursor-pointer">
            Ajouter une propriété <Plus />
          </Button>
        </Link>
      </h2>
      {status === 'pending' && <p>Chargement...</p>}
      {status === 'error' && <p>Une erreur est survenue</p>}
      {status === 'success' && (
        <ul className="flex flex-col gap-2">
          {myProperties.map((property) => (
            <li
              key={property.id}
              className={cn('border p-4 rounded-md', {
                'border-red-500': property.status === 'REJECTED',
                'border-green-500': property.status === 'APPROVED',
                'border-yellow-500': property.status === 'PENDING',
              })}
            >
              <h3 className="font-bold flex">
                {property.title}
                {property.status === 'REJECTED' && (
                  <X className="text-red-500 ml-2 inline" />
                )}
                {property.status === 'APPROVED' && (
                  <Check className="text-green-500 ml-2 inline" />
                )}
                {property.status === 'PENDING' && (
                  <Hourglass className="text-yellow-500 ml-2 inline" />
                )}
              </h3>
              <p>{property.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyProperties;
