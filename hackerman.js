let message = ["initializing hacker program....",
              "fetching data ......",
              "connecting instagram.....",
              "anuragchasingstars id found.....",
              "fetching data....",
              "applying bruteforce method....",
              "200k password try......",
              "match not found ......",
              "connection failed.....",
              "reconnecting.......",
              "applying bruteforce method....",
               "200k password try......",
              "match found.....",
              "password found.....",
              "password collected ....",
              "accessing account",
                "hack succesful"]

const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(2)
        // console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
}
(async () => {
        for (let i = 0; i < message.length; i++) {
                await showHack(message[i])
        }
})()