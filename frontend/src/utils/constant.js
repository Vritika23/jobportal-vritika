const isDev = import.meta.env.DEV;

const BASE_URL = isDev
  ? "http://localhost:8000"
  : "https://jobportal-vritika.onrender.com";

export const USER_API_END_POINT = `${BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/api/v1/company`;