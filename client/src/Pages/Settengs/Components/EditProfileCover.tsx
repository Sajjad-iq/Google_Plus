import ProfileCover from "../../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import { SettingsImageChangeSection } from "../../../Components/shared/SettingsImageChangeSection";
import { ChangeProfileCoverImage } from '../../../services/SettingsServices/ChangeProfileCoverImage';

export const EditProfileCover = () => {

    const { handleFileUpload, Photo } = ChangeProfileCoverImage()

    return (
        <SettingsImageChangeSection id='EditProfileCover' key={2} FileChange={handleFileUpload} ImageSrc={Photo == "" ? ProfileCover : Photo} />
    )
}
