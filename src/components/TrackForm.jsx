import React from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
  const {
    state, startRecording, stopRecording, changeName,
  } = React.useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={state.name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        { state.recording
          ? (
            <Button
              title="Stop"
              onPress={stopRecording}
            />
          )
          : (
            <Button
              title="Start recording"
              onPress={startRecording}
            />
          )}
      </Spacer>
      <Spacer>
        { !state.recording && state.locations.length
          ? (
            <Button
              title="Save Recording"
              onPress={saveTrack}
            />
          )
          : null }
      </Spacer>
    </>
  );
};

export default TrackForm;
