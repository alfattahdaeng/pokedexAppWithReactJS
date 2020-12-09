import React from 'react';
import { useSelector } from 'react-redux';

const Translator = ({ turkish, english }) => {
  const language = useSelector((state) => state.language);
  return (
    <>
      {language[0].language === 'tr' ? (
        <>{turkish}</>
      ) : (
        language[0].language === 'en' && <> {english} </>
      )}
    </>
  );
};

export default Translator;
