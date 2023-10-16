import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trackResponse } from '../redux/actions';

const ResponseTracking = () => {
  const dispatch = useDispatch();
  const emailResponseData = useSelector(state => state.emailResponseData);

  useEffect(() => {
    dispatch(trackResponse());
  }, [dispatch]);

  return (
    <div id="responseTable">
      <h2>Response Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Open</th>
            <th>Click</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {emailResponseData.map((response, index) => (
            <tr key={index}>
              <td>{response.emailId}</td>
              <td>{response.open ? 'Yes' : 'No'}</td>
              <td>{response.click ? 'Yes' : 'No'}</td>
              <td>{response.reply ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTracking;