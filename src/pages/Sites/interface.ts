export interface Site {
  id: string;
  name: string;
  province: string;
  district: string;
  coaches: SiteCoach[];
  created_at: string;
  updated_at: string;
}
export interface SiteCoach {
  user: {
    id: string;
    email: string;
    user_name: string;
    role: {
      roleName: string;
    };
    profile: {
      nationality: string;
      phone: string;
      first_name: string;
      last_name: string;
      avatarId: string | null;
    };
  };
}

export interface SitePayload {
  name: string;
  province: string;
  district: string;
}
