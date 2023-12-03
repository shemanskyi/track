
  export interface PreviousCompany {
    end_date: string;
    name: string;
    position: string;
    start_date: string;
  }
  
  export interface CurrentCompany {
    name: string;
    position: string;
    start_date: string;
  }
  
  export interface CandidateTypes {
    current_company: CurrentCompany | null;
    email: string;
    has_job: boolean;
    id: number;
    name: string;
    phone: string;
    previous_companies: PreviousCompany[];
    status: string;
    technologies: string[];
  }