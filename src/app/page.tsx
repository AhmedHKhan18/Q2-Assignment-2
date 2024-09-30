export default function App(){
  return(
    <div className="h-screen flex justify-between items-center px-10 bg-yellow-400">
      <div>
    <h1 className="text-7xl font-semibold">Hi, I am <span className="text-blue-500">Ahmed</span></h1>
    <p className="text-2xl max-w-xl">I am a software engineer.Currently I am studying in Governor Initiative.</p>
      </div>
      <div>
        <img src="https://avatars.githubusercontent.com/u/154304084?v=4" className="rounded-full shadow-lg shadow-black"/>
      </div>
    </div>
  )
}