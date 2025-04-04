import type { IComment } from '@/@types/property';

interface ReviewProps {
  comment: IComment;
}
function Review({ comment }: ReviewProps) {
  return (
    <div className="border-2 border-primary p-4">
      <div className="flex gap-2">
        <p className="text-gray-500">
          {new Date(comment.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p className="text-gray-600">{comment.comment}</p>
      <p className="font-semibold">Note: {comment.rating} / 5</p>
    </div>
  );
}

export default Review;
