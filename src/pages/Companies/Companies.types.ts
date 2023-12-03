import { JobTypes } from 'pages/Jobs/Jobs.types';

export interface CompanyTypes {
    address: string;
    description: string;
    employeeCount: number;
    id: number;
    name: string;
    openJobs: JobTypes[];
    openJobsCount: number;
  }
  