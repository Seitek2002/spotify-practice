import LikedSongs from "../components/screens/LikedSongs"
import BaseLayout from "../layout/BaseLayout"
import { IUser } from "../types/Users"

const LikedSongsPage = ({ usersData }: {usersData: IUser}) => {
  return (
    <BaseLayout usersData={usersData} component={<LikedSongs />} />
  )
}

export default LikedSongsPage