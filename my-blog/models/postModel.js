import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title:String,
    description:String,
    image:String,
    date_create:String
},{toJSON:{virtuals:true}});

postSchema.virtual('short_description').get(function(){
    return this.description.substr(0,50)+'....'
});
postSchema.virtual('date_formatted').get(function(){
    return changeDateFormat(this.date_create)
});

function changeDateFormat(date_str){
    const date = new Date(date_str);
    const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

    return '${months[date.getMonth()]} ${date.getDate(), ${date.getFullYear()}';
}

const PostModel = models.Post || model('Post',postSchema);

export default PostModel;