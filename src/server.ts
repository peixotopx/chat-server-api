import { server } from './http'
import './websockets/connection'

const PORT = process.env.PORT || 443
server.listen(PORT, () => { console.log("🔥 Server Running on port " + PORT)})
