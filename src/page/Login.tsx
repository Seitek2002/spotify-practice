import { loginEndpoint } from "../spotify"

const Login = () => {
  return (
    <div className="login-page">
      <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="" />
      <a href={loginEndpoint}>
        <span className="login-btn">LOGIN</span>
      </a>
    </div>
  )
}

export default Login
