module.exports = {
  getAllPets: (req, res) => {
    const db = req.app.get("db");

    console.log(db);
    db.getPets().then(pets => res.status(200).send(pets));
  }
};
