import React, { memo } from 'react';

import { JobTypes } from '../../Jobs.types';
import Job from './Job'; 
//@ts-ignore
export const JobContainer: React.FC<JobTypes | null> = ({ Job }) => {
  //@ts-ignore
  return <Job job={job} />;
};

export default memo(JobContainer);
