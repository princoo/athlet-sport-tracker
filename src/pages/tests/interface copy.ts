export interface Test {
  id: string;
  name: string;
  description: string;
  required_metrics: string[];
  created_at: string;
  updated_at: string;
}

export interface TestPayload {
  name: string;
  description: string;
  required_metrics: string[];
}

export enum TestMetrics {
  accuracy = 'accuracy', // Accuracy of attempts (e.g., shooting or passing)
  body_position = 'bodyPosition', // Player's BodyPosition during tests (e.g., while dribbling)
  total_time = 'totalTime', // Time taken to complete a test (e.g., sprint, dribble)
  attempts = 'attempts', // Number of attempts (e.g., shots, passes, dribbles)
  successes = 'successes', // Number of successful attempts (e.g., goals, passes)
  power = 'power', // Power generated (e.g., shot power, jump power)
  cones_touched = 'conesTouched', // nbr of cones touched during tests (e.g., dribbling)
  foot = 'foot', // the foot used in a test (e.g., left or right)
  errors = 'errors', // errorsMade during the test
  distance = 'distance', // distance covered (e.g., in speed test)
  ball_controll = 'ballControll', // how the player controls the ball during a test
}
export interface TestMetricsInterface {
  accuracy?: number;
  body_position?: number;
  total_time?: number;
  attempts?: number;
  successes?: number;
  power?: number;
  cones_touched?: number;
  foot?: 'LEFT' | 'RIGHT' | null;
  errors?: number;
  distance?: number;
  ball_controll?: number;
}
