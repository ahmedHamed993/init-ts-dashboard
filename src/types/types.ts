export type IsDisabledFilter =
  | "is_disabled:eq:true|false"
  | "is_disabled:eq:false"
  | "is_disabled:eq:true";

export type UserSliceState = {
  user: {
    userToken: string;
    userData: Record<string, any>;
  };
};

