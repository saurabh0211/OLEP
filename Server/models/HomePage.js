import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let HomePage = new Schema({
    banner:{
        branchImageUrl: {
            type: String
        },
        menuItems:[{
            item:{
                type: String
            }
        }],
        heading:{
            type: String
        },
        subHeading:{
            type:String
        }
    },
    cards:[{
        card:[{
            imageUrl: String,
            title: String,
            cardContent: String
        }]
    }]
});

export default mongoose.model('HomePage',HomePage);