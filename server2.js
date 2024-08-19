import {createServer} from 'http'
const PORT = process.env.PORT

const Users = [
  {id: 1, name: 'Mugisha Gentil'},
  {id: 2, name: 'Pazzo'},
  {id: 3, name:  'Byiringiro'}, 
  {id: 4, name: 'Katy'}
]

const server = createServer((req, res) => {
  if(req.url === 'api/Users' && req.method === 'GET'){
    res.setHeader('Content-Tyoe' , 'application/json');
    res.write(JSON.stringify(Users));
    res.end();
  }else if(req.url.match(/\/api\/Users\/([0-9] + )/ ) && req.method === 'GET'){
    res.setHeader('Content-Tyoe' , 'application/json');
    res.write(JSON.stringify({id: 1, name: 'Mugisha'}));
    res.end();
  }
  else{
    res.setHeader('Content-Tyoe' , 'application/json');
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'User Not Found'}));
    res.end();
  }
} )

server.listen(PORT, () => {
  console.log`Your Server Is ${PORT}`
})