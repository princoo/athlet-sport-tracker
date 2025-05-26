import { Gender } from "../Authentication/redux/interface";

export interface Player extends PlayerPayload {
  id: string;
  created_at: string;
  updated_at: string;
}
export interface SiteCoach {
  user: {
    id: string;
    email: string;
    user_name: string;
    role: {
      role_name: string;
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

export enum FootEnum {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  BOTH = 'BOTH',
}

export enum FootballPosition {
  GK = 'GK', // Goalkeeper
  RB = 'RB', // Right Back
  CB = 'CB', // Center Back
  LB = 'LB', // Left Back
  RWB = 'RWB', // Right Wing Back
  LWB = 'LWB', // Left Wing Back
  CDM = 'CDM', // Central Defensive Midfielder
  CM = 'CM', // Central Midfielder
  CAM = 'CAM', // Central Attacking Midfielder
  RM = 'RM', // Right Midfielder
  LM = 'LM', // Left Midfielder
  RW = 'RW', // Right Winger
  LW = 'LW', // Left Winger
  CF = 'CF', // Center Forward
  ST = 'ST', // Striker
  SS = 'SS', // Second Striker
}
export enum EducationLevel {
  PrimarySchool = "Primary School",
  MiddleSchool = "Middle School",
  HighSchool = "High School",
  College = "College",
  Postgraduate = "Postgraduate"
}


export interface PlayerPayload {
  first_name: string;
  last_name: string;
  age: number;
  dob: string;
  height: number;
  weight: number;
  foot: FootEnum;
  nationality: string;
  acad_status: string;
  positions: FootballPosition[];
  gender: Gender; 
}
