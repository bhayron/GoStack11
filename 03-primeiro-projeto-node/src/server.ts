import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response)=>{
    return response.json({message: 'Hello Bhayron'});
})

app.listen(3333, ()=>{
    console.log('Server online');
    
});