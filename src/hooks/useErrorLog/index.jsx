/**
 * Custom ErrorLog hook to handle UI errors in prod
 */
import { useEffect, useState } from 'react';

export const useErrorLog = (fileLocation) => {
  //-------------- State & Variables --------------//

  const [file, setFile] = useState('');

  //-------------- Use Effects --------------//

  useEffect(() => {
    setFile(fileLocation);
  }, [fileLocation]);

  //-------------- Other Methods --------------//

  /**
   * Console the error in PM2 log
   * @param {*} error
   */
  const handleError = (error) => {
    const errorLogString = `Date: ${new Date()} \nFile: ${file} \nError: ${error.message}`;
    console.log('------------------------');
    console.log(errorLogString);
    console.log('**** Stack Trace ****');
    console.log(error.stack);
    console.log('------------------------');
  };

  return handleError;
};
