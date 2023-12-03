import React, { memo } from 'react';

import { CompanyTypes } from '../../Companies.types';
import Company from './Company'; 
//@ts-ignore
export const CandidateContainer: React.FC<CompanyTypes | null> = ({ company }) => {
  //@ts-ignore
  return <Company company={company} />;
};

export default memo(CandidateContainer);
