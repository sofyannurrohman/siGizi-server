const tfjs = require("@tensorflow/tfjs-node");
function loadModel() {
  const modelUrl = "file://ml/model.json";
  return tfjs.loadLayersModel(modelUrl);
}

function predict(model, payload) {
  const inputData = tfjs.tensor(payload).reshape([-1, 5]);

  const score = tfjs.tidy(() => {
    const prediction = model?.predict(inputData);
    if (prediction) {
      return prediction.dataSync()[0];
    } else {
      // Handle prediction error (optional)
      console.error("Prediction failed!");
      return 0;
    }
  });

  return score;
}

module.exports = { loadModel, predict };
