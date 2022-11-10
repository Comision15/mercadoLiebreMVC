const db = require("../database/models");
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    return res.render("userRegister");
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, surname, email, pass } = req.body;
      db.User.create({
        name,
        surname,
        email,
        password: hashSync(pass, 10),
        rolId: 2,
        avatar: "default.png",
      })
        .then(({ id, name, rolId, avatar }) => {
          db.Address.create({
            userId: id,
          }).then(() => {
            req.session.userLogin = {
              id,
              name,
              rolId,
              avatar,
            };

            return res.redirect("/");
          });
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("register", {
        errors: errors.mapped(),
      });
    }
  },
  login: (req, res) => {
    return res.render("userLogin");
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      const { email, remember } = req.body;

      db.User.findOne({
        where: {
          email,
        },
      }).then(({ id, name, rolId, avatar }) => {
        req.session.userLogin = {
          id,
          name,
          rolId,
          avatar,
        };

        if (remember) {
          res.cookie("MercadoLiebre16ForEver", req.session.userLogin, {
            maxAge: 1000 * 60 * 2,
          });
        }

        return res.redirect("/");
      });
    } else {
      return res.render("login", {
        errors: errors.mapped(),
      });
    }
  },
  profile: (req, res) => {
    db.User.findByPk(req.session.userLogin.id, {
      include: ["address"],
    })
      .then((user) =>
        res.render("userProfile", {
          user,
        })
      )
      .catch((error) => console.log(error));
  },
  updateProfile: (req, res) => {},
  logout: (req, res) => {},
  remove: (req, res) => {},
};
