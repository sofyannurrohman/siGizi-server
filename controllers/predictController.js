import { loadModel, predict } from "./inference";
exports.predictStunting = async (req, res) => {
  const payloads = req.body;
  const model = await loadModel();

  const predict = predictStunting(model, payloads);
  return res.response().json({
    status: "success",
    message: "",
    data: predict,
    createdAt: new Date().toISOString(),
  });
};
