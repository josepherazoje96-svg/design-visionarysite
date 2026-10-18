export function AnimatedBg() {
  return (
    <>
      <div className="bg-solid" />
      <div className="ambient" aria-hidden="true">
        <i className="amb amb--1" />
        <i className="amb amb--2" />
        <i className="amb amb--3" />
      </div>
      <div className="bg-grain" />
    </>
  )
}
