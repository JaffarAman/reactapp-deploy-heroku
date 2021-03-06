const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

//main import
const path = require("path")

////IS FILE KO CHALANA HAI / path pr ///
app.use("/" , express.static(path.join(__dirname, '../build')))

app.get("/api/v1/create" , (req,res)=>{
        res.send("<h1>Create GET Request SuccessFully RUn</h1>")
})


app.post("/api/v1/create" , (req,res)=>{
    res.send("<h1>Create POST Request SuccessFully RUn</h1>")
})


app.put("/api/v1/create" , (req,res)=>{
    res.send("<h1>Create UPDATE Request SuccessFully RUn</h1>")
})


app.delete("/api/v1/create" , (req,res)=>{
    res.send("<h1>Create Delete Request SuccessFully RUn</h1>")
})

app.get("/**" , (req,res)=>{
    // res.sendFile(path.join(__dirname , "../build/index.html"))
    res.redirect("/")
    })

// app.use((res,req,next)=>{
//     res.redirect("<h1>404 page not found</h1>")
// })

app.listen(PORT , ()=>console.log(`server is running on localhost${PORT}`))