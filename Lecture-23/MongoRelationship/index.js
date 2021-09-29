const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/relationshipDB');

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    addresses: [
        {
            _id:{id:false},
            street: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    

    // const user = new User({ name: 'Harry', email: 'harry@gmail.com' });

    // user.addresses.push({ street: 'L-24, Golf Course Road', state: 'Delhi', country: 'India' });

    // await user.save();

    // console.log(user);

    // const user = new User({ name: 'Max', email: 'max@gmail.com' });



    user.addresses.push({ street: 'M-2, Lajpat Nagar', state: 'Delhi', country: 'India' });

    await user.save();

    console.log(user);

}


const addAddress = async (id)=>{
    
    const user = await User.findById(id);

    user.addresses.push({ street: 'M-2, Lajpat Nagar', state: 'Delhi', country: 'India' })

    await user.save();

    console.log(user);

}

addAddress('6153ecbe87e7dda461310683');


// makeUser();

