export interface Role {
  id: string;
  roleName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  first_name: string;
  last_name: string;
  nationality: string;
  gender: string;
  phone: string;
  bio: string | null;
  avatarId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  user_name: string;
  email: string;
  password: string;
  roleId: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  role: Role;
  profile: Profile;
}
