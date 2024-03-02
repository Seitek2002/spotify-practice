import Home from "../components/screens/Home"
import BaseLayout from "../layout/BaseLayout"
import { IUser } from "../types/Users"


const HomePage = ({ usersData }: {usersData: IUser}) => {
  return <BaseLayout usersData={usersData} component={<Home />} />
}

export default HomePage