export default function Home() {
  return (
    <>
      <div>Hello World</div>
      <button
        onClick={() => {
          console.log('onClick')
        }}
      >
        PRESS ME
      </button>
    </>
  )
}
