import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
          title:{
                    type :String,
                    required :[true, 'Title is required'],
          },
          date :{
                    type : String,
                    required :[true, 'Date is required'],
          },
          finished :{
                    type : Boolean,
                    default :false
          },


})


const Tasks = mongoose.model('Mytask', TaskSchema)

export default Tasks
