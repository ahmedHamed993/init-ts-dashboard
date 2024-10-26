export type IsDisabledFilter =
  | "is_disabled:eq:true|false"
  | "is_disabled:eq:false"
  | "is_disabled:eq:true";

export type BusinessStatusFilter =
  | "status:eq:accepted|denied|pending"
  | "status:eq:denied"
  | "status:eq:pending"
  | "status:eq:accepted";

export type UserState = {
  user: {
    userToken: string;
    userData: Record<string, any>;
  };
};

export type City = {
  id: string;
  name: string;
  is_disabled: boolean;
};

export type Category = {
  id: string;
  name: string;
  is_disabled: boolean;
  parent: {
    id: string;
    name: string;
  };
};

export type IsConfirmedFilter =
  | "is_confirmed:eq:true|false"
  | "is_confirmed:eq:true"
  | "is_confirmed:eq:false";

export type User = {
    id: string;
    name: string;
    phone: string;
    email: string;
    img: string;
    birthdate: string;
    is_disabled: boolean;
    is_verified: boolean;
    gender: string;
  };