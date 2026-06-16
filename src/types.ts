export interface Auftritt {
  title: string;
  location: string;
  date: string;
  description: string;
  id: number;
  preis: number;
}

export interface Editable {
  title: string;
  edit: boolean;
}

export interface AddConfirmationRequest {
  nachname: string;
  vorname: string;
  email: string;
  auftrittName: string;
  straße: string;
  hausnummer: number;
  postleitzahl: string;
  stadt: string;
  menge: number;
  preis: number;
}

export interface ConfirmationDto {
  id: number;
  vorname: string;
  nachname: string;
  auftrittName: string;
  menge: number;
  email: string;
  status: boolean;
  preis: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}
