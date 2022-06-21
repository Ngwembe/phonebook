import { Person } from "./Person";

export interface Contact {
  contactId: number;
  phoneNumber: string;
  personId: number;
  owner: Person;
}
