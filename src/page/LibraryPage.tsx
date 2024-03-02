import Library from "../components/screens/Library"
import BaseLayout from "../layout/BaseLayout"
import { IUser } from "../types/Users"

const LibraryPage = ({ usersData }: {usersData: IUser | null}) => {
  return (
    <BaseLayout usersData={usersData} component={<Library />} />
  )
}

export default LibraryPage