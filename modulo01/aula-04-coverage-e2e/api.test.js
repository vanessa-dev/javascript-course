const {describe, it} = require('mocha');
const request = require('supertest');
const app = require('./api');
const assert = require('assert');

describe('API Suite teste', () =>{
    describe('/contact',()=>{
        it('should request the contact and return HTTP Status 200', async()=>{
            const response = await request(app).get('/contact').expect(200);
            assert.deepStrictEqual(response.text, 'contact as page');
        })
    });  
    
    describe('/hello',()=>{
        it('should an inexistent route must redirect for the  default route', async()=>{
            const response = await request(app).get('/hi').expect(200);
            assert.deepStrictEqual(response.text, 'Hello World!');
        })
    });
    
    describe('/login',()=>{
        it('should login successfully on the login route and return HTTP status 200', async()=>{
            const response = await (await request(app).post('/login')).send({username:'Vanessa',password:'teste'}).expect(200);
            assert.deepStrictEqual(response.text, 'LOgin has successed!');
            console.log('response',response);
        });

        it('should unauthorize a requestiing it use  wrong credentials and return HTTP Status 401', async()=>{
            const response = await (await request(app).post('/login')).send({username:'User errado',password:'pass errado'}).expect(401);
            assert.ok(response.unauthorized);
            assert.deepStrictEqual(response.text,"Logging failed");
        })
    });
});