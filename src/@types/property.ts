export interface IProperty {
  id: number;
  title: string;
  description: string;
  type: string;
  location: string;
  priceByNight: number;
  status: string;
  maxPersons: number;
  createdAt: string;
  updatedAt: string;
  ownerId: number;
  files: IFile[];
  owner: IOwner;
  commentsCount: number;
  avgRating?: number;
}

export interface IFile {
  id: number;
  propertyId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOwner {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  id: number;
  comment: string;
  rating: number;
  propertyId: number;
  userId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// On combine les deux types pour avoir la réponse complète
// Le & permet de faire une intersection entre les deux types
// C'est comme si on faisait un merge entre les deux types ({...IProperty, comments: IComment[]})
export type IPropertyFull = IProperty & { comments: IComment[] };
