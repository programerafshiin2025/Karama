import express from 'express';
import mongoose from 'mongoose';
import Tasks from './models/taskmodel.js';

const app=express()
app.use(express.json())
const port=6000;

app.get('/', async(req, res)=>{
          const GesTasks=await Tasks.find()
          res.json(GesTasks)
})


app.post('/', async(req, res)=>{
          const { title, date, finished } = req.body;

          const NewTask=new Tasks({
                    title,date,finished
          });
          const PutTasks= await NewTask.save();
          res.json(PutTasks)

})

app.put('/:id', async(req, res)=>{
          const { title, date, finished } = req.body;
          const putTask=await Tasks.findById(req.params.id)
          if(putTask){
                    putTask.title=title
                    putTask.date=date
                    putTask.finished=finished

                    const UpdateTask=await putTask.save();
                    res.json(UpdateTask)
          }



})

app.delete('/:id', async(req, res)=>{

          const DeleteTask=await Tasks.findByIdAndDelete(req.params.id)
          res.json({message:"Task Deleted"})
})


app.listen(port, ()=>{
          console.log(`Server is running ${port}`);
})

mongoose.connect("mongodb+srv://khayrexasan69:khayrexasan69@mobillapp.faymvbr.mongodb.net/Mytask?retryWrites=true&w=majority&appName=MobillApp")
.then(()=>{
          console.log('Connect Database Successfull');
})
