session: {
  date: Date,
  
  animal: {
    number: Number,
    weightBefore: Number,
    weightAfter: Number,
    waterGiven: Number,
  }

  behavior: {
    lickDetection: Boolean,
    boxLights: Boolean,
    wallLeft: Boolean,
    wallRight: Boolean,
    wallFront: Boolean,
    water: Boolean,
    shelter: Boolean,
    protocol: {
      type: String,
      enum: [ 'running' , 'corridor' , 'unbiased' , 'antibias' , 'two-choice' ]
    },
  }

  location: String,
  experimentor: String,
}