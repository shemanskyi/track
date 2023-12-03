import React, { memo } from 'react';

import { CandidateTypes } from '../../Candidates.types';
import Candidate from './Candidate'; 
//@ts-ignore
export const CandidateContainer: React.FC<CandidateTypes | null> = ({ candidate }) => {
  //@ts-ignore
  return <Candidate candidate={candidate} />;
};

export default memo(CandidateContainer);
