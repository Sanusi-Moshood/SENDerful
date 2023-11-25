import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already '],
        required: [true, 'Email is required'],
    },
    username:{
        type: String, 
        required: [true, 'Email is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    password:{
        type: String,
        required: [true, 'Password is required'],
        match: [/^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/, 'Password should be more than 6 characters long, contains at least 1 number, and at least 1 symbol'    ]
    }
})