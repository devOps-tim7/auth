import { Gender, Role } from '../helpers/shared';

export default class User {
  id?: string;

  username: string;

  password: string;

  fullName?: string;

  email?: string;

  phone?: string;

  gender?: Gender;

  birthDate?: Date;

  description?: string;

  website?: string;

  private?: boolean;

  taggable?: boolean;

  role?: Role;

  constructor(user?: {
    username: string;
    password: string;
    fullName?: string;
    email?: string;
    phone?: string;
    gender?: Gender;
    birthDate?: Date;
    description?: string;
    website?: string;
    private?: boolean;
    taggable?: boolean;
    role?: Role;
  }) {
    this.username = user?.username;
    this.password = user?.password;
    this.fullName = user?.fullName;
    this.email = user?.email;
    this.phone = user?.phone;
    this.gender = user?.gender;
    this.birthDate = user?.birthDate;
    this.description = user?.description;
    this.website = user?.website;
    this.private = user?.private;
    this.taggable = user?.taggable;
    this.role = user?.role;
  }
}
