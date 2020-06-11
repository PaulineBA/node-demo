module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    name: 'Foobar',
    createdAt: new Date(),
    updatedAt: new Date(),
  
  }) 
}