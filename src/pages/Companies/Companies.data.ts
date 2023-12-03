import { JOBS } from 'pages/Jobs/Jobs.data';

import { CompanyTypes } from './Companies.types';

export const COMPANIES: CompanyTypes[] = [
  {
    address: '123 Tech Lane, San Francisco, CA',
    description: 'A leading technology company specializing in innovative software solutions.',
    employeeCount: 500,
    id: 1,
    name: 'Tech Innovators Inc.',
    openJobs: [JOBS[0], JOBS[1]],
    openJobsCount: 2,
  },
  {
    address: '456 Wellness Way, Boston, MA',
    description: 'Developing cutting-edge healthcare technologies to improve patient outcomes.',
    employeeCount: 300,
    id: 2,
    name: 'HealthTech Solutions',
    openJobs: [JOBS[2]],
    openJobsCount: 1,
  },
  {
    address: '789 Green Road, Denver, CO',
    description: 'A renewable energy company focused on sustainable solutions.',
    employeeCount: 200,
    id: 3,
    name: 'EcoEnergy Corp.',
    openJobs: [JOBS[3], JOBS[4]],
    openJobsCount: 2,
  },
  {
    address: '101 Money Blvd, New York, NY',
    description: 'Transforming the financial industry with state-of-the-art fintech solutions.',
    employeeCount: 750,
    id: 4,
    name: 'FinTech Global',
    openJobs: [JOBS[5], JOBS[6], JOBS[7]],
    openJobsCount: 3,
  },
  {
    address: '202 Education Ave, Austin, TX',
    description: 'Creating engaging educational platforms and learning technologies.',
    employeeCount: 150,
    id: 5,
    name: 'EduTech Innovations',
    openJobs: [JOBS[8]],
    openJobsCount: 1,
  },
  {
    address: '303 Market Street, Chicago, IL',
    description: 'Providing advanced analytics and tools for retail businesses.',
    employeeCount: 600,
    id: 6,
    name: 'Retail Solutions Ltd.',
    openJobs: [JOBS[9], JOBS[10]],
    openJobsCount: 2,
  },
  {
    address: '404 Innovation Drive, Detroit, MI',
    description: 'Revolutionizing the automotive industry with smart technologies.',
    employeeCount: 800,
    id: 7,
    name: 'AutoDrive Technologies',
    openJobs: [JOBS[11], JOBS[12]],
    openJobsCount: 2,
  },
  {
    address: '505 Research Parkway, San Diego, CA',
    description: 'Advancing medical research through data-driven insights and bioinformatics.',
    employeeCount: 400,
    id: 8,
    name: 'BioMed Research',
    openJobs: [JOBS[13]],
    openJobsCount: 1,
  },
  {
    address: '606 Adventure Road, Orlando, FL',
    description: 'Simplifying travel experiences with innovative technologies.',
    employeeCount: 250,
    id: 9,
    name: 'TravelTech Enterprises',
    openJobs: [JOBS[14], JOBS[15]],
    openJobsCount: 2,
  },
  {
    address: '707 Farming Lane, Des Moines, IA',
    description: 'Innovating in agricultural technology to support sustainable farming.',
    employeeCount: 120,
    id: 10,
    name: 'AgriTech Solutions',
    openJobs: [JOBS[16]],
    openJobsCount: 1,
  },
  {
    address: '808 Security Blvd, Washington, D.C.',
    description: 'Protecting businesses with cutting-edge cybersecurity solutions.',
    employeeCount: 550,
    id: 11,
    name: 'CyberSecure Ltd.',
    openJobs: [JOBS[17], JOBS[18]],
    openJobsCount: 2,
  },
  {
    address: '909 Eco Lane, Portland, OR',
    description: 'Developing sustainable solutions for a greener future.',
    employeeCount: 350,
    id: 12,
    name: 'GreenTech Innovations',
    openJobs: [JOBS[19]],
    openJobsCount: 1,
  },
  {
    address: '1010 Logistics Parkway, Atlanta, GA',
    description: 'Enhancing supply chain efficiency with innovative tools.',
    employeeCount: 450,
    id: 13,
    name: 'LogiTech Solutions',
    openJobs: [JOBS[20], JOBS[0], JOBS[3]],
    openJobsCount: 3,
  },
  {
    address: '1111 Health Street, Minneapolis, MN',
    description: 'Designing state-of-the-art medical equipment for global healthcare.',
    employeeCount: 220,
    id: 14,
    name: 'MedEquip Corp.',
    openJobs: [JOBS[2], JOBS[7]],
    openJobsCount: 2,
  },
  {
    address: '1212 Space Station Way, Houston, TX',
    description: 'Pioneering advancements in aerospace technology and exploration.',
    employeeCount: 1000,
    id: 15,
    name: 'SpaceTech Enterprises',
    openJobs: [JOBS[4], JOBS[9], JOBS[13]],
    openJobsCount: 3,
  },
];