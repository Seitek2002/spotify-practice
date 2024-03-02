import Search from "../components/screens/Search"
import BaseLayout from "../layout/BaseLayout"
import { IUser } from "../types/Users"

const SearchPage = ({ usersData }: {usersData: IUser}) => {
  return (
    <BaseLayout usersData={usersData} component={<Search />} />
  )
}

export default SearchPage