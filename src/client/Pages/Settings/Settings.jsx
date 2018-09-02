import React from 'react';
import PageWrapper from '../PageWrapper';

function Settings(props) {
  const { pageName } = props;
  return (
    <PageWrapper pageName={pageName}>
      <h1>Setings</h1>
    </PageWrapper>
  );
}

export default Settings;
