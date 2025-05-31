const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
  {
    clas: {
      type: String,
      required: true
    },
    img_background: {
      type: String
    }
  }
)

let Category = mongoose.model('Category',categorySchema)


const subCatSchema = new mongoose.Schema(
  {
    clas: {
      type: String,
      required:true
    },
    parent:{
      type:String,
      required: true
    },
    img_background:{
      type: String
    }
}
)

let Subcategory = mongoose.model('Subcategory',subCatSchema)

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    cat_id:{
      type: String,
      required: true
    },
    subcat_id:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required:true
    },
    opening_hours:{
      type:String,
      required:true
    },
    pictures:{
      type: Array,
      required:true
    },
    videos:{
      type:Array,
      required: true
    },
    provides:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    website:{
      type:String,
      required:true
    }

  }
)

let Company = mongoose.model('Company',companySchema)

const reviewsSchema = new mongoose.Schema(
  {
    company_id:{
      type:String,
      required:true
    },
    from:{
      type:String,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      required: true
    },
    rate:{
      type:Number,
      required:true
    },
    comments:{
      type:String,
      required:true
    }
  }
)

let Review = mongoose.model('Review',reviewsSchema)
module.exports={Review, Category, Subcategory,Company}
//module.exports = {category,subcategory,company,review}