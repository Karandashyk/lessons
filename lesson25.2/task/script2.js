import { commentList } from './comments';

function getCommentFromUser(userId) {  
    return {
        user: userId,
        comments:commentList.filter(function (comment) {
            return comment.user === userId 
        },
    };
}

let userIds = [1, 4, 5],  
    userComments = userIds.map(getCommentFromUser);



import { commentList } from './comments';

const getCommentFromUser = (comments) => (userId) => ({  
    user: userId,
    comments: comments.filter( (comment) => comment.user === userId),
})

let userIds = [1, 4, 5],  
    userComments = userIds.map(getCommentFromUser(commentList));