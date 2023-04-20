///<reference types = "cypress"/>
let access_token = ''; 
describe('API Tests', () => {
  it('Login in Test', () => {
    cy.request({
       
      method : 'POST',
      url : 'https://qacandidatetest.ensek.io/ENSEK/login',
      body: {
         "username": "test",
         "password": "testing"
      },
      form: false

    }).then((res)=>{
      expect(res.status).to.eq(200)   
      cy.log(JSON.stringify(res.body.access_token)) ;
      access_token = res.body.access_token;
   })
  })
})