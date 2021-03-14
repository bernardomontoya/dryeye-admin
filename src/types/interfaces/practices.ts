export type Practice = {
  [x: string]: string | number;
  practice: string;
  doctor: string;
  name: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  street_number: string;
  route: string;
  county: string;
  state: string;
  state_short: string;
  city: string;
  country: string;
  country_short: string;
  zip: string;
  latitude: string | number;
  longitude: string | number;
  createdAt: number;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  monday_op_hours: string;
  tuesday_op_hours: string;
  wednesday_op_hours: string;
  thursday_op_hours: string;
  friday_op_hours: string;
  saturday_op_hours: string;
  sunday_op_hours: string;
};

export type AddressComponent = {
  address: string;
  street_number: string;
  route: string;
  county: string;
  state: string;
  state_short: string;
  city: string;
  country: string;
  country_short: string;
  zip: string;
  latitude: string | number;
  longitude: string | number;
};
