const baseUrl = 'http://localhost:3004/posts';

export const loadPosts = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getPost = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
}

export const getPostComments = (id) => {
    return fetch(`${baseUrl}/${id}/comments`)
        .then(res => res.json())
}

export const createPost = (post) => {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: post.userId
        })
    }).then(res => res.json())
}
