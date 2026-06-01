// // export const USER_API_END_POINT="https://jobsportal-3.onrender.com/api/v1/user" || "http://localhost:8000/api/v1/user";
// // export const JOB_API_END_POINT="https://jobsportal-3.onrender.com/api/v1/job"||"http://localhost:8000/api/v1/job";
// // export const APPLICATION_API_END_POINT="https://jobsportal-3.onrender.com/api/v1/application" || "http://localhost:8000/api/v1/application";
// // export const COMPANY_API_END_POINT= "https://jobsportal-3.onrender.com/api/v1/company"|| "http://localhost:8000/api/v1/company";

// // const isDev = import.meta.env.MODE === "development";

// export const USER_API_END_POINT =
//    "http://localhost:8000/api/v1/user";

// export const JOB_API_END_POINT = 
//    "http://localhost:8000/api/v1/job"
//   ;

// export const APPLICATION_API_END_POINT = 
//   "http://localhost:8000/api/v1/application"
//  ;

// export const COMPANY_API_END_POINT = 
//    "http://localhost:8000/api/v1/company"
//  ;

const isDev = import.meta.env.DEV;
const BASE_URL = isDev
  ? "http://localhost:8000"
  : "https://jobsportal-3.onrender.com";

  export const USER_API_END_POINT = `${BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${BASE_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/api/v1/company`;

