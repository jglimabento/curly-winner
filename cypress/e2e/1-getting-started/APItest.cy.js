describe ('Teste de api', () => {
    it('Obter Posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => {
           expect(response.status).to.eq(200);
           expect(response.body).to.be.an('array').that.is.not.empty;

           const firstpost = response.body[0];
           expect(firstpost).to.have.property('userId',1);
           expect(firstpost).to.have.property('id').that.is.a('number');

    expect(firstpost).to.have.property('title').that.is.a('string');
    expect(firstpost).to.have.property('body').that.is.a('string');
 
        });

    });
});