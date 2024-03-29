const express = require("express");
const router = express.Router();
let Student=require("../models/student");

http://localhost:8070/student/add


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }) .catch((err)=>{
        console.log(err);
    })
})


http://localhost:8070/student


router.route("/").get((req,res)=>{
    
    Student.find().then((students)=>{
        res.json(students)
    }) .catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/student/update/


router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status:"User updated"});
    }) .catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})


http://localhost:8070/student/delete/

router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
        console.log(userId);
    }) .catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user ", error: err.message});
    })
})
// app.delete('/students/:id', async (req, res) => {
//     try {
//       await Student.findByIdAndDelete(req.params.id);
//       res.json({ message: 'Student deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


router.route("/get/:id").get(async (req,res)=>{
     let userId =req.params.id;
     const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status: "User fetched", student})
     }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
     })
})




module.exports=router;