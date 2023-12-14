import './App.css'
function App(data) {
  const img = data.damu()
  return (
    <>
      <h2 className='heading'>Image Gallery using function</h2>
      <div className='Bigdiv'>
        {
          img.map((obj) => {
            return (
              <img src={obj.img} />
            )
          })
        }
      </div>
    </>
  )




} export default App