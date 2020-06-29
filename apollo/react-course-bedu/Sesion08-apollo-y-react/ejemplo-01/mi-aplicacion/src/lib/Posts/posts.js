const queryAllPost = `
    query allPost {
        allPost {
            id
            title
            views
            User{
                name
            }
            Coments {
                date
                body
            }
        }
    }
`




function Posts(params){
    function fetch(){
        return window.fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: queryAllPost  })

        })
        .then(response => response.json())
        .then(body => body.data.allPosts)
    }

    return fetch
}

export default Posts