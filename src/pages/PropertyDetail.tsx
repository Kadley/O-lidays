import PropertyInfo from '@/components/PropertyInfo';
import Review from '@/components/Review';
import { useProperty } from '@/hooks/query/property';
import { useParams } from 'react-router';

function PropertyDetail() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Property ID is required');
  }

  const idNumber = Number(id);

  if (Number.isNaN(idNumber)) {
    throw new Error('Property ID must be a number');
  }

  const { data: property, status } = useProperty(idNumber);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {status === 'success' && (
        <>
          <PropertyInfo property={property} />

          <div className="mt-10 bg-white shadow rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Commentaires
            </h3>

            <div className="flex flex-col gap-6">
              {property.comments.map((comment) => (
                <Review key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </>
      )}

      {status === 'error' && (
        <div className="mt-8 text-red-600 text-center font-medium">
          Une erreur est survenue lors de la récupération de la propriété
        </div>
      )}
    </div>
  );
}

export default PropertyDetail;
