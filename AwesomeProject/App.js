import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    const apiUrl = 'http://192.168.6.161:3000/api/data';

    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', apiUrl)
      .then((response) => {
        return response.text();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Data from the server:</Text>
      <Text>{data ? data : 'Loading...'}</Text>
      <Button title="Refresh Data" onPress={fetchData} />
    </View>
  );
}

export default App;
