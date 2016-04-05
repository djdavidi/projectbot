'use strict';
var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:String,
    description:String,
    link:String,
    category:String,
    //defautl all
    numTimesViewed:{
    	type:Number,
    	default:0
    },
    numTimesSelected:{
    	type:Number,
    	default:0
    }
})

schema.statics.findRandom = function(category){
    if(!category) return this.findOne({});
    return this.findOne({category:category})
}

var get 



mongoose.model('Api',schema)