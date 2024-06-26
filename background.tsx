import { View, Text } from 'react-native'
import React from 'react'
import BackgroundService from 'react-native-background-actions';


const background = () => {
const sleep = (time: any ) => new Promise<void> ((resolve) => setTimeout(() => resolve(), time));

    const veryIntensiveTask = async (taskDataArguments: any ) => {
        // Example of an infinite loop task
        const { delay } = taskDataArguments;
        await new Promise( async (resolve) => {
            for (let i = 0; BackgroundService.isRunning(); i++) {
                console.log(i);
                await sleep(delay);
            }
        });
    };
  return (
    <View>
      <Text>background</Text>
    </View>
  )
}

export default background