import UserImage from "../../../assets/ICONS/ProfileImg.jpg"
import { SettingsImageChangeSection } from "../../../Components/shared/SettingsImageChangeSection";
import { ChangeProfileImageHandler } from '../../../services/SettingsServices/ChangeProfileImageHandler';

export const EditProfileImage = () => {

    const { handleFileUpload, Photo } = ChangeProfileImageHandler()


    return (
        <SettingsImageChangeSection id='EditProfileImage' key={1} FileChange={handleFileUpload} ImageSrc={Photo == "" ? UserImage : Photo} />
    )
}
