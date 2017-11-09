const baseUrl = `http://localhost:3004/users`
export const loadUsers = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const findUser = (id) => {
    console.log(id);
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
}

export const getUserPosts = (id) => {
    console.log(id);
    return fetch(`${baseUrl}/${id}/posts`)
        .then(res => res.json())
}

export const getUserComments = (id) => {
    console.log(id);
    return fetch(`${baseUrl}/${id}/comments`)
        .then(res => res.json())
}
