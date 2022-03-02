const mongoose = require('mongoos');
const Schema = mongoose.Schema;

const CreateGas = new Schema({
    blockNum: Number,
    fast: Number,
    average: Number,
    low: Number,
});

const GasAverage = new Schema({
    averageGasPrice: Number,
    fromTime: Number,
    toTime: Number,
});

const EtherscanGas = new Schema({
    LastBlock: string,
    SafeGasPrice: string,
    ProposeGasPrice: string,
    FastGasPrice: string,
    suggestBaseFee: string,
    gasUsedRatio: string
});

const gasSchema = new Schema({
    fast: {
      type: Number,
      required: true
    },
    average: {
      type: Number,
      required: true
    },
    low: {
      type: Number,
      required: true
    },
    blockNum: {
      type: Number,
      required: true,
      unique: true
    }
  }, {
    timestamps: true
  });

const Gas = mongoose.model('gas', gasSchema);

module.exports = Gas;