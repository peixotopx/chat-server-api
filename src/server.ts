import { server } from './http'
import './websockets/connection'

const PORT = process.env.PORT_SERVER || 443
server.listen(PORT, () => { console.log("🔥 Server Running on port " + PORT)})
