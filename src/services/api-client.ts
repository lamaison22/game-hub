import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "45ded0bcf48548b5905062c323899134"
    }
})