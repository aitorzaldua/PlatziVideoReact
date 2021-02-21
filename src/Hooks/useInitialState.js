import { useState, useEffect } from 'react';

const useIntialState = (API) => {

  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));

  }, []);

  return videos;
};

export default useIntialState;
