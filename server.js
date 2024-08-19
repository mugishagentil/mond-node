import { error } from 'console';
import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const server = http.createServer(async(req, res) => {
  try{
    if(req.method === 'GET'){
      let filePath;
      if(req.url === '/'){
        filePath = path.join(__filename, 'public', 'Home.html')
      }else if(req.url === '/About'){
       filePath = path.join(__dirname, 'public', 'About.html')
      }else{
      throw new error('Page Not Found')
      }
      const data = await fs.readFile(filePath)
      res.writeHead('Content-Text' , 'text/html')
      res.write(data)
      res.end()
    }else {
      throw new error('Method Not Allowed')
    }
  } catch{
    res.writeHead(500, {'Content-Type' : 'text/html'});
    res.end('Server Error')
  }

 
})
server.listen(PORT, () => {
  console.log(`Your Server Is ${PORT}`)
})