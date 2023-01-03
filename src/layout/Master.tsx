/** @format */

import { Helmet } from 'react-helmet-async';

type MasterPropType = {
  children: React.ReactNode;
};

const Master = (props: MasterPropType) => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Jinita Patel</title>
        <link rel='icon' href='../assets/images/favicon.ico' />
        <meta name='description' content='Get your favourite music' />
        <meta name='theme-color' content='#333' />
      </Helmet>
      {props.children}
    </>
  );
};

export default Master;
