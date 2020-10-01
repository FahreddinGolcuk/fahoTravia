import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

interface CountdownProps {
  until: number;
  stop?: number;
  onFinish?: () => void;
  onChange?: (current: number) => void;
}

const Countdown: React.FunctionComponent<CountdownProps> = ({
  until,
  stop = 0,
  onFinish,
  onChange,
}): JSX.Element => {
  const [time, setTime] = useState(until);
  const [completed, setCompleted] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setTime(until);
    }, [until]),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (time == stop && !completed) {
        if (onFinish) {
          setCompleted(true);
          onFinish();
        }
        setTime(stop);
      } else {
        if (time != stop) {
          setTime((prevState) => prevState - 1);
          if (onChange) {
            onChange(time);
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [completed, onFinish, stop, time]);
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};

export default Countdown;
