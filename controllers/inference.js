const tf = require("@tensorflow/tfjs");

function loadModel() {
  const modelUrl =
    "https://storage.googleapis.com/cancer-models/models/model.json";
  return tf.loadGraphModel(modelUrl);
}

function predict(model, payloads) {
  return model.predict(payloads).data();
}

module.exports = { loadModel, predict };
