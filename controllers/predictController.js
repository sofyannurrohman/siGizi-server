const { loadModel, predict } = require("./inference");
const { Child, Rule, Suplement, Food } = require("../models");
const { Sequelize } = require("sequelize");

exports.predictStunting = async (req, res) => {
  const userID = req.user.id;
  const { name, umur, jenis_kelamin, bb, pb, lk } = req.body;
  if (!umur || !jenis_kelamin || !bb || !pb || !lk) {
    return res.status(400).json({
      status: fail,
      code: 400,
      message:
        "please provide umur, jenis kelamin, berat badan, panjang badan, lingkar kepala",
    });
  }
  const model = await loadModel();
  let rule;
  let ideal;
  let suggestion;
  let food1, food2, food3;
  let payload;
  try {
    if (jenis_kelamin === "perempuan") {
      payload = [umur, 1, bb, pb, lk];
    } else {
      payload = [umur, 0, bb, pb, lk];
    }
    const hasil_predict = await predict(model, payload);
    console.log(`hasil predict = ${hasil_predict}`);
    console.log(`payload = ${payload}`);
    if (hasil_predict == 1) {
      label = "stunting";
    } else {
      label = "tidak stunting";
    }
    if (label === "stunting") {
      if (umur < 6) {
        rule = await Rule.findByPk(1);
        food1 = await Food.findByPk(1);
        ideal = `Buah hati anda setidaknya memerlukan asupan energi ${rule.energi}(kkal), lemak ${rule.lemak}(g), karbohidrat ${rule.karbohidrat}(g), protein ${rule.protein}(g), kalsium ${rule.kalsium}(mg).`;
        suggestion = `Kami menyarankan untuk meningkatkan asupan nutrisi dan menjaga kualitas air tetap bersih. Berikut rekomendasi asupan untuk buah hati anda : ${food1.name} .  ${food1.description} `;
        const newChild = await Child.create({
          userID,
          name,
          umur,
          jenis_kelamin,
          bb,
          pb,
          lk,
          label,
          ideal,
          suggestion,
        });
        const response = {
          userID,
          name: newChild.name,
          umur: newChild.umur,
          jenis_kelamin: newChild.jenis_kelamin,
          bb: newChild.bb,
          pb: newChild.pb,
          lk: newChild.lk,
          label: newChild.label,
          ideal: newChild.ideal,
          suggestion: newChild.suggestion,
          food1_url: `${food1.url}`,
        };
        return res.status(200).json({
          status: "success",
          code: 200,
          message: "model successfuly predict",
          data: response,
        });
      }
      if (6 < umur < 11) {
        food1 = await Food.findByPk(3);
        food2 = await Food.findByPk(2);
        food3 = await Food.findByPk(4);
        rule = await Rule.findByPk(2);
      }
      if (11 < umur) {
        food1 = await Food.findByPk(8);
        food2 = await Food.findByPk(9);
        food3 = await Food.findByPk(10);
        rule = await Rule.findByPk(3);
      }
      ideal = `Buah hati anda setidaknya memerlukan asupan energi ${rule.energi}(kkal), lemak ${rule.lemak}(g), karbohidrat ${rule.karbohidrat}(g), protein ${rule.protein}(g), kalsium ${rule.kalsium}(mg).`;

      suggestion = `Kami menyarankan untuk meningkatkan asupan nutrisi dan menjaga kualitas air tetap bersih. Berikut kami menyertakan kombinasi ide makanan yang mungkin cocok untuk buah hati anda : ${food1.name} (Pagi), ${food2.name} (Siang), ${food3.name} (Malam). Kombinasi ini ${food1.description} `;

      const newChild = await Child.create({
        userID,
        name,
        umur,
        jenis_kelamin,
        bb,
        pb,
        lk,
        label,
        ideal,
        suggestion,
      });
      let response;

      response = {
        userID,
        name: newChild.name,
        umur: newChild.umur,
        jenis_kelamin: newChild.jenis_kelamin,
        bb: newChild.bb,
        pb: newChild.pb,
        lk: newChild.lk,
        label: newChild.label,
        ideal: newChild.ideal,
        suggestion: newChild.suggestion,
        food1_url: `${food1.url}`,
        food2_url: `${food2.url}`,
        food3_url: `${food3.url}`,
      };
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "model successfuly predict",
        data: response,
      });
    } else {
      const suplement = await Suplement.findOne({
        order: Sequelize.literal("rand()"),
      });

      let rule;

      if (7 < umur < 11) {
        rule = await Rule.findByPk(2);
      }
      if (11 < umur) {
        rule = await Rule.findByPk(3);
      }
      if (umur < 6) {
        rule = await Rule.findByPk(1);
      }

      const ideal = `Buah hati anda telah memenuhi asupan nutrisi, tetap jaga asupan nutrisi harian buah hati anda dengan energi ${rule.energi}(kkal), lemak ${rule.lemak}(g), karbohidrat ${rule.karbohidrat}(g), protein ${rule.protein}(g), kalsium ${rule.kalsium}(mg).`;

      const suggestion = `Kami menyarankan untuk memaksimalkan tumbuh kembang buah hati Anda, dapat menambahkan dengan suplement seperti : ${suplement.name}. ${suplement.description}`;
      const newChild = await Child.create({
        userID,
        name,
        umur,
        jenis_kelamin,
        bb,
        pb,
        lk,
        label,
        ideal,
        suggestion,
      });

      const response = {
        userID,
        name: newChild.name,
        umur: newChild.umur,
        jenis_kelamin: newChild.jenis_kelamin,
        bb: newChild.bb,
        pb: newChild.pb,
        lk: newChild.lk,
        label: newChild.label,
        ideal: newChild.ideal,
        suggestion: newChild.suggestion,
        suplement_url: `${suplement.url}`,
      };

      return res.status(200).json({
        status: "success",
        code: 200,
        message: "model successfuly predict",
        data: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      code: 500,
      message: error.message,
    });
  }
};
