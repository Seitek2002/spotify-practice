import Home from "../components/screens/Home"
import BaseLayout from "../layout/BaseLayout"
import { IUser } from "../types/Users"


const HomePage = ({ usersData,setCurrentSong }: {usersData: IUser | null}) => {
  return <BaseLayout usersData={usersData} component={<Home setSong={setCurrentSong}/>} />
}

export default HomePage