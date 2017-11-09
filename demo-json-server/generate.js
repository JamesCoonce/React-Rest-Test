module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        users: _.times(5, function (n){
            return {
                id: n,
                name: faker.name.findName(),
                email: faker.internet.email(),
                avatar: faker.internet.avatar()
            }
        }),
        posts: _.times(6, function (n){
            return {
                userId: _.random(0, 5),
                id: n,
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph()
            }
        }),
        comments: _.times(20, function (n){
            return {
                userId: _.random(0, 5),
                postId: _.random(0, 6),
                id: n,
                body: faker.lorem.paragraph()
            }
        })
    }
}