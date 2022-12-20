export const login = (userName, password) => {
    if(userName !== "serratec" || password !== "123") {
        alert("Email e/ou senha incorretos!")
    } else {
    //return await api.post("/login", { login: username, password: password})
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: "eykasljdapisjadsl.ldhapsaisjasdpja1231wsda",
                user: {
                    name: "Serratec",
                    email: "serratec@gmail.com"
                }
            })
        }, 1000)
    })
}}