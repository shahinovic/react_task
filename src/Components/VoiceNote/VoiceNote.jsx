import { audio_track } from "../../../assets";

const VoiceNote = ({ ...rest }) => {
  return (
    <div {...rest}>
      <img className="w-100" src={audio_track} alt="" />
    </div>
  );
};

export default VoiceNote;
