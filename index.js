import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("welcome")
});

app.get("/reservation", (req,res) => {
    throw new Error("somthing went wrong")
});

app.use((error, req, res, next) => {
    console.error("error:", error.message);
    res.status(500).json({message: "internal server error!"})
})

app.listen(3000, () => console.log(`server is runing on http://localhost 3000`))



const reserveTable = () => {
    const error = Math.random() > 0.5 ? "its full!" : null;
    if(error) {
        Callback(error);
    } 
    else {
        callback(null, "we are not full");
    }
};

reserveTable((error, success) => {
    if(error) {
        console.log("oops", error);
    }
    else {
        console.log(success);
    }
});



const reserveTable2 = () => {
    return new Promise((resolve, reject) => {
        const error = Math.random() > 0.5 ? "its full!" : null;
        if(error) {
         reject(error);
        } else {
         resolve("we are not full");
        }
    });
};
reserveTable()
.then(success => console.log(success))
.catch(error => console.error("oops", error));



const reserveTable3 = () => {
        const error = Math.random() > 0.5 ? "its full!" : null;
        if(error) {
         throw new Error(error);
        } else {
         return "we are not full";
        }
};
const makeReservation = async() => {
    try {
        const message = await reserveTable();
        console.log(message);  
    } catch (error) {
        console.error("oops", error.message);   
    }
};

makeReservation();


