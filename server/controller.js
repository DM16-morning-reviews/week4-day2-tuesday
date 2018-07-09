module.exports = {
  getAllPets: (req, res) => {
    const db = req.app.get("db");
    db.getPets().then(pets => res.status(200).send(pets));
  },
  addPet: (req, res) => {
    const db = req.app.get("db");
    const { name, img } = req.body;

    db.addPet(name, img).then(pets => res.status(200).send(pets));
  }
};
