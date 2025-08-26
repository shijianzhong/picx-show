export default function HelloPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello World!</h1>
      <p>如果你能看到这个页面，说明Vercel部署成功了！</p>
      <p>时间: {new Date().toLocaleString()}</p>
    </div>
  )
}
