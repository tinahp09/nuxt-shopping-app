

export default function ({ $axios, app, store, redirect }, inject) {
    $axios.onRequest(config => { });
    $axios.onResponse(config => {
        console.log('response successfull')
        return config
    });
    $axios.onError(error => {
        if (error.status === 300) {
            console.log('Redirection Error')
        } else if (error.status === 400) {
            console.log('Bad request')
        } else if (error.status === 403) {
            console.log('You dont have permision')
        } else if(error.status === 404) {
            console.log('Not found')
        }
    })
}