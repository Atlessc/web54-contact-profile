import '../styles/background.css'

export default function BackgroungImg() {
  return (
    <div className="background">
      {/* img element to an image in the public folder */}
      <img src="/new-background.png" alt="background" />
    </div>
  )
}