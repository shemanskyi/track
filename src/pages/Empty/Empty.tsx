import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import { Layout } from 'components';

// import styles from './Empty.styles.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
        <div >
            <Typography gutterBottom variant="h5">
             {t('common.empty')}
            </Typography>
        </div>
    </Layout>
  );
}
