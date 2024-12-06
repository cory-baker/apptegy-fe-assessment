export type RandomUser = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  id: {
    /** @example "222-23-6685" */
    value: string;
  };
};
