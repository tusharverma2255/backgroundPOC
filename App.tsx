import React from 'react';
import { Button, View } from 'react-native';
import { NativeModules } from 'react-native';

const App = () => {
  const startBackgroundTask = () => {
    NativeModules.BackgroundTaskModule.startTask();
  };

  return (
    <View>
      <Button title="Start Background Task" onPress={startBackgroundTask} />
    </View>
  );
};

export default App;
   