const listModel = require('../models/listModel')
const router = require('express').Router()

router.post("/lists", async (req, res) => {
    try {
        let list = await listModel.create(req.body)
        res.json({
            status : "Success",
            list
        })
    }
    catch (e) {
        return res.status(400).json({
            status: "Failed",
            message: e.message
        })
    } 
});

router.get('/lists', async (req, res) => {
    try {
        const lists = await listModel.find()
        res.status(200).json({
            status: "Success",
            lists
        })

    } catch (e) {
        return res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.put('/lists/:id' , async (req , res)=> {
    try{
        const timeTaken = await listModel.updateMany({_id : req.params.id} , {$set : {Time_taken: req.body.Time_taken , Status: "completed"}})
        res.json({
            status : "Success",
            timeTaken
        })
    }
    catch (e){
        res.status(400).json({ 
            status : "Failed",
            message : e.message
        })
    }
})


router.get("/", (req, res) => {
    res.json({
        "Message": "404 not found"
    })
})

module.exports = router